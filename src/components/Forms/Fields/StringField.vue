<template>
  <PInput :v-model="value" @input="filledCheck" />
</template>

<script lang="ts" setup>
import FieldFill from '@/classes/FieldFill';
const props = defineProps({
  fieldFill: {
    type: FieldFill,
    required: true,
  },
});
const value = ref(props.fieldFill.valueString);
const emit = defineEmits(['fill']);

const filledCheck = (): void => {
  props.fieldFill.setString(value.value);
  emit('fill');
};
</script>

<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';

.register-property-block {
  background-color: #eef1f6;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;

  h3 {
    margin-top: 0;
  }
}

.el-form-item {
  margin: 0;
}

.el-divider {
  margin: 10px 0;
}
</style>
