const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/strongly-recommended',
    './node_modules/eslint-config-airbnb-base/rules/best-practices.js',
    './node_modules/eslint-config-airbnb-base/rules/errors.js',
    './node_modules/eslint-config-airbnb-base/rules/es6.js',
    './node_modules/eslint-config-airbnb-base/rules/imports.js',
    './node_modules/eslint-config-airbnb-base/rules/node.js',
    './node_modules/eslint-config-airbnb-base/rules/strict.js',
    './node_modules/eslint-config-airbnb-base/rules/style.js',
    './node_modules/eslint-config-airbnb-base/rules/variables.js',
  ],
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': resolve(''),
        },
        extensions: ['.ts', '.vue'],
      },
    },
  },
  rules: {
    'max-len': ['error', { code: 160 }],
    'linebreak-style': 0,
    'no-underscore-danglgin': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      }],
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
        vue: 'always',
        json: 'never',
        png: 'never',
        svg: 'always',
      },
    ],
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
  },
};
