<template>
  <!-- <SetSelect v-if="question.questionVariants.length" :research-result="researchResult" :question="question" @fill="fill" /> -->
  <component :is="getComponent()" :field-fill="fieldFill" @fill="fill" />
</template>

<script lang="ts" setup>
import Field from '@/classes/Field';
import FieldFill from '@/classes/FieldFill';

import ValueTypesComponentMap from './ValueTypesComponentMap';

const props = defineProps({
  field: { type: Field, required: true },
  fieldFill: { type: FieldFill, required: true },
});

const emit = defineEmits(['fill']);

const getComponent = () => {
  // if (props.question.valueType.isRadio()) {
  //   return 'RadioProp';
  // }
  // if (props.question.valueType.isSet()) {
  //   return 'SetProp';
  // }
  // if (props.question.valueType.isNumber()) {
  //   return 'NumberProp';
  // }
  return ValueTypesComponentMap[props.field.valueType.name];
};

const fill = () => {
  // scroll(props.question.getIdWithoutDashes());
  // researchResult.value.changed = true;
  emit('fill');
};
</script>

<style lang="scss" scoped></style>
