<template>
  <svg :style="{
    width: width,
    height: height,
    fill: hoverColor ? (hovering ? hoverColor : color) : (hovering ? color : color),
  }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <use xlink:href="#user"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user">
      <path d="M19.6524 19.405C20.2044 19.29 20.5344 18.712 20.2594 18.218C19.6534 17.131 18.6994 16.175 17.4794 15.447C15.9074 14.509 13.9804 14 12.0004 14C10.0194 14 8.09339 14.508 6.52139 15.447C5.30139 16.175 4.34739 17.131 3.74139 18.218C3.46639 18.712 3.79639 19.29 4.34839 19.405C9.39518 20.4568 14.6046 20.4568 19.6514 19.405" ></path>
      <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" ></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>

const hovering = ref(false);
const props = defineProps({
  color: {
    type: String as PropType<string>,
    default: '#5F6A99',
  },
  hoverColor: {
    type: String as PropType<string>,
    default: '',
  },
  width: {
    type: String as PropType<string>,
    default: '28px',
  },
  height: {
    type: String as PropType<string>,
    default: '28px',
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/elements/base-style.scss';

.hidden {
  display: none;
}
</style>
