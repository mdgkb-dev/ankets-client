<template>
  <div>{{ form.name }}</div>
  <br />
  <FormPageSections v-if="mounted" />
</template>

<script lang="ts" setup>
import Form from '@/classes/Form';
import FormFill from '@/classes/FormFill';

const emits = defineEmits(['save']);
const form: Form = FormsStore.Item();
const mounted = ref(false);
onBeforeMount(async () => {
  await FormsStore.Get();
  await initFill();
  mounted.value = true;
});

const initFill = async () => {
  const item = FormFill.Create(form);
  FormFillsStore.Set(item);
  await FormFillsStore.Create(item);
  // await FieldFillsStore.CreateMany(item.fieldFills)
};

// onBeforeUnmount(() => {
//   Provider.store.commit('researches/set');
//   Provider.store.commit('researchesResults/set');
//   Provider.store.commit('patientsResearches/set');
// });
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
