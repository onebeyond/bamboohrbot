import * as dotenv from 'dotenv';
dotenv.config();

import moment from 'moment';
import sdk from '@api/bamboohr';
import { App, LogLevel } from '@slack/bolt';

import {
  fetchEmployees,
  fetchEmployeesAtOffice,
  fetchBankHolidays,
} from './fetchers';
import {
  employeesAtOfficeBlockBuilder,
  employeesCelebrationsBlockBuilder,
  bankHolidaysBlockBuilder,
} from './blockBuilders';
import { getSecret, initializeSecretsManager } from './utils/secrets';
import { postSlackMessage } from './slack/postSlackMessage';

export async function main() {
  initializeSecretsManager();

  const slackBotToken = await getSecret('SLACK_BOT_TOKEN');
  const slackSigningSecret = await getSecret('SLACK_SIGNING_SECRET');

  const app = new App({
    token: slackBotToken,
    signingSecret: slackSigningSecret,
    logLevel: LogLevel.INFO,
  });

  const bamboohrKey = await getSecret('BAMBOOHR_KEY');
  sdk.auth(bamboohrKey ?? '');

  const today = moment();

  const countryList: string[] =
    process.env.EMPLOYEE_COUNTRY_FILTER?.split(',') ?? [];

  // Fetch info from BambooHR API
  const [employees, employeesAtOffice, bankHolidays] = await Promise.all([
    fetchEmployees(countryList),
    fetchEmployeesAtOffice(today),
    fetchBankHolidays(today),
  ]);

  // Build the messages
  const employeesAtOfficeMessage = employeesAtOfficeBlockBuilder(
    employees,
    employeesAtOffice,
    today
  );
  const employeesCelebrationsMessage = employeesCelebrationsBlockBuilder(
    employees,
    today
  );
  const bankHolidaysMessage = bankHolidaysBlockBuilder(bankHolidays, today);

  // Publish to slack
  await Promise.allSettled([
    postSlackMessage(
      app,
      process.env.OFFICE_CHANNEL_ID ?? '',
      employeesAtOfficeMessage
    ),
    postSlackMessage(
      app,
      process.env.CELEBRATIONS_CHANNEL_ID ?? '',
      employeesCelebrationsMessage
    ),
    postSlackMessage(
      app,
      process.env.BANK_HOLIDAYS_CHANNEL_ID ?? '',
      bankHolidaysMessage
    ),
  ]);

  return {
    message: 'Published to Slack!',
  };
}
