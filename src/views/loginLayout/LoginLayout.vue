<template>
  <el-main class="container">
    <slot />
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginLayout',
});
</script>

<style>

.container {
  width: 100%;
  background: #B8D6FF;
  margin: 0;
}

#app {
  height: 100%;
}
</style>
