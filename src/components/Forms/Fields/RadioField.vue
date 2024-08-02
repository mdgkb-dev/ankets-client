<template>
  <PRadio
    v-for="variant in field.answerVariants"
    :key="variant.id"
    :value="variant.id"
    :label="variant.name"
    v-model="value"
    class="block"
    :style="{ width: 'calc(100% - 10px)', height: 'auto' }"
    @change="filledCheck(variant)"
  />
  <!-- <template -->
  <!--   v-if="(selectedVariant && selectedVariant.showMoreQuestions) || (question.children.length > 0 && question.answerVariants.length < 1)" -->
  <!-- > -->
  <!--   <el-form-item v-for="additionalQuestion in question.children" :key="additionalQuestion.id" :label="additionalQuestion.name"> -->
  <!--     <component -->
  <!--       :is="additionalQuestion.valueType.getComponentType()" -->
  <!--       :research-result="researchResult" -->
  <!--       :question="additionalQuestion" -->
  <!--       @fill="$emit('fill')" -->
  <!--     /> -->
  <!--   </el-form-item> -->
  <!-- </template> -->
</template>

<script lang="ts" setup>
import Field from '@/classes/Field';
import AnswerVariant from '@/classes/AnswerVariant';
import FieldFill from '@/classes/FieldFill';

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

const emit = defineEmits(['fill']);

const value: Ref<string | undefined> = ref(props.fieldFill.fieldVariantId);
// const answer: Ref<Answer | undefined> = computed(() => props.researchResult.getOrCreateAnswer(props.question));
const myinput = ref<HTMLInputElement>();
const compRef = ref();

const filledCheck = (variant: AnswerVariant): void => {
  props.fieldFill.setRadio(variant);
  emit('fill');
  // nextTick(() => compRef.value.inputRef.focus());
};

//
// onBeforeMount(() => {
//   selectVariant(props.question.answerVariants.find((a: AnswerVariant) => a.id === answer.value?.answerVariantId));
// });
</script>

<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

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

:deep(.el-form-item) {
  display: block;
  width: 100%;
  margin-bottom: 16px;
}

:deep(.el-input__inner) {
  height: 32px;
  width: 100%;
  display: flex;
  font-family: Comfortaa, Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: $site_dark_gray;
}

:deep(.el-input__inner::placeholder) {
  color: $site_light_pink;
}

:deep(.el-input__icon) {
  color: $site_dark_gray;
  margin-right: 10px;
}

:deep(.el-form-item__label) {
  color: $site_light_pink;
  padding: 0 !important;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 6px;
}

.block p {
  white-space: pre-wrap;
}
</style>
