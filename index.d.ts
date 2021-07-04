/* eslint-disable max-len */
export interface DateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  localeMatcher?: 'best fit' | 'lookup';
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'long' | 'short';
  formatMatcher?: 'best fit' | 'basic';
  hour12?: boolean;
  /**
   * Timezone string must be one of IANA. UTC is a universally required recognizable value
   */
  timeZone?: 'UTC' | string;
  dateStyle?: 'full' | 'long' | 'medium' | 'short',
  timeStyle?: 'full' | 'long' | 'medium' | 'short',
  calendar?: 'buddhist' | 'chinese' | ' coptic' | 'ethiopia' | 'ethiopic' | 'gregory' | ' hebrew' | 'indian' | 'islamic' | 'iso8601' | ' japanese' | 'persian' | 'roc',
  dayPeriod?: 'narrow' | 'short' | 'long',
  numberingSystem?: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | ' gujr' | 'guru' | 'hanidec' | 'khmr' | ' knda' | 'laoo' | 'latn' | 'limb' | 'mlym' | ' mong' | 'mymr' | 'orya' | 'tamldec' | ' telu' | 'thai' | 'tibt',
  hourCycle?: 'h11' | 'h12' | 'h23' | 'h24',
  /**
   * Warning! Partial support
   */
  fractionalSecondDigits?: 0 | 1 | 2 | 3
}
