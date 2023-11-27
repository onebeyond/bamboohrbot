import pMap from 'p-map';
import sdk from '@api/bamboohr'; // @bamboohr/v1#43haj4kl796vw3d

import { CONCURRENCY } from '../common';
import {
  TBambooHREmployee,
  TBambooHREmployeeExtended,
  TBambooHREmployeesDirectory,
} from '..';
import commonMetadata from './commonMetadata';

async function mapper(
  employee: TBambooHREmployee
): Promise<TBambooHREmployeeExtended> {
  const { data } = await sdk.getEmployee({
    ...commonMetadata,
    id: employee.id,
    fields: 'birthday,hireDate,country',
  });

  return {
    ...employee,
    ...data,
  };
}

export default async function fetchEmployees(
  countryList: string[]
): Promise<TBambooHREmployeeExtended[]> {
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
}
