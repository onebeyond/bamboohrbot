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

  // Mock
  // const employeesBuffer = await fs.readFile('../../mock/mocked-employees.json', { encoding: 'utf-8' });
  // const employees = JSON.parse(employeesBuffer.toString());
  // const employeesAtOfficeBuffer = await fs.readFile('../../mock/mocked-employees-at-office.json', { encoding: 'utf-8' });
  // const employeesAtOffice = JSON.parse(employeesAtOfficeBuffer.toString());
  // const whosOutNextBuffer = await fs.readFile('../../mock/mocked-next-whos-out.json');
  // const whosOutMonthlyBuffer = await fs.readFile('../../mock/mocked-monthly-whos-out.json');
  // const bankHolidays = {
  //   next: JSON.parse(whosOutNextBuffer.toString()),
  //   month: JSON.parse(whosOutMonthlyBuffer.toString())
  // }

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