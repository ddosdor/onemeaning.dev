import Vue from 'vue';
import VueGtag from 'vue-gtag';

import { BROWSER_STORAGE_KEYS } from '@/utils/consts';

export default ({ app }) => {
  const canBootstrapPlugin = localStorage.getItem(BROWSER_STORAGE_KEYS.GPDRisAccepted) === 'true';

  Vue.use(VueGtag, {
    config: {
      id: process.env.GA_MEASUREMENT_ID,
    },
    bootstrap: canBootstrapPlugin,
    appName: process.env.APP_NAME,
    enabled: canBootstrapPlugin,
    pageTrackerScreenviewEnabled: true,
  }, app.router);
};
