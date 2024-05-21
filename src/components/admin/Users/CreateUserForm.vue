<template>
  <ModalCard title="Добавить нового пользователя">
    <PInput placeholder="Email" margin="40px auto 0 auto" v-model="user.email" />

    <PSelect placeholder="Должность" margin="10px auto 0 auto" v-model="user.role">
      <template #left>
        <IconJob />
      </template>
      <option>Эксперт</option>
      <option>Администратор</option>
    </PSelect>
    <PSelect placeholder="Нозология" margin="10px auto 0 auto">
      <template #left>
        <IconDepartment />
      </template>
      <option>Вариант 1</option>
      <option>Вариант 2</option>
      <option>Вариант 3</option>
    </PSelect>
    <PButton text="Добавить" button-class="base-button" @click="create" />
  </ModalCard>
</template>

<script lang="ts" setup>
import User from '@/classes/User';

import PInput from '@/services/components/PInput.vue';
import PButton from '@/services/components/PButton.vue';
import PSelect from '@/services/components/PSelect.vue';
import IconJob from '@/components/Icons/IconJob.vue';
import IconDepartment from '@/components/Icons/IconDepartment.vue';
import ModalCard from '@/components/Base/ModalCard.vue';
const emit = defineEmits(['add']);
const user: Ref<User> = ref(User.Create());

const create = async (): Promise<void> => {
  await Store.Create('usersAccounts', user.value.userAccount);
  await Store.Create('users', user.value);
  Provider.store.commit('users/unshiftToAll', user.value);
  emit('add');
};
</script>
<style lang="scss" scoped>
// @import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.help-string {
  display: flex;
  justify-content: right;
  align-items: center;
  color: #5F6A99;
  font-size: 16px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  opacity: 0.4;
  cursor: pointer;
  width: 124px;
}

.help-string:hover {
  color: #5F6A99;
  font-size: 16px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  opacity: 1;
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
