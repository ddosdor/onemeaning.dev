import { COLORS_FOR_HIGHLIGHTS } from '@/utils/consts';

interface UseRandomHighlightColorsComposable {
  color: string
}

export function useRandomHighlightColors(): UseRandomHighlightColorsComposable {
  const color = COLORS_FOR_HIGHLIGHTS[Math.floor(Math.random() * COLORS_FOR_HIGHLIGHTS.length)];
  return {
    color,
  };
}
