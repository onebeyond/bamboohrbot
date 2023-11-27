import moment from 'moment';

import { FRIDAY_ISO_WEEKDAY } from '../common';

export function nextWorkingDay(today: moment.Moment): moment.Moment {
  return moment(today).add(
    today.isoWeekday() < FRIDAY_ISO_WEEKDAY ? 1 : 8 - today.isoWeekday(),
    'days'
  );
}
