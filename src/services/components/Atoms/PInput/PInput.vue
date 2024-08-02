<template>
  <div class="text-field" :style="{ margin: margin, padding: padding }">
    <label v-if="label" class="text-field__label" :for="label">
      {{ label }}
    </label>
    <div class="field">
      <div class="left-field">
        <slot />
      </div>
      <input
        :id="label"
        v-model="model"
        :type="getInputType()"
        class="text-field__input"
        :name="label"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        @blur="$emit('blur')"
        @input="$emit('input')"
      />
      <div class="right-field">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['blur', 'input']);
const model = defineModel<string>();

defineOptions({ inheritAttrs: false });

const props = defineProps({
  text: { type: String as PropType<string>, default: '', required: false },
  label: { type: String as PropType<string>, default: '', required: false },
  placeholder: { type: String as PropType<string>, default: '', required: false },
  readonly: { type: Boolean, default: false, required: false },
  disabled: { type: Boolean, default: false, required: false },
  margin: { type: String as PropType<string>, required: false, default: '' },
  padding: { type: String as PropType<string>, default: '', required: false },
  password: { type: Boolean as PropType<boolean>, default: false, required: false },
});

const getInputType = () => {
  if (props.password) {
    return 'password';
  }
  return 'text';
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.field {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  background: var(--input-background);
  border-radius: 100px;
  border: 1px solid;
  border-color: var(--input-border-color);
  padding: var(--input-padding-default);
  margin: var(--input-margin-default);
  overflow: hidden;
}

.right-field {
  display: flex;
  justify-content: right;
  align-items: center;
  width: auto;
}

.left-field {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
}

.text-field {
  width: var(--input-width-default);
}

.text-field__label {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-family: var(--base-font);
  color: var(--input-label-color);
  font-size: var(--button-font-size-default);
  margin: var(--input-labal-margin);
}

.text-field__input {
  width: 100%;
  font-size: var(--button-font-size-default);
  font-family: var(--base-font);
  background: var(--input-background);
  color: var(--input-font-color);
  margin: 0;
  padding: 7px 0 3px 0;
  border: none;
}

.text-field__input::placeholder {
  font-family: var(--base-font);
  font-size: var(--button-font-size-default);
  color: var(--input-placeholder-color);
}

.text-field__input:focus {
  color: var(--input-focus-color);
  outline: 0;
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: var(--input-readonly-background);
  opacity: 1;
}
</style>
