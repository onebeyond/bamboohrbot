import moment from 'moment';

import {
  TBambooHREmployeeAtOffice,
  TBambooHREmployeeExtended,
  TWhosOut,
} from '..';
import { FRIDAY_ISO_WEEKDAY } from '../common';
import { postSlackMessage } from '../http';

export const publishEmployeesAtOffice = async (
  employees: TBambooHREmployeeExtended[],
  employeesAtOffice: TBambooHREmployeeAtOffice[],
  today: moment.Moment
): Promise<void> => {
  // First filter 'employeesAtOffice' to those included in 'employees'
  const filteredEmployeesAtOffice = employeesAtOffice.reduce<
    TBambooHREmployeeExtended[]
  >((previousValue, currentEmployee) => {
    const employee = employees.find(e => e.id === currentEmployee.employeeId);
    return employee ? previousValue.concat(employee) : previousValue;
  }, []);

  const blocks =
    filteredEmployeesAtOffice.length > 0
      ? filteredEmployeesAtOffice.map(e => ({
          type: 'context',
          elements: [
            {
              type: 'image',
              image_url: e.photoUrl,
              alt_text: 'employee avatar',
            },
            {
              type: 'mrkdwn',
              text: `*${e.displayName}*`,
            },
          ],
        }))
      : [
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: ':eyes: *Nobody at the office!*',
              },
            ],
          },
        ];

  const message = {
    text: `🏢 ${
      today.isoWeekday() < FRIDAY_ISO_WEEKDAY ? 'Tomorrow' : 'Next Monday'
    } at One Beyond offices`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `🏢 ${
            today.isoWeekday() < FRIDAY_ISO_WEEKDAY ? 'Tomorrow' : 'Next Monday'
          } at One Beyond offices`,
          emoji: true,
        },
      },
      ...blocks,
    ],
  };

  await postSlackMessage(process.env.OFFICE_WEBHOOK_URL ?? '', message);
};
