<template>
  <div style="min-height: 100vh">
    <KeepAlive :include="[]" :max="0">
      <div class="bg">
        <AdminHeaderTop v-if="showTopHeader" />
        <div class="admin-main-container">
          <AdminSideMenu :shadow="false" :border="false" padding="20px" />
          <div class="admin-container">
            <AdminHeaderBottom style="position: sticky; z-index: 2;" />
            <div class="content"><slot /></div>
          </div>
        </div>
      </div>
    </KeepAlive>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';

import { AdminLayout } from '@/services/interfaces/AdminLayout';
import Provider from '@/services/Provider/Provider';
import AdminHeaderBottom from '@/views/adminLayout/AdminHeaderBottom.vue';
import AdminHeaderTop from '@/views/adminLayout/AdminHeaderTop.vue';
import AdminMenuDrawer from '@/views/adminLayout/AdminMenuDrawer.vue';
import AdminSideMenu from '@/views/adminLayout/AdminSideMenu.vue';

export default defineComponent({
  name: 'AdminLayout',
  components: {
    AdminHeaderTop,
    AdminHeaderBottom,
    AdminSideMenu,
    AdminMenuDrawer,
  },
  setup() {
    const isDrawerOpen: ComputedRef<boolean> = computed(() => Provider.store.getters['admin/isDrawerOpen']);
    const closeDrawer = () => Provider.store.commit('admin/closeDrawer');
    const showTopHeader = false;

    return { isDrawerOpen, closeDrawer, AdminLayout, showTopHeader };
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.admin-main-container {
  display: flex;
  justify-content: left;
  height: calc(100vh);
  box-sizing: border-box;
}

.admin-container {
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
}

.el-main {
  height: inherit;
  overflow: auto;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  height: 100%;
  box-sizing: border-box;
  background: $site_light_grey;
}

.content {
  height: 100%;
}

@media (max-width: 992px) {
  .el-main {
    height: inherit;
    overflow: auto;
  }
}
</style>
