import Vue from 'vue';
import VueGtag from 'vue-gtag';

import { BROWSER_STORAGE_KEYS } from '@/utils/consts';

export default ({ app, $config: { APP_NAME, GA_MEASUREMENT_ID } }) => {
  const canBootstrapPlugin = localStorage.getItem(BROWSER_STORAGE_KEYS.GPDRisAccepted) === 'true';

  Vue.use(VueGtag, {
    config: {
      id: GA_MEASUREMENT_ID,
    },
    bootstrap: canBootstrapPlugin,
    appName: APP_NAME,
    enabled: canBootstrapPlugin,
    pageTrackerScreenviewEnabled: true,
  }, app.router);
};
