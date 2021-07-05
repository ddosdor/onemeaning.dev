import * as path from 'path';

const resolve = (dir) => path.join(__dirname, dir);

export default {
  ssr: false,
  target: 'static',
  router: {
    base: '/onemeaning.dev/',
  },
  head: {
    title: 'onemeaning-dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],
  modules: [
    '@nuxt/content',
  ],
  build: {
    extend(config) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['@$'] = resolve('');
      // eslint-disable-next-line no-param-reassign
      config.resolve.extensions = ['.js', '.ts', '.vue', '.json'];
    },
  },
  generate: {
    async routes() {
      // eslint-disable-next-line global-require
      const { $content } = require('@nuxt/content');
      const files = await $content('blog').fetch();

      return files.map((file) => (file.path === '/index' ? '/' : file.path));
    },
  },
};
