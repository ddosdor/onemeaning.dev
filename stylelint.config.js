module.exports = {
  extends: [
    'stylelint-config-sass-guidelines'
  ],
  rules: {
    'color-hex-case': null,
    'selector-class-pattern': null,
    'selector-max-compound-selectors': null,
    'max-nesting-depth': [4, {
      ignore: ['pseudo-classes']
    }]
  }
}
