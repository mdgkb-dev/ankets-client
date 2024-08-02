<template>
  <!-- <PatientFormesResultsList v-if="research.id && research.withDates && patientForm.id" :research="research" -->
  <!--   :patient-research="patientForm" @select="selectResult" @add-result="addResult" @save="$emit('save')" /> -->

  <!-- <TopSliderContainer slider-on-height="250px"> -->
  <!--   <template #title> -->
  <!--     <div class="title">Фильтры</div> -->
  <!--     <div v-if="userForm.research.withScores" class="title"> -->
  <!--       &nbsp;(Баллов: {{ researchResult.calculateScores(research.getAnswerVariants()) }}) -->
  <!--     </div> -->
  <!--   </template> -->
  <!--   <div v-show="!research.showOnlyFilled" class="flex-line"> -->
  <!--     <StringItem string="Скрыть&nbsp;заполненные" font-size="14px" padding="0 10px 0 0" /> -->
  <!--     <el-switch v-model="userForm.research.showOnlyNotFilled" placeholder="Отобразить только незаполненные" /> -->
  <!--   </div> -->
  <!--   <div v-show="!research.showOnlyNotFilled" class="flex-line"> -->
  <!--     <StringItem string="Скрыть&nbsp;незаполненные" font-size="14px" padding="0 10px 0 0" /> -->
  <!--     <el-switch v-model="userForm.research.showOnlyFilled" placeholder="Отобразить только заполненные" /> -->
  <!--   </div> -->
  <!--   <div class="search"> -->
  <!--     <el-input v-model="userForm.research.filterString" placeholder="Найти вопрос" /> -->
  <!--   </div> -->
  <!-- <div v-for="res in getCalculationsResults(research)" :key="res.name" class="flex-line4">
              <div v-if="Number.isFinite(res.value)" class="res-name">{{ res.formulaName + ':' }}</div>
              <div v-if="Number.isFinite(res.value)">{{ res.value.toFixed(2) }}</div>
              <div :style="{ color: res.color }">{{ res.result }}</div>
            </div> -->
  <!-- </TopSliderContainer> -->
  <!-- <div v-show="!research.showOnlyFilled" class="flex-line"> -->
  <!--   <StringItem string="Скрыть&nbsp;заполненные" font-size="14px" padding="0 10px 0 0" /> -->
  <!--   <el-switch v-model="research.showOnlyNotFilled" placeholder="Отобразить только незаполненные" /> -->
  <!-- </div> -->
  <!-- <div v-show="!research.showOnlyNotFilled" class="flex-line"> -->
  <!--   <StringItem string="Скрыть&nbsp;незаполненные" font-size="14px" padding="0 10px 0 0" /> -->
  <!--   <el-switch v-model="research.showOnlyFilled" placeholder="Отобразить только заполненные" /> -->
  <!-- </div> -->
  <!-- <div class="search"> -->
  <!--   <el-input v-model="research.filterString" placeholder="Найти вопрос" /> -->
  <!-- </div> -->
  <ResearchPageFields />
</template>

<script lang="ts" setup>
import Form from '@/classes/Form';
import FormFill from '@/classes/FormFill';

const emits = defineEmits(['save']);
const form: Form = FormsStore.Item();
const formFill: FormFill = FormFillsStore.Item();

onBeforeMount(async () => {
  await FormFillsStore.Get(Router.Id());
});

const selectResult = async (id?: string) => {
  await FormFillsStore.Get(id);
};
</script>

<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.header-container {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grey-button {
  width: 120px;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #f5f5f5;
  margin: 0 10px;
  font-size: 14px;
}

.edit-button {
  display: none;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #006bb4;
  background: #f5f5f5;
}

.flex-line {
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.search {
  display: flex;
  justify-content: left;
  align-items: center;
}

:deep(.edit-icon) {
  width: 28px;
  height: 28px;
  fill: #006bb4;
}

@media screen and (max-width: 768px) {
  .grey-button {
    display: none;
  }

  .edit-button {
    display: flex;
  }
}
</style>
