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
    <use xlink:href="#icon-menu-squares"></use>
  </svg>

  <svg width="0" height="0" class="hidden">
    <symbol id="icon-menu-squares" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path
        d="M160 448C151.513 448 143.374 444.629 137.373 438.628C131.371 432.627 128 424.487 128 416V160.064C128 151.578 131.371 143.438 137.373 137.437C143.374 131.436 151.513 128.064 160 128.064H416C424.487 128.064 432.626 131.436 438.627 137.437C444.629 143.438 448 151.578 448 160.064V416C448 424.487 444.629 432.627 438.627 438.628C432.626 444.629 424.487 448 416 448H160ZM608 448C599.513 448 591.374 444.629 585.373 438.628C579.371 432.627 576 424.487 576 416V160.064C576 151.578 579.371 143.438 585.373 137.437C591.374 131.436 599.513 128.064 608 128.064H863.936C872.423 128.064 880.562 131.436 886.563 137.437C892.565 143.438 895.936 151.578 895.936 160.064V416C895.936 424.487 892.565 432.627 886.563 438.628C880.562 444.629 872.423 448 863.936 448H608ZM160 896C151.513 896 143.374 892.629 137.373 886.628C131.371 880.627 128 872.487 128 864V608C128 599.514 131.371 591.374 137.373 585.373C143.374 579.372 151.513 576 160 576H416C424.487 576 432.626 579.372 438.627 585.373C444.629 591.374 448 599.514 448 608V864C448 872.487 444.629 880.627 438.627 886.628C432.626 892.629 424.487 896 416 896H160ZM608 896C599.513 896 591.374 892.629 585.373 886.628C579.371 880.627 576 872.487 576 864V608C576 599.514 579.371 591.374 585.373 585.373C591.374 579.372 599.513 576 608 576H863.936C872.423 576 880.562 579.372 886.563 585.373C892.565 591.374 895.936 599.514 895.936 608V864C895.936 872.487 892.565 880.627 886.563 886.628C880.562 892.629 872.423 896 863.936 896H608Z"
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
  margin: { type: String as PropType<string>, default: '0 15px 0 0' },
  iconClass: { type: String as PropType<string>, required: false, default: '' },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';
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
