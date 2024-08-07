// eslint-disable-next-line simple-import-sort/imports
import { createApp } from 'vue';

import '@/services/assets/styles/index.css';

import App from '@/App.vue';
import router from '@/router/index';

const app = createApp(App);
app.use(router);

// app.use(Maska);

app.directive('click-outside', {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent, { passive: true });
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

router.isReady().then(() => {
  app.mount('#app');
});
