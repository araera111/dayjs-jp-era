import dayjs, { Dayjs } from 'dayjs';

export const dropLastString = (str: string) => str.slice(0, -1);

export const getJpYear = (date: Date | string | Dayjs, isYear: boolean): string => {
  let result: string;
  try {
    const jpDate = Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      year: '2-digit',
      era: 'long'
    }).format(dayjs(date).toDate());
    result = isYear ? jpDate : dropLastString(jpDate);
  } catch {
    result = '該当なし';
  }
  return result;
};

export const getJpEra = (date: Date | string | Dayjs): string => {
  let result: string;
  try {
    result = Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      era: 'long'
    })
      .format(dayjs(date).toDate())
      .slice(0, 2);
  } catch {
    result = '不明';
  }
  return result;
};
