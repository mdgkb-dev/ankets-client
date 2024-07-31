<template>
  <ModalCard title="Назначить анкету">
    <PSelect placeholder="Выберите эксперта" margin="20px auto 0 auto" v-model="selectedUserId">
      <template #left>
        <IconUser />
      </template>
      <option v-for="user in users" :key="user.id" :label="user.userAccount.email" :value="user.id">{{
        user.userAccount.email
      }}</option>
    </PSelect>
    <PButton text="Назначить" skin="royal" type="blue" @click="create" margin="10px 0 0 0"/>
  </ModalCard>
</template>

<script setup lang="ts">
import { onBeforeMount, Ref, ref } from 'vue';

import Research from '@/classes/Research';
import ResearchResult from '@/classes/ResearchResult';
import UserResearch from '@/classes/UserResearch';
import Provider from '@/services/Provider/Provider';
import ModalCard from '@/components/Base/ModalCard.vue';
import IconUser from '@/components/Icons/IconUser.vue';
import PInput from '@/services/components/PInput.vue';
import StringItem from '@/services/components/StringItem.vue';
import PButton from '@/services/components/PButton.vue';
import PSelect from '@/services/components/PSelect.vue';
import IconJob from '@/components/Icons/IconJob.vue';
import IconDepartment from '@/components/Icons/IconDepartment.vue';
import IconLink from '@/components/Icons/IconLink.vue';
const props = defineProps({
  researchId: { type: String as PropType<String>, default: '' }
});
const showSnilsForm: Ref<boolean> = ref(true);
const userResearch: Ref<Research> = ref(UserResearch.Create());

const emits = defineEmits(['add']);
const users = Store.Items('users')
const research = Store.Item('researches')
const selectedUserId = ref('')

onBeforeMount(async () => {
  const f = new FTSP()
  f.p.limit = 0
  await Store.FTSP('users', { ftsp: f })
});

const create = async (): Promise<void> => {
  userResearch.value.assign(selectedUserId.value, props.researchId)
  await Store.Create('usersResearches', userResearch.value)
  await Store.Get('researches', props.researchId)
  await Store.Create('researchesResults', ResearchResult.Create(research.value, userResearch.value.id))
  emits('add');
};

</script>
<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.flex-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 560px;
}


.base-title {
  margin: 0 auto;
  padding: 0 0 20px 0;
  color: #5F6A99;
  font-size: 28px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #E3E7FB;
}

.base-button {
  box-sizing: border-box;
  width: 100%;
  max-width: 560px;
  height: 52px;
  border: none;
  border-radius: 5px;
  background: #5E6CE7;
  color: #ffffff;
  font-size: 17px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin: 30px 0 0 0;
}

.base-button:hover {
  background: lighten($color: #5E6CE7, $amount: 3%);
}
</style>
