<template>
  <div style="min-height: 100vh">
    <div class="bg">
      <div class="admin-main-container">
        <AdminSideMenu :border="false" />
        <div class="admin-container">
          <AdminHeaderBottom style="position: sticky; z-index: 2" />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';
.admin-main-container {
  display: flex;
  justify-content: left;
  height: 100vh;
  box-sizing: border-box;
}

.admin-container {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}

.bg {
  height: 100%;
  box-sizing: border-box;
  width: 100%;
}
</style>
