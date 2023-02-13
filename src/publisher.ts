import moment from 'moment';

import {
  TBambooHREmployeeAtOffice,
  TBambooHREmployeeExtended,
  TWhosOut,
} from '.';
import {
  FRIDAY_ISO_WEEKDAY,
  HUMAN_READABLE_DATE,
  MONDAY_ISO_WEEKDAY,
  ordinalSuffixOf,
  YEAR_MONTH_DATE_FORMAT,
} from './common';
import { postSlackMessage } from './http';

export const pusblishBankHolidays = async (
  bankHolidays: TWhosOut,
  today: moment.Moment
): Promise<void> => {
  const monthBankHolidaysBlocks: any[] = [];
  let nextBankHolidaysBlocks: any[] = [];

  if (
    bankHolidays.month.length > 0 &&
    ((today.date() === 1 && today.isoWeekday() <= FRIDAY_ISO_WEEKDAY) ||
      (today.date() === 2 && today.isoWeekday() === MONDAY_ISO_WEEKDAY) ||
      (today.date() === 3 && today.isoWeekday() === MONDAY_ISO_WEEKDAY))
  ) {
    monthBankHolidaysBlocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '*This month bank holidays:*',
        },
      ],
    });

    monthBankHolidaysBlocks.push(
      ...bankHolidays.month.map(holiday => ({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${holiday.name}*\n${moment(holiday.start).format(
            HUMAN_READABLE_DATE
          )}`,
        },
      }))
    );

    monthBankHolidaysBlocks.push({
      type: 'divider',
    });
  }

  if (bankHolidays.next.length > 0) {
    nextBankHolidaysBlocks = bankHolidays.next.map(holiday => ({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${holiday.name}*\n${moment(holiday.start).format(
          HUMAN_READABLE_DATE
        )}`,
      },
    }));
  }

  if (monthBankHolidaysBlocks.length > 0 || nextBankHolidaysBlocks.length > 0) {
    const message = {
      text: '🏖️ Bank Holidays',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🏖️ Bank Holidays',
            emoji: true,
          },
        },
        ...monthBankHolidaysBlocks,
        ...nextBankHolidaysBlocks,
      ],
    };

    await postSlackMessage(
      process.env.BANK_HOLIDAYS_WEBHOOK_URL ?? '',
      message
    );
  }
};

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

export const publishEmployeesCelebrations = async (
  employees: TBambooHREmployeeExtended[],
  today: moment.Moment
): Promise<void> => {
  // FIRST DAY
  const firstDayEmployees = employees
    .filter(employee => moment(employee.hireDate).isValid())
    .filter(employee => moment(employee.hireDate).isSame(today, 'day'));

  const firstDayBlocks: any[] = [];
  if (firstDayEmployees.length > 0) {
    firstDayBlocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '*First day at One Beyond*',
        },
      ],
    });

    firstDayBlocks.push(
      ...firstDayEmployees.map(employee => ({
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: employee.photoUrl,
            alt_text: 'employee avatar',
          },
          {
            type: 'mrkdwn',
            text: `*Welcome, ${employee.displayName}!*`,
          },
        ],
      }))
    );

    firstDayBlocks.push({
      type: 'divider',
    });
  }

  // BIRTHDAY
  const birthdays = employees
    .filter(employee => employee.birthday)
    .reduce<TBambooHREmployeeExtended[]>((previousValue, employee) => {
      const birthdayWithCurrentYear: string = `${today.year()}-${
        employee.birthday
      }`;

      if (!moment(birthdayWithCurrentYear).isValid()) {
        return previousValue;
      }

      if (
        today.isoWeekday() <= FRIDAY_ISO_WEEKDAY &&
        moment(birthdayWithCurrentYear).isSame(today, 'day')
      ) {
        return previousValue.concat(employee);
      }

      if (
        today.isoWeekday() === FRIDAY_ISO_WEEKDAY &&
        moment(birthdayWithCurrentYear).isBetween(
          moment(today).add(1, 'days'),
          moment(today).add(2, 'days'),
          'day',
          '[]'
        )
      ) {
        return previousValue.concat({
          ...employee,
          birthdayOn: moment(birthdayWithCurrentYear).format('dddd'),
        });
      }

      return previousValue;
    }, []);

  const birthdaysBlocks: any[] = [];

  if (birthdays.length > 0) {
    birthdaysBlocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '*Happy birthday!*',
        },
      ],
    });

    birthdaysBlocks.push(
      ...birthdays.map(employee => ({
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: employee.photoUrl,
            alt_text: 'employee avatar',
          },
          {
            type: 'mrkdwn',
            text: `*Happy birthday ${
              employee.birthdayOn ? `on ${employee.birthdayOn}` : ''
            }, ${employee.displayName}!*`,
          },
        ],
      }))
    );
  } else {
    birthdaysBlocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          plain_text:
            ':mad-hatter::teapot: *A very Merry Unbirthday to you all!* :mad-hatter::teapot:',
        },
      ],
    });
  }
  birthdaysBlocks.push({
    type: 'divider',
  });

  // ANNIVERSARY
  const anniversaries = employees
    .filter(employee => moment(employee.hireDate).isValid())
    .reduce<TBambooHREmployeeExtended[]>((previousValue, employee) => {
      const hireDateYear = moment(employee.hireDate).year();
      const hireDateMonth = (moment(employee.hireDate).month() + 1)
        .toString()
        .padStart(2, '0');
      const hireDateDay = moment(employee.hireDate)
        .date()
        .toString()
        .padStart(2, '0');
      const hireDateWithCurrentYear = `${today.year()}-${hireDateMonth}-${hireDateDay}`;

      if (!moment(hireDateWithCurrentYear).isValid()) return previousValue;

      if (hireDateYear === today.year()) return previousValue;

      if (
        today.isoWeekday() <= FRIDAY_ISO_WEEKDAY &&
        moment(hireDateWithCurrentYear).isSame(today, 'day')
      ) {
        return previousValue.concat({
          ...employee,
          anniversary: ordinalSuffixOf(
            today.year() - moment(employee.hireDate).year()
          ),
        });
      }

      if (
        today.isoWeekday() === FRIDAY_ISO_WEEKDAY &&
        moment(hireDateWithCurrentYear).isBetween(
          moment(today).add(1, 'days'),
          moment(today).add(2, 'days'),
          'day',
          '[]'
        )
      ) {
        return previousValue.concat({
          ...employee,
          anniversary: ordinalSuffixOf(
            today.year() - moment(employee.hireDate).year()
          ),
          anniversaryOn: moment(hireDateWithCurrentYear).format('dddd'),
        });
      }

      return previousValue;
    }, []);

  const anniversariesBlocks: any[] = [];

  if (anniversaries.length > 0) {
    anniversariesBlocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '*Happy anniversary!*',
        },
      ],
    });

    anniversariesBlocks.push(
      ...anniversaries.map(employee => ({
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: employee.photoUrl,
            alt_text: 'employee avatar',
          },
          {
            type: 'mrkdwn',
            text: `*Happy ${employee.anniversary} anniversary ${
              employee.anniversaryOn ? `on ${employee.anniversaryOn}` : ''
            }, ${employee.displayName}!*`,
          },
        ],
      }))
    );

    anniversariesBlocks.push({
      type: 'divider',
    });
  }

  const message = {
    text: "🥳 Let's celebrate together",
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: "🥳 Let's celebrate together",
          emoji: true,
        },
      },
      ...firstDayBlocks,
      ...birthdaysBlocks,
      ...anniversariesBlocks,
    ],
  };

  await postSlackMessage(process.env.CELEBRATIONS_WEBHOOK_URL ?? '', message);
};
