import moment from 'moment';

import {
  TBambooHREmployeeAtOffice,
  TBambooHREmployeeExtended,
  TSlackMessage,
} from '..';
import { FRIDAY_ISO_WEEKDAY } from '../common';

export default function employeesAtOfficeBlockBuilder(
  employees: TBambooHREmployeeExtended[],
  employeesAtOffice: TBambooHREmployeeAtOffice[],
  today: moment.Moment
): TSlackMessage {
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
            e.photoUrl
              ? {
                  type: 'image',
                  image_url: e.photoUrl,
                  alt_text: 'employee avatar',
                }
              : {
                  type: 'plain_text',
                  text: ':bust_in_silhouette:',
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

  return {
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
}
