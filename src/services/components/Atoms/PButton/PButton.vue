<template>
  <button
    :style="{
      margin: margin,
      padding: padding,
      maxWidth: width,
      minWidth: width,
      minHeight: height,
      maxHeight: height,
      fontSize: fontSize,
    }"
    :class="buttonClass"
    :disabled="disabled"
    @click.prevent="changeState"
  >
    <slot />
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType, ButtonHTMLAttributes } from 'vue';
defineOptions({ inheritAttrs: false });

// type ButtonProps = ButtonHTMLAttributes;

const props = defineProps({
  text: { type: String, default: '', required: false },
  margin: { type: String, default: '', required: false },
  padding: { type: String, default: '', required: false },
  width: { type: String, default: '', required: false },
  height: { type: String, default: '', required: false },
  skin: { type: String, default: 'base', required: false },
  type: { type: String, default: 'neutral', required: false },
  fontSize: { type: String, default: '', required: false },
  disabled: { type: Boolean, default: false, required: false },
});

const emit = defineEmits(['click']);
const changeState = () => {
  emit('click');
};

const buttonClass = computed(() => 'p-button' + '_' + props.skin + ' ' + 'p-button' + '_' + props.skin + '_' + props.type);
</script>

<style type="scss" scoped>
@import '@/services/components/Atoms/PButton/skins/p-button_base.css';
@import '@/services/components/Atoms/PButton/skins/p-button_text.css';
</style>
