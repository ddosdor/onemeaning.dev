import AOS from 'aos';

import 'aos/dist/aos.css';

window.onNuxtReady(() => {
  AOS.refresh();
});

export default ({ app }) => {
  const nuxtApp = app;
  // eslint-disable-next-line new-cap
  nuxtApp.AOS = new AOS.init({
    once: true,
    disable: false,
    duration: 500,
    offset: -50,
    easing: 'ease-out-cubic',
    startEvent: 'load',
  });
};
