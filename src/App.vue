<template>
  <PButton text="Сменить тему" width="120px" margin="40px 20px" @click="toggleTheme" />
  <div class="flex">
    <PButton skin="profile" type="primary" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="profile" type="success" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="profile" type="warning" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="profile" type="danger" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="profile" type="neutral" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="profile" type="disabled" width="120px" margin="20px">Кнопка</PButton>
  </div>
  <div class="flex">
    <PButton skin="text" type="primary" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="text" type="success" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="text" type="warning" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="text" type="danger" width="120px" margin="20px">Кнопка</PButton>
    <PButton skin="text" type="neutral" width="120px" margin="20px">Кнопка</PButton>
  </div>
  <!-- <PNotification />
  <PDialog />
  <PLoader v-if="PHelp.Loading.IsVisible()" />
  <Suspense>
    <component :is="$route.meta.layout || 'MainLayout'" v-if="mounted">
      <router-view />
    </component>
  </Suspense> -->
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
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

<style>
.flex {
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
