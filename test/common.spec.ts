import moment from 'moment';
import {
  FRIDAY_ISO_WEEKDAY,
  FIRST_DAY_OF_THE_MONTH,
  CONCURRENCY,
  YEAR_MONTH_DATE_FORMAT,
  HUMAN_READABLE_DATE,
  BAMBOOHR_TIME_OFF_APPROVED,
  BAMBOOHR_TIME_WHOS_OUT_TYPE,
  ordinalSuffixOf,
  nextWorkingDay,
} from '../src/common';

describe('Constants', () => {
  test('Constants values', () => {
    expect(FRIDAY_ISO_WEEKDAY).toBe(5);
    expect(FIRST_DAY_OF_THE_MONTH).toBe(1);
    expect(CONCURRENCY).toBe(15);
    expect(YEAR_MONTH_DATE_FORMAT).toBe('YYYY-MM-DD');
    expect(HUMAN_READABLE_DATE).toBe('dddd, D MMMM YYYY');
    expect(BAMBOOHR_TIME_OFF_APPROVED).toBe('approved');
    expect(BAMBOOHR_TIME_WHOS_OUT_TYPE).toBe('holiday');
  });
});

describe('Ordinal numbers', () => {
  test('First 31 ordinal numbers', () => {
    expect(ordinalSuffixOf(1)).toBe('1st');
    expect(ordinalSuffixOf(2)).toBe('2nd');
    expect(ordinalSuffixOf(3)).toBe('3rd');
    expect(ordinalSuffixOf(4)).toBe('4th');
    expect(ordinalSuffixOf(5)).toBe('5th');
    expect(ordinalSuffixOf(6)).toBe('6th');
    expect(ordinalSuffixOf(7)).toBe('7th');
    expect(ordinalSuffixOf(8)).toBe('8th');
    expect(ordinalSuffixOf(9)).toBe('9th');
    expect(ordinalSuffixOf(10)).toBe('10th');
    expect(ordinalSuffixOf(11)).toBe('11th');
    expect(ordinalSuffixOf(12)).toBe('12th');
    expect(ordinalSuffixOf(13)).toBe('13th');
    expect(ordinalSuffixOf(14)).toBe('14th');
    expect(ordinalSuffixOf(15)).toBe('15th');
    expect(ordinalSuffixOf(16)).toBe('16th');
    expect(ordinalSuffixOf(17)).toBe('17th');
    expect(ordinalSuffixOf(18)).toBe('18th');
    expect(ordinalSuffixOf(19)).toBe('19th');
    expect(ordinalSuffixOf(20)).toBe('20th');
    expect(ordinalSuffixOf(21)).toBe('21st');
    expect(ordinalSuffixOf(22)).toBe('22nd');
    expect(ordinalSuffixOf(23)).toBe('23rd');
    expect(ordinalSuffixOf(24)).toBe('24th');
    expect(ordinalSuffixOf(25)).toBe('25th');
    expect(ordinalSuffixOf(26)).toBe('26th');
    expect(ordinalSuffixOf(27)).toBe('27th');
    expect(ordinalSuffixOf(28)).toBe('28th');
    expect(ordinalSuffixOf(29)).toBe('29th');
    expect(ordinalSuffixOf(30)).toBe('30th');
    expect(ordinalSuffixOf(31)).toBe('31st');
  });
});

describe('Next working day', () => {
  test('On Monday, return Tuesday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek')).format('YYYY-MM-DD')
    ).toBe(moment().startOf('isoWeek').add(1, 'days').format('YYYY-MM-DD'));
  });
  test('On Tuesday, return Wednesday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek').add(1, 'days')).format(
        'YYYY-MM-DD'
      )
    ).toBe(moment().startOf('isoWeek').add(2, 'days').format('YYYY-MM-DD'));
  });
  test('On Wednesday, return Thursday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek').add(2, 'days')).format(
        'YYYY-MM-DD'
      )
    ).toBe(moment().startOf('isoWeek').add(3, 'days').format('YYYY-MM-DD'));
  });
  test('On Thursday, return Friday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek').add(3, 'days')).format(
        'YYYY-MM-DD'
      )
    ).toBe(moment().startOf('isoWeek').add(4, 'days').format('YYYY-MM-DD'));
  });
  test('On Friday, return next Monday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek').add(4, 'days')).format(
        'YYYY-MM-DD'
      )
    ).toBe(moment().startOf('isoWeek').add(7, 'days').format('YYYY-MM-DD'));
  });
  test('On Saturday, return next Monday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek').add(5, 'days')).format(
        'YYYY-MM-DD'
      )
    ).toBe(moment().startOf('isoWeek').add(7, 'days').format('YYYY-MM-DD'));
  });
  test('On Sunday, return next Monday as next working day', () => {
    expect(
      nextWorkingDay(moment().startOf('isoWeek').add(6, 'days')).format(
        'YYYY-MM-DD'
      )
    ).toBe(moment().startOf('isoWeek').add(7, 'days').format('YYYY-MM-DD'));
  });
});
