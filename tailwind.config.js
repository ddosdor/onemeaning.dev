/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors.default;

      const colorMap = Object.keys(colors)
        .map((color) => ({
          [`.border-t-${color}`]: { borderTopColor: colors[color] },
          [`.border-r-${color}`]: { borderRightColor: colors[color] },
          [`.border-b-${color}`]: { borderBottomColor: colors[color] },
          [`.border-l-${color}`]: { borderLeftColor: colors[color] },
        }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
