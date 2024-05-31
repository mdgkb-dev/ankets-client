<template>
  <!-- <PatientResearchesResultsList v-if="research.id && research.withDates && patientResearch.id" :research="research" -->
  <!--   :patient-research="patientResearch" @select="selectResult" @add-result="addResult" @save="$emit('save')" /> -->
  <PatientResearchesQuestion v-if="researchResult.id" :key="researchResult.id" />
</template>

<script lang="ts" setup>
import Patient from '@/classes/Patient';
import PatientResearch from '@/classes/PatientResearch';
import Research from '@/classes/Research';
import ResearchResult from '@/classes/ResearchResult';
import PatientResearchesQuestion from '@/components/admin/UsersResearches/PatientResearchesQuestion.vue';
// import PatientResearchesResultsList from '@/components/admin/UsersResearches/PatientResearchesResultsList.vue';
import Provider from '@/services/Provider/Provider';
import scroll from '@/services/Scroll';

const emits = defineEmits(['save'])
const research: Ref<Research> = Store.Item("researches")
const userResearch: ComputedRef<PatientResearch> = Store.Item('usersResearches')
const researchResult: Ref<ResearchResult> = Store.Item('researchesResults')

onBeforeMount(async () => {
  await Store.Get('usersResearches', Router.Id())
  return await selectResult(userResearch.value.getLastResult()?.id as string);
});

const selectResult = async (id?: string) => {
  if (!id) {
    Message.Error("Не создан результат, назначьте анкету ещё раз")
  }
  await Store.Get('researchesResults', id);
};

onBeforeUnmount(() => {
  Provider.store.commit('researches/set');
  Provider.store.commit('researchesResults/set');
  Provider.store.commit('patientsResearches/set');
});
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
