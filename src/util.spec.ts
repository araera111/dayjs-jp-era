import dayjs from 'dayjs';
import { dropLastString, getJpEra, getJpYear } from './util';

describe('dropLastString', () => {
  it('case1 aaa -> aa', () => {
    const str = 'aaa';
    const result = 'aa';
    expect(dropLastString(str)).toBe(result);
  });
  it('case2 abc -> ab', () => {
    const str = 'abc';
    const result = 'ab';
    expect(dropLastString(str)).toBe(result);
  });
});

describe('getJpEraYear', () => {
  it('case1 2018-01-01 -> 平成30', () => {
    const date = dayjs('2018-01-01').toDate();
    const result = '平成30';
    expect(getJpYear(date, false)).toBe(result);
  });
  it('case2 2022-01-01 -> 令和4', () => {
    const date = dayjs('2022-01-01').toDate();
    const result = '令和4';
    expect(getJpYear(date, false)).toBe(result);
  });
  it('case3 2022-01-01 -> 令和4年', () => {
    const date = dayjs('2022-01-01').toDate();
    const result = '令和4年';
    expect(getJpYear(date, true)).toBe(result);
  });
});

describe('getJpEra', () => {
  it('case1 2018-01-01 -> 平成', () => {
    const date = dayjs('2018-01-01').toDate();
    const result = '平成';
    expect(getJpEra(date)).toBe(result);
  });
  it('case2 2022-01-01 -> 令和4', () => {
    const date = dayjs('2022-01-01').toDate();
    const result = '令和';
    expect(getJpEra(date)).toBe(result);
  });
});
