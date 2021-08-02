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
    disable: 'phone',
    duration: 700,
    easing: 'ease-out-cubic',
    startEvent: 'load',
  });
};
