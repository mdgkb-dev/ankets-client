<template>
  <ModalCard title="Добавить новую анкету">
    <PInput placeholder="Название" margin="40px auto 10px auto" v-model="research.name" />
    <PButton text="Добавить" skin="royal" @click="create" type="blue" />
  </ModalCard>
</template>

<script setup lang="ts">
import { onBeforeMount, Ref, ref } from 'vue';

import Research from '@/classes/Research';
import Provider from '@/services/Provider/Provider';
import ModalCard from '@/components/Base/ModalCard.vue';

const showSnilsForm: Ref<boolean> = ref(true);
const research: Ref<Research> = ref(Research.Create());
const mounted = ref(false);
const emits = defineEmits(['add']);

onBeforeMount(async () => {
  mounted.value = true;
});

// const addToDomain = async (): Promise<void> => {
//   await Provider.store.dispatch('researchsDomains/addToDomain', existingResearch.value.id);
//   await Provider.store.dispatch('researchs/get', existingResearch.value.id);
//   Provider.store.commit('researchs/unshiftToAll', existingResearch.value.id);
//   emit('add');
// };

const create = async (): Promise<void> => {
  await Provider.store.dispatch('researches/create', research.value);
  Provider.store.commit('researches/unshiftToAll', research.value);
  emits('add');
};
</script>
<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.save-button {
  width: 300px;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 0 auto;
  font-size: 14px;
}
</style>
