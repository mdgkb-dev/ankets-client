<template>
  <div class="bg">
  <div class="header">
    <slot name="foto" />
    <div class="info">
      <slot name="header-info" />
    </div>
  </div>
  <div class="footer">
    <slot name="footer-info"/>
  </div>
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.bg {
  box-sizing: border-box;
  height: auto;
  background: $main_white;
  padding: 30px;
  margin: 20px;
  border-radius: 15px;
}

.header {
  display: flex;
  justify-content: left;
}

.info {
  width: 100%;
}

.footer {
  width: 100%;
}

</style>
