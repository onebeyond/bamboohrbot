import * as dotenv from 'dotenv';
dotenv.config()

import moment from 'moment';
import fs from 'fs/promises';

import { getEmployees, getEmployeesAtOffice, getBankHolidays } from './fetcher';
import { publishEmployeesAtOffice, publishEmployeesCelebrations, pusblishBankHolidays } from './publisher';
import { nextWorkingDay } from './common';

export async function main() {
  const today =  moment();
  const countryList: string[] = process.env.COUNTRY_FILTER?.split(",") ?? [];

  // Fetch info from BambooHR API
  const [employees, employeesAtOffice, bankHolidays] = await Promise.all([
    getEmployees(countryList),
    getEmployeesAtOffice(today),
    getBankHolidays(today)
  ]);

  // Publish to slack
  await Promise.all([
    publishEmployeesAtOffice(employees, employeesAtOffice, today),
    publishEmployeesCelebrations(employees, today),
    pusblishBankHolidays(bankHolidays, today)
  ]);

  return {
    message: 'Published to Slack!',
  };
}