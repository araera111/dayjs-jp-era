import dayjs from 'dayjs';
import { getJpEra, getJpYear } from './util';

export const jpFormat: dayjs.PluginFunc = (_, dayjsClass) => {
  const proto = dayjsClass.prototype;
  const oldFormat = dayjsClass.prototype.format;
  proto.format = function (formatStr: string) {
    const result = formatStr.replace(/\[([^\]]+)]|r+|/g, (match) => {
      switch (match) {
        case 'rrrr':
          return getJpYear(this.toDate(), false);
        case 'rrr':
          return getJpYear(this.toDate(), true);
        case 'rr':
          return getJpEra(this.toDate());
        default:
          return match;
      }
    });
    return oldFormat.bind(this)(result);
  };
};
