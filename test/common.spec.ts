import moment from 'moment';
import {
  FRIDAY_ISO_WEEKDAY,
  FIRST_DAY_OF_THE_MONTH,
  CONCURRENCY,
  YEAR_MONTH_DATE_FORMAT,
  HUMAN_READABLE_DATE,
  BAMBOOHR_TIME_OFF_APPROVED,
  BAMBOOHR_TIME_WHOS_OUT_TYPE,
} from '../src/common';
import { ordinalSuffix } from '../src/utils/ordinalSuffix';
import { nextWorkingDay } from '../src/utils/nextWorkingDay';

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
    expect(ordinalSuffix(1)).toBe('1st');
    expect(ordinalSuffix(2)).toBe('2nd');
    expect(ordinalSuffix(3)).toBe('3rd');
    expect(ordinalSuffix(4)).toBe('4th');
    expect(ordinalSuffix(5)).toBe('5th');
    expect(ordinalSuffix(6)).toBe('6th');
    expect(ordinalSuffix(7)).toBe('7th');
    expect(ordinalSuffix(8)).toBe('8th');
    expect(ordinalSuffix(9)).toBe('9th');
    expect(ordinalSuffix(10)).toBe('10th');
    expect(ordinalSuffix(11)).toBe('11th');
    expect(ordinalSuffix(12)).toBe('12th');
    expect(ordinalSuffix(13)).toBe('13th');
    expect(ordinalSuffix(14)).toBe('14th');
    expect(ordinalSuffix(15)).toBe('15th');
    expect(ordinalSuffix(16)).toBe('16th');
    expect(ordinalSuffix(17)).toBe('17th');
    expect(ordinalSuffix(18)).toBe('18th');
    expect(ordinalSuffix(19)).toBe('19th');
    expect(ordinalSuffix(20)).toBe('20th');
    expect(ordinalSuffix(21)).toBe('21st');
    expect(ordinalSuffix(22)).toBe('22nd');
    expect(ordinalSuffix(23)).toBe('23rd');
    expect(ordinalSuffix(24)).toBe('24th');
    expect(ordinalSuffix(25)).toBe('25th');
    expect(ordinalSuffix(26)).toBe('26th');
    expect(ordinalSuffix(27)).toBe('27th');
    expect(ordinalSuffix(28)).toBe('28th');
    expect(ordinalSuffix(29)).toBe('29th');
    expect(ordinalSuffix(30)).toBe('30th');
    expect(ordinalSuffix(31)).toBe('31st');
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
