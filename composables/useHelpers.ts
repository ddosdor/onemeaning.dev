/* eslint-disable no-unused-vars */
import { DateTimeFormatOptions } from '@/index.d';

interface UseHelpers {
  formatDate(date: string): String
}

export const useHelpers = (): UseHelpers => {
  function formatDate(date: string) {
    const dateFormat = new Date(date);
    const options: DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return dateFormat.toLocaleDateString('en-US', options);
  }

  return {
    formatDate,
  };
};
