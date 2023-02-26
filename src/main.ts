import { PluginFunc } from 'dayjs';
import { getJpEra, getJpYear } from './util';

export const jpFormat: PluginFunc = (_o, c) => {
  const proto = c.prototype;
  const oldFormat = proto.format;

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
