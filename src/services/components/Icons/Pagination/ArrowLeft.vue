<template>
  <svg
    class="icon"
    :class="iconClass"
    :style="{
      margin: margin,
      width: size,
      height: size,
      fill: hoverColor ? (hovering ? hoverColor : color) : hovering ? color : color,
    }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <use xlink:href="#arrow-left"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path
        d="M656.733 149.806C659.446 147.019 662.69 144.804 666.274 143.292C669.857 141.779 673.707 141 677.597 141C681.486 141 685.337 141.779 688.92 143.292C692.503 144.804 695.748 147.019 698.461 149.806C704.024 155.518 707.138 163.176 707.138 171.15C707.138 179.123 704.024 186.782 698.461 192.494L386.589 512.366L698.461 832.302C701.269 835.176 703.483 838.575 704.976 842.305C706.47 846.035 707.215 850.022 707.167 854.04C707.119 858.057 706.281 862.026 704.699 865.72C703.118 869.413 700.824 872.759 697.949 875.566C695.211 878.242 691.972 880.351 688.417 881.774C684.863 883.197 681.063 883.904 677.235 883.857C673.407 883.809 669.625 883.007 666.107 881.497C662.589 879.986 659.404 877.797 656.733 875.054L325.085 534.702C319.26 528.726 316 520.711 316 512.366C316 504.021 319.26 496.006 325.085 490.03L656.733 149.806Z"
      ></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
const hovering = ref(false);
defineProps({
  color: { type: String as PropType<string>, default: '' },
  hoverColor: { type: String as PropType<string>, default: '' },
  size: { type: String as PropType<string>, default: '' },
  margin: { type: String as PropType<string>, default: '0' },
  iconClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style lang="scss" scoped>
@import '@/services/assets/styles/index.scss';
.hidden {
  display: none;
}
.icon {
  width: $icon-width;
  height: $icon-height;
  fill: $icon-color;
  transition: $icon-transition;
}

.icon:hover {
  fill: $icon-hover-color;
}
</style>
