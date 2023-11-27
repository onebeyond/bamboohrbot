import moment from 'moment';
import sdk from '@api/bamboohr'; // @bamboohr/v1#43haj4kl796vw3d

import { TBambooHREmployeeAtOffice } from '..';
import { BAMBOOHR_TIME_OFF_APPROVED, YEAR_MONTH_DATE_FORMAT } from '../common';
import commonMetadata from './commonMetadata';
import { nextWorkingDay } from '../utils/nextWorkingDay';

export default async function fetchEmployeesAtOffice(
  today: moment.Moment
): Promise<TBambooHREmployeeAtOffice[]> {
  const { data } = await sdk.timeOffGetTimeOffRequests({
    ...commonMetadata,
    start: nextWorkingDay(today).format(YEAR_MONTH_DATE_FORMAT),
    end: nextWorkingDay(today).format(YEAR_MONTH_DATE_FORMAT),
    status: BAMBOOHR_TIME_OFF_APPROVED,
    type: process.env.TIME_OFF_OFFICE_CODE,
  });

  return data as TBambooHREmployeeAtOffice[];
}
