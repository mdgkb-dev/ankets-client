<template>
  <div>
    <el-drawer v-model="isDrawerOpen" custom-class="admin-drawer" :size="'auto'" direction="ltr" :with-header="false" @closed="closeDrawer">
      <AdminSideMenu :shadow="false" :border="false" padding="20px"/>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import AdminSideMenu from '@/views/adminLayout/AdminSideMenu.vue';

export default defineComponent({
  name: 'AdminMenuDrawer',
  components: { AdminSideMenu },

  setup() {
    const store = useStore();
    const isDrawerOpen = computed(() => store.getters['admin/isDrawerOpen']);
    const closeDrawer = () => store.commit('admin/closeDrawer');

    return { isDrawerOpen, closeDrawer };
  },
});
</script>

<style lang="scss" scoped>
$header-background-color: whitesmoke;

:deep(.admin-drawer) {
  background-color: $header-background-color;
}

.drawer-container {
  height: 100%;
}

:deep(.el-drawer__body) {
  overflow-y: scroll;
  padding: 0;

  &::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgba(245, 245, 245, 0.47);
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
    margin: 5px 0;
  }

  &::-webkit-scrollbar-thumb {
    height: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(85, 85, 85, 0.25);
  }
}
</style>
