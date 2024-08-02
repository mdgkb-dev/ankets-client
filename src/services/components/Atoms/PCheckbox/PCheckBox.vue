<template>
  <div class="check-line">
    <input v-model="model" class="check-field__input" type="checkbox" :value="value" />
    <div class="pointer">
      <slot />
    </div>
    <label class="check-field__label" :style="{ fontSize: fontSize }">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<boolean>();
const emits = defineEmits(['switchPosition']);
defineProps({
  label: { type: String, default: 'label' },
  fontSize: { type: String, default: '14px' },
  value: { type: String },
});
emits('switchPosition', model);
</script>
