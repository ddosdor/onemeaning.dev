import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: {
      id: process.env.GA_MEASUREMENT_ID,
    },
    bootstrap: true,
    appName: process.env.APP_NAME,
    enabled: true,
    pageTrackerScreenviewEnabled: true,
  }, app.router);
};
