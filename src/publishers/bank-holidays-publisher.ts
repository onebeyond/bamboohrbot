import moment from 'moment';

import { TWhosOut } from '..';
import {
  FRIDAY_ISO_WEEKDAY,
  HUMAN_READABLE_DATE,
  MONDAY_ISO_WEEKDAY,
} from '../common';
import { postSlackMessage } from '../http';

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
