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
