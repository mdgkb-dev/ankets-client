<template>
  <PNotification />
  <PDialog />
  <PLoader v-if="PHelp.Loading.IsVisible()" />
  <Suspense>
    <component :is="$route.meta.layout || 'MainLayout'" v-if="mounted">
      <router-view />
    </component>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { onBeforeMount, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';

import AdminLayout from '@/views/adminLayout/AdminLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    AdminLayout,
  },
  setup() {
    const route = useRoute();
    const mounted: Ref<boolean> = ref(false);
    watch(route, () => {
      changeDocumentTitle();
    });

    const changeDocumentTitle = () => {
      const defaultTitle = 'Тестовые проект';
      document.title = route.meta.title ? `${route.meta.title} | МДГКБ` : defaultTitle;
    };
    onBeforeMount(async (): Promise<void> => {
      PHelp.Auth.Actualize();
      changeDocumentTitle();
      mounted.value = true;
    });

    return {
      mounted,
    };
  },
});
</script>
