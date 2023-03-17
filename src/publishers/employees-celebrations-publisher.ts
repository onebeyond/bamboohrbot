import moment from 'moment';

import defaultMessage from '../constants/defaultMessage';

import { TBambooHREmployeeExtended } from '..';
import { FRIDAY_ISO_WEEKDAY, ordinalSuffixOf } from '../common';
import { postSlackMessage } from '../http';

export const publishEmployeesCelebrations = async (
  employees: TBambooHREmployeeExtended[],
  today: moment.Moment
): Promise<void> => {
  const firstDayBlocks: any[] = buildFirstDayBlocks(employees, today);
  const birthdaysBlocks: any[] = buildBirthdaysBlocks(employees, today);
  const anniversariesBlocks: any[] = buildAnniversariesBlocks(employees, today);

  const celebrationMessages = [
    ...firstDayBlocks,
    ...birthdaysBlocks,
    ...anniversariesBlocks,
  ];

  await postSlackMessage(
    process.env.CELEBRATIONS_WEBHOOK_URL ?? '',
    buildMessageToSend(celebrationMessages)
  );
};

const buildMessageToSend = (messages: object[]) => {
  const base = {
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
    ],
  };

  return messages.length > 0
    ? {
        ...base,
        blocks: [...base.blocks, ...messages],
      }
    : {
        ...base,
        blocks: {
          ...base.blocks,
          ...defaultMessage,
        },
      };
};

const buildFirstDayBlocks = (
  employees: TBambooHREmployeeExtended[],
  today: moment.Moment
): any[] => {
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
  return firstDayBlocks;
};

const buildBirthdaysBlocks = (
  employees: TBambooHREmployeeExtended[],
  today: moment.Moment
): any[] => {
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
    birthdaysBlocks.push({
      type: 'divider',
    });
  }
  return birthdaysBlocks;
};

const buildAnniversariesBlocks = (
  employees: TBambooHREmployeeExtended[],
  today: moment.Moment
): any[] => {
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

  return anniversariesBlocks;
};
