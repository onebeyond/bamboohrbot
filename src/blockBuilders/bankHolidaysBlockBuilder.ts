import moment from 'moment';

import { TSlackBlock, TSlackMessage, TWhosOut } from '..';
import {
  FRIDAY_ISO_WEEKDAY,
  HUMAN_READABLE_DATE,
  MONDAY_ISO_WEEKDAY,
} from '../common';

export default function bankHolidaysBlockBuilder(
  bankHolidays: TWhosOut,
  today: moment.Moment
): TSlackMessage {
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

  let blocks: TSlackBlock[] = [];
  if (monthBankHolidaysBlocks.length > 0 || nextBankHolidaysBlocks.length > 0) {
    blocks = [
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
    ];
  }

  return {
    text: '🏖️ Bank Holidays',
    blocks,
  };
}
