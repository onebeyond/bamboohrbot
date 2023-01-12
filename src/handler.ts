import * as dotenv from 'dotenv';
import moment from 'moment';
import sdk from '@api/bamboohr';

dotenv.config();

import { getEmployees, getEmployeesAtOffice, getBankHolidays } from './fetcher';
import {
  publishEmployeesAtOffice,
  publishEmployeesCelebrations,
  pusblishBankHolidays,
} from './publisher';
import { getSecret, initializeSecretsManager } from './secrets';

export async function main() {
  initializeSecretsManager();

  const value = await getSecret('BAMBOOHR_KEY');
  sdk.auth(value ?? '');

  const today = moment();
  const countryList: string[] =
    process.env.EMPLOYEE_COUNTRY_FILTER?.split(',') ?? [];

  // Fetch info from BambooHR API
  const [employees, employeesAtOffice, bankHolidays] = await Promise.all([
    getEmployees(countryList),
    getEmployeesAtOffice(today),
    getBankHolidays(today),
  ]);

  // Publish to slack
  await Promise.all([
    publishEmployeesAtOffice(employees, employeesAtOffice, today),
    publishEmployeesCelebrations(employees, today),
    pusblishBankHolidays(bankHolidays, today),
  ]);

  return {
    message: 'Published to Slack!',
  };
}
