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
import { TSecrets } from '.';

const secrets: TSecrets = {};

initializeSecretsManager();

const getSecretFromAWS = async (key: string): Promise<string | undefined> => {
  if (secrets[key]) return secrets[key];

  const value = await getSecret(key);
  secrets[key] = value;
  return value;
};

export async function main() {
  const value = await getSecretFromAWS('BAMBOOHR_KEY');
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
