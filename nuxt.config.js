import * as path from 'path';
import highlightjs from 'highlight.js';

const resolve = (dir) => path.join(__dirname, dir);
const wrap = (code, lang) => `<pre><code class="hljs ${lang}">${code}</code></pre>`;

export default {
  ssr: true,
  target: 'static',
  router: {
    base: '/',
  },
  head: {
    title: 'onemeaning.dev - Sebastian personal blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content: `
        Hi there, I'm Sebastian and fod about couple of years I work as a Software Developer (specifically with Javascript).
        This is my personal blog where I share what I enjoy, 
        experiment with new tools and keep notes on what I had already learned.
      `,
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap',
      },
      {
        rel: 'stylesheet',
        media: 'print',
        onload: 'this.onload=null;this.removeAttribute(\'media\');',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap',
      },
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
