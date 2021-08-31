/* eslint-disable no-unused-vars */
import { DateTimeFormatOptions } from '@/index.d';

interface UseHelpersComposableReturn {
  formatDate(date: string): String
}

export function useHelpers(): UseHelpersComposableReturn {
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
