<template>
  {{ field.valueType.name }}
  <component :is="FieldComponentsMap[field.valueType.name]" :field-fill="fieldFill" @fill="fill" :field="field" />
</template>

<script lang="ts" setup>
import Field from '@/classes/Field';
import FieldFill from '@/classes/FieldFill';

import FieldComponentsMap from '@/components/Forms/Fields/FieldsComponentsMap';

const props = defineProps({
  field: { type: Field, required: true },
  fieldFill: { type: FieldFill, required: true },
});

const emit = defineEmits(['fill']);

const fill = () => {
  // scroll(props.question.getIdWithoutDashes());
  // researchResult.value.changed = true;
  emit('fill');
};
</script>

<style lang="scss" scoped></style>
