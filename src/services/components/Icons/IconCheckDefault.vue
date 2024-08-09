<template>
  <svg
    class="icon"
    :class="iconClass"
    :style="{
      margin: margin,
      width: size,
      height: size,
    }"
  >
    <use xlink:href="#check_on"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="check_on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        d="M29.3678 7.25259C29.2732 7.3128 28.8775 7.6999 28.5076 8.13001C27.7076 9.02463 16.2409 22.0483 16.2065 22.0999C16.1549 22.1601 15.6732 21.73 13.9786 20.1042C8.31835 14.6934 8.5334 14.8827 8.03448 14.8827C7.69899 14.8827 7.59577 14.9257 7.3463 15.1752C7.09684 15.4246 7.05383 15.5279 7.05383 15.8547C7.05383 16.3365 6.98501 16.259 10.1506 19.2354C11.5011 20.4999 13.256 22.1601 14.056 22.9171C15.6302 24.4225 15.9485 24.6461 16.3872 24.5687C16.7399 24.4999 16.7743 24.4569 20.0947 20.6891C21.5485 19.0289 23.2689 17.0762 23.914 16.3451C29.4624 10.0655 30.6495 8.69775 30.77 8.48269C30.942 8.14721 30.8474 7.6999 30.5377 7.38162C30.3399 7.19237 30.2194 7.14076 29.9183 7.14076C29.7119 7.14936 29.471 7.19237 29.3678 7.25259Z"
        fill="currentColor"
      ></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
const hovering = ref(false);
defineProps({
  size: { type: String as PropType<string>, default: '22px' },
  margin: { type: String as PropType<string>, default: '0' },
  iconClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';
.hidden {
  display: none;
}
.icon {
  box-sizing: border-box;
  padding: 0;
}
</style>
