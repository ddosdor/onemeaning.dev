module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'color-hex-case': null,
    'selector-class-pattern': null,
    'selector-max-compound-selectors': null,
    'max-nesting-depth': [4, {
      ignore: ['pseudo-classes'],
    }],
  },
};
