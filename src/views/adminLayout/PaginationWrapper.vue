<template>
  <div class="pagination-wrapper" >
    <div v-if="inHeader" class="header">
      <slot name="in-header" />
    </div>
    <div class="pagination-wrapper-slot">
      <slot />
    </div>
    <div class="pagination" v-if="pagination">
      <PPagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import PPagination from '@/services/components/PPagination.vue';

defineProps({
  pagination: {
    type: Boolean,
    default: false,
  },
  outHeader: {     // specify with this parameter the height of the block that is above PaginationWrapper (outside it).
    type: String,  // укажите этим параметром высоту блока, который находится над PaginationWrapper (вне его)
    default: '150px',
  },
  inHeader: {      // use this parameter to specify the height of the PaginationWrapper's inner header (will be fixed at the top when content is scrolled).
    type: String,  // используйте этот параметр, чтобы указать высоту внутреннего заголовка PaginationWrapper (будет зафиксирован вверху при прокрутке содержимого).
    default: '',
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';


.pagination-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100% - v-bind(outHeader));
  padding: 0 20px;
  box-sizing: border-box;
}

.pagination-wrapper-slot {
  flex-shrink: 1;
  overflow: hidden;
  height: calc(100% - v-bind(inHeader));
  overflow-y: auto;
}

.header {
  position: sticky;
  z-index: 1;
  top:0;
  box-sizing: border-box;
  height: v-bind(inHeader);
  width: 100%;
}
</style>
