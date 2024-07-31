<template>
  <PButton text="Сменить тему" width="120px" margin="40px 20px" @click="toggleTheme" />
  <div class="flex">
    <PButton skin="base" type="primary" width="120px" margin="20px">Primary</PButton>
    <PButton skin="base" type="info" width="120px" margin="20px">Info</PButton>
    <PButton skin="base" type="success" width="120px" margin="20px">Success</PButton>
    <PButton skin="base" type="warning" width="120px" margin="20px">Warning</PButton>
    <PButton skin="base" type="danger" width="120px" margin="20px">Danger</PButton>
    <PButton skin="base" type="neutral" width="120px" margin="20px">Neutral</PButton>
    <PButton skin="base" type="disabled" width="120px" margin="20px">Disabled</PButton>
  </div>
  <div class="flex">
    <PButton skin="text" type="primary" width="120px" margin="20px">Primary</PButton>
    <PButton skin="text" type="info" width="120px" margin="20px">Info</PButton>
    <PButton skin="text" type="success" width="120px" margin="20px">Success</PButton>
    <PButton skin="text" type="warning" width="120px" margin="20px">Warning</PButton>
    <PButton skin="text" type="danger" width="120px" margin="20px">Danger</PButton>
    <PButton skin="text" type="neutral" width="120px" margin="20px">Neutral</PButton>
    <PButton skin="text" type="del" width="120px" margin="20px">Del</PButton>
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
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  background: var(--background-subtle-background-color);
  padding: 40px;
}
</style>
