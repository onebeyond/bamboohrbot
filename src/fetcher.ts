import moment from 'moment';
import pMap from 'p-map';
import sdk from '@api/bamboohr'; // @bamboohr/v1#43haj4kl796vw3d

import {
  BAMBOOHR_TIME_OFF_APPROVED,
  BAMBOOHR_TIME_WHOS_OUT_TYPE,
  CONCURRENCY,
  nextWorkingDay,
  YEAR_MONTH_DATE_FORMAT,
} from './common';
import {
  TBambooHREmployee,
  TBambooHREmployeeAtOffice,
  TBambooHREmployeeExtended,
  TBambooHREmployeesDirectory,
  TBambooHRWhosOut,
  TWhosOut,
} from '.';

const commonMetadata = {
  companyDomain: process.env.BAMBOOHR_SUBDOMAIN as string,
  Accept: 'application/json' as const,
};

const mapper = async (
  employee: TBambooHREmployee
): Promise<TBambooHREmployeeExtended> => {
  const { data } = await sdk.getEmployee({
    ...commonMetadata,
    id: employee.id,
    fields: 'birthday,hireDate,country',
  });

  return {
    ...employee,
    ...data,
  };
};

export const getEmployees = async (
  countryList: string[]
): Promise<TBambooHREmployeeExtended[]> => {
  let employees: TBambooHREmployeeExtended[];

  const { data } = await sdk.getEmployeesDirectory({
    ...commonMetadata,
  });

  employees = await pMap(
    (data as TBambooHREmployeesDirectory).employees,
    mapper,
    { concurrency: CONCURRENCY }
  );

  return countryList.length > 0
    ? employees.filter(employee => countryList.includes(employee.country ?? ''))
    : employees;
};

export const getEmployeesAtOffice = async (
  today: moment.Moment
): Promise<TBambooHREmployeeAtOffice[]> => {
  const { data } = await sdk.timeOffGetTimeOffRequests({
    ...commonMetadata,
    start: nextWorkingDay(today).format(YEAR_MONTH_DATE_FORMAT),
    end: nextWorkingDay(today).format(YEAR_MONTH_DATE_FORMAT),
    status: BAMBOOHR_TIME_OFF_APPROVED,
    type: process.env.TIME_OFF_OFFICE_CODE,
  });

  return data as TBambooHREmployeeAtOffice[];
};

export const getBankHolidays = async (
  today: moment.Moment
): Promise<TWhosOut> => {
  const { data: whosOutData } = await sdk.getAListOfWhoSOut({
    ...commonMetadata,
    start: nextWorkingDay(today).format(YEAR_MONTH_DATE_FORMAT),
    end: nextWorkingDay(today).format(YEAR_MONTH_DATE_FORMAT),
  });

  const { data: whosOutThisMonthData } = await sdk.getAListOfWhoSOut({
    ...commonMetadata,
    start: moment(today).startOf('month').format(YEAR_MONTH_DATE_FORMAT),
    end: moment(today).endOf('month').format(YEAR_MONTH_DATE_FORMAT),
  });

  return {
    next: (whosOutData as TBambooHRWhosOut[]).filter(
      e => e.type === BAMBOOHR_TIME_WHOS_OUT_TYPE
    ),
    month: (whosOutThisMonthData as TBambooHRWhosOut[]).filter(
      e => e.type === BAMBOOHR_TIME_WHOS_OUT_TYPE
    ),
  };
};
