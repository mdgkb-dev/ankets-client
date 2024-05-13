<template>
  <div class="info-c">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.info-c {
  box-sizing: border-box;
  padding: 30px;
  background: $base-background;
}

</style>
