import { COLORS_FOR_HIGHLIGHTS } from '@/utils/consts';

export type UseRandomHighlightColorsComposableReturn = {
  color: string
}

export function useRandomHighlightColors(): UseRandomHighlightColorsComposableReturn {
  const color = COLORS_FOR_HIGHLIGHTS[Math.floor(Math.random() * COLORS_FOR_HIGHLIGHTS.length)];
  return {
    color,
  };
}
