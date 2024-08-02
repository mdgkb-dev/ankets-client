<template>
  <PCheckBox v-for="variant in field.answerVariants" :key="variant.id" :label="variant.name" :value="variant.id" />
  <!-- <el-form v-if="showOthers" class="line"> -->
  <!--   <el-form-item v-for="additionalQuestion in question.children" :key="additionalQuestion.id" :label="additionalQuestion.name"> -->
  <!--     <SetProp -->
  <!--       :is="additionalQuestion.valueType.getComponentType()" -->
  <!--       v-if="additionalQuestion.valueType.getComponentType() === 'SetProp'" -->
  <!--       :research-result="researchResult" -->
  <!--       :question="additionalQuestion" -->
  <!--       @fill="$emit('fill')" -->
  <!--     /> -->
  <!--     <component -->
  <!--       :is="additionalQuestion.valueType.getComponentType()" -->
  <!--       v-else -->
  <!--       :research-result="researchResult" -->
  <!--       :question="additionalQuestion" -->
  <!--       @fill="$emit('fill')" -->
  <!--     /> -->
  <!--   </el-form-item> -->
  <!-- </el-form> -->
</template>

<script lang="ts" setup>
import Field from '@/classes/Field';
import AnswerVariant from '@/classes/AnswerVariant';
import FieldFill from '@/classes/FieldFill';
// import SelectedAnswerVariant from '@/classes/SelectedAnswerVariant';

const props = defineProps({
  fieldFill: {
    type: FieldFill,
    required: true,
  },
  field: {
    type: Object as PropType<Field>,
    required: true,
  },
  // restrictOthers: {
  //   type: Boolean as PropType<boolean>,
  //   default: false,
  // },
});
const emit = defineEmits(['update:modelValue', 'fill']);
// const answer: Ref<Answer> = ref(props.researchResult.getOrCreateAnswer(props.question));
// const showOthers = computed(() => {
//   if (props.restrictOthers) {
//     return false;
//   }
//   return answer.value.selectedAnswerVariants.some((s: SelectedAnswerVariant) => {
//     return props.question.answerVariants.some((a: AnswerVariant) => a.id === s.answerVariantId && a.showMoreQuestions);
//   });
// });
// const filledCheck = (): void => {
//   answer.value.filled = answer.value.selectedAnswerVariants.length > 0;
//   props.researchResult.calculateFilling();
//   emit('fill');
// };
// const selectVariant = (selected: boolean, variantId: string) => {
//   answer.value.setSelectedAnswerVariant(selected, variantId);
//   filledCheck();
// };
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
