import moment from 'moment';

export const MONDAY_ISO_WEEKDAY = 1;
export const FRIDAY_ISO_WEEKDAY = 5;
export const FIRST_DAY_OF_THE_MONTH = 1;
export const CONCURRENCY = 15;
export const YEAR_MONTH_DATE_FORMAT = 'YYYY-MM-DD';
export const HUMAN_READABLE_DATE = 'dddd, D MMMM YYYY';
export const BAMBOOHR_TIME_OFF_APPROVED = 'approved';
export const BAMBOOHR_TIME_WHOS_OUT_TYPE = 'holiday';

export const ordinalSuffixOf = (n: number): string => {
  const lastDigit = n % 10;
  const last2Digits = n % 100;
  if (lastDigit === 1 && last2Digits !== 11) {
    return `${n}st`;
  }
  if (lastDigit === 2 && last2Digits !== 12) {
    return `${n}nd`;
  }
  if (lastDigit === 3 && last2Digits !== 13) {
    return `${n}rd`;
  }
  return `${n}th`;
};

export const nextWorkingDay = (today: moment.Moment): moment.Moment =>
  moment(today).add(
    today.isoWeekday() < FRIDAY_ISO_WEEKDAY ? 1 : 8 - today.isoWeekday(),
    'days'
  );
