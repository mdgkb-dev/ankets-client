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
defineOptions({ inheritAttrs: false });

const props = defineProps({
  text: { type: String as PropType<string>, default: '', required: false },
  margin: { type: String as PropType<string>, default: '', required: false },
  padding: { type: String as PropType<string>, default: '', required: false },
  width: { type: String as PropType<string>, default: '', required: false },
  height: { type: String as PropType<string>, default: '', required: false },
  skin: { type: String as PropType<string>, default: 'base', required: false },
  type: { type: String as PropType<string>, default: 'neutral', required: false },
  fontSize: { type: String as PropType<string>, default: '', required: false },
  disabled: { type: Boolean, default: false, required: false },
});

const emit = defineEmits(['click']);
const changeState = () => {
  emit('click');
};

const buttonClass = computed(() => 'p-button' + '_' + props.skin + ' ' + 'p-button' + '_' + props.skin + '_' + props.type);
</script>

<style scoped>
@import '@/services/styles/index.css';

/* skin: text */
/* type: primary, secondary, success, warning, danger, neutral, del */

/* .p-button_text {
  border: none;
  margin: var(--button-primary-medium-whiteSpace-gap);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var();
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  padding: var(--button-primary-medium-whiteSpace-padding-vertical, --button-primary-medium-whiteSpace-padding-horizontal);
  border-radius: none;
  height: auto;
  width: auto;
  background: none;
  font-family: var();
  font-size: var(--button-font-size-default);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.p-button_text_primary {
  color: var(--button-primary-enabled-background-color);
}

.p-button_text_primary:hover {
  color: var(--button-primary-hover-background-color);
}

.p-button_text_secondary {
  color: var(--button-secondary-enabled-background-color);
}

.p-button_text_secondary:hover {
  color: var(--button-secondary-hover-background-color);
}

.p-button_text_success {
  color: var(--button-success-enabled-background-color);
}

.p-button_text_success:hover {
  color: var(--button-success-hover-background-color);
}

.p-button_text_warning {
  color: var(--button-warning-enabled-background-color);
}

.p-button_text_warning:hover {
  color: var(--button-warning-hover-background-color);
}

.p-button_text_danger {
  color: var(--button-error-enabled-background-color);
}

.p-button_text_danger:hover {
  color: var(--button-error-hover-background-color);
}

.p-button_text_neutral {
  color: var(--button-neutral-enabled-background-color);
}

.p-button_text_neutral:hover {
  color: var(--button-neutral-hover-background-color);
}

.p-button_text_del {
  color: var(--button-neutral-enabled-background-color);
}

.p-button_text_del:hover {
  color: var(--button-error-hover-background-color);
} */
</style>
