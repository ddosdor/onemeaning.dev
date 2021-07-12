const COLORS_FOR_HIGHLIGHTS = [
  '#DBEAFE',
  '#D1FAE5',
  '#FEF3C7',
  '#FEE2E2',
  '#E5E7EB',
  '#E0E7FF',
  '#EDE9FE',
  '#FCE7F3',
];

interface UseRandomHighlightColorsComposable {
  color: string
}

export function useRandomHighlightColors(): UseRandomHighlightColorsComposable {
  const color = COLORS_FOR_HIGHLIGHTS[Math.floor(Math.random() * COLORS_FOR_HIGHLIGHTS.length)];
  return {
    color,
  };
}
