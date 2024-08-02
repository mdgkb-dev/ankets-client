<template>
  <PButton skin="base" type="primary" text="Сменить тему" @click="toggleTheme" />
  <PCheckBox />
  <PNotification />
  <PDialog />
  <PLoader v-if="PHelp.Loading.IsVisible()" />
  <Suspense>
    <component :is="components[$route.meta.layout] || 'MainLayout'" v-if="mounted">
      <router-view />
    </component>
  </Suspense>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

import AdminLayout from '@/views/adminLayout/AdminLayout.vue';

const components = {
  AdminLayout: AdminLayout,
};

const route = useRoute();
const mounted: Ref<boolean> = ref(false);
watch(route, () => {
  changeDocumentTitle();
});

const theme = ref('light');
const toggleTheme = () => {
  const selectedTheme = theme.value === 'light' ? 'dark' : 'light';
  document.getElementsByTagName('html')[0].dataset.theme = selectedTheme;
  theme.value = selectedTheme;
};

const platform = ref('web-desktop');
document.getElementsByTagName('html')[0].dataset.platform = platform.value;

const changeDocumentTitle = () => {
  const defaultTitle = 'Тестовые проект';
  document.title = route.meta.title ? `${route.meta.title} | МДГКБ` : defaultTitle;
};
onBeforeMount(async (): Promise<void> => {
  PHelp.Auth.Actualize();
  changeDocumentTitle();
  mounted.value = true;
});
</script>
