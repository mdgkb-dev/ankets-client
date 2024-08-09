<template>
  <div class="flex">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.flex {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  //   background: var(--background-subtle-background-color);
  padding: 40px;
}
</style>
