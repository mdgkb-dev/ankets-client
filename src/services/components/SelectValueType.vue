<template>
  <StringItem string="Выберите вид ответа:" font-size="14px" padding="0" justify-content="left" margin="10px 0" />
  <PSelect :model-value="selectedType" placeholder="Вид ответа" @change="select">
    <option v-for="(value, type) in types" :key="value" :label="value" :value="type" />
  </PSelect>
</template>

<script setup lang="ts">
import StringItem from '@/services/components/StringItem.vue';
import ValueTypes from '@/services/types/ValueTypes';

defineProps({
  selectedType: {
    type: String as PropType<ValueTypes>,
    required: true,
  },
});
const types = {
  [ValueTypes.String]: 'Текстовый ответ',
  [ValueTypes.Number]: 'Числовой ответ',
  [ValueTypes.Date]: 'Ответ в виде даты',
  [ValueTypes.Radio]: 'Выбор одного из вариантов',
  [ValueTypes.Set]: 'Выбор нескольких вариантов',
  [ValueTypes.Files]: 'Ответ в виде файла',
};
const emits = defineEmits(['select']);

const select = (t: ValueTypes) => {
  emits('select', t);
};
</script>

<style lang="scss" scoped>
.red {
  background: red;
}
</style>
