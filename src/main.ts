// eslint-disable-next-line simple-import-sort/imports
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import 'dayjs/locale/ru';
import '@/router/componentHooks';

import DateTimeFormatter from '@/services/DateFormat';

import ClassHelper from '@/services/ClassHelper';
import Strings from '@/services/Strings';

const app = createApp(App);
app.use(router);

// app.use(Maska);

app.config.globalProperties.$dateTimeFormatter = new DateTimeFormatter('ru-RU');
app.config.globalProperties.$classHelper = ClassHelper;
app.config.globalProperties.$stringsService = Strings;
// app.use(setupElementPlusComponents, { locale: ru });
// app.use(setupElementPlusPlugins);

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
