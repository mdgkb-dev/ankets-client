<template>
  <div class="form-info">
    <div class="scroll-block">
      <div v-for="section in form.formSections" :key="section.id" :id="section.id" class="background-container">
        <div>{{ section.name }}</div>
        <div v-for="field in section.fields" :key="field.id" :id="field.getIdWithoutDashes()" class="background-container">
          <FieldComponent :field="field" :form-fill="formFill.getOrCreateFieldFill(field)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Form from '@/classes/Form';
import FormFill from '@/classes/FormFill';
import FieldComponent from '@/components/admin/UsersFormes/FieldComponent.vue';
import CollapseContainer from '@/services/components/Collapse/CollapseContainer.vue';
import CollapseItem from '@/services/components/Collapse/CollapseItem.vue';

const emits = defineEmits(['fill']);
const form: Form = FormsStore.Item();
const formFill: FormFill = FormFillsStore.Item();

// const filteredFields: ComputedRef<Field[]> = computed(() => {
//   return form.getFilteredFields(formResult.value);
// });

// const birthDateToMonth = (birthDate: string): number => {
//   return (new Date().getFullYear() - new Date(birthDate).getFullYear()) * 12;
// };

// const getCalculationsResults = (form: Form): FormulaResult[] => {
//   const results: FormulaResult[] = [];
//
//   let item: { [key: string]: number } = {};
//   const monthsToForm = formResult.value.date.getMilliseconds() - patient.value.human.dateBirth.getMilliseconds();
//   const months = birthDateToMonth(monthsToForm.toString());
//
//   form.fields.forEach((q: Field) => {
//     if (q.code) {
//       item[q.code] = formResult.value.getAnswerByFieldId(q.id as string)?.valueNumber as number;
//     }
//   });
//   form.formulas.forEach((f: Formula) => {
//     const res = f.getResult(item, patient.value.human.isMale, months);
//     res.formulaName = f.name;
//     results.push(res);
//   });
//   return results;
// };
// const saveResult = async (): Promise<void> => {
// if (formResult.value.changed) {
// await Provider.store.dispatch('formesResults/update', formResult.value);
// if (userForm.value) {
//   patientForm.value.recalculate(formResult.value);
//   await Provider.store.dispatch('patientsFormes/update', patientForm.value);
// }
// Message.Success('Сохранено');
// }

// if (!form.value.withDates) {
//   Provider.store.commit('formesResults/set');
//   Provider.store.commit('formes/set');
// }
// formResult.value.changed = false;
// };
</script>

<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.form-info {
  width: calc(100% - 22px);
  height: 88vh;
  background: #dff2f8;
  margin: 0;
  padding: 0px 10px 10px 10px;
}

.scroll-block {
  width: 100%;
  height: calc(100% - 60px);
  overflow: hidden;
  overflow-y: auto;
}

.background-container {
  width: auto;
  padding: 10px;
  margin: 0 10px 10px 10px;
  background: #dff2f8;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
}

@media screen and (max-width: 630px) {
  .form-info {
    margin: 0 0 10px 0;
  }
}
</style>
