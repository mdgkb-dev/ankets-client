<template>
  <InfoItem title="название" icon="edit-title" :with-open-window="false" :with-hover="false" border-color="#ffffff"
    base-box-margin="0 0 15px 0" padding="0" width="100%">
    <el-select>
      <el-option v-for="user in users" :key="user.id" :label="user.getName()" />
    </el-select>
  </InfoItem>
  <Button button-class="save-button" text="Назначить" @click="create" />
</template>

<script setup lang="ts">
import { onBeforeMount, Ref, ref } from 'vue';

import Research from '@/classes/Research';
import Provider from '@/services/Provider/Provider';

const showSnilsForm: Ref<boolean> = ref(true);
const research: Ref<Research> = ref(Research.Create());
const emits = defineEmits(['add']);
const users = Store.Items('users')

onBeforeMount(async () => {
  const f = new FTSP()
  f.p.limit = 0
  await Store.FTSP('users', { ftsp: f })
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
