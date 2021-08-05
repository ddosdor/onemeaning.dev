import * as path from 'path';
import highlightjs from 'highlight.js';

const resolve = (dir) => path.join(__dirname, dir);
const wrap = (code, lang) => `<pre><code class="hljs ${lang}">${code}</code></pre>`;

export default {
  ssr: true,
  target: 'server',
  router: {
    base: '/',
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
  css: [
    '~/assets/style/variables.sass',
    '~/assets/style/style.sass',
    'highlight.js/styles/atom-one-dark.css',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  styleResources: {
    sass: ['~/assets/style/variables.sass'],
  },
  plugins: [
    '~/plugins/vue-rough-notation.js',
    { src: '~/plugins/aos.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/style-resources',
    '@aceforth/nuxt-optimized-images',
    // '@nuxtjs/svg',
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
      const blog = await $content('blog').fetch();
      return blog.map((file) => (file.path === '/index' ? '/' : file.path));
    },
  },
  content: {
    markdown: {
      highlighter(rawCode, lang) {
        if (!lang) {
          return wrap(highlightjs.highlightAuto(rawCode).value, lang);
        }
        return wrap(highlightjs.highlight(lang, rawCode).value, lang);
      },
    },
  },
};
