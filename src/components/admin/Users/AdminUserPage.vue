<template>
  <ModalCard>
    <el-input v-model="user.human.surname" label="Фамилия" @blur="updateHuman" />
    <el-input v-model="user.human.name" label="Имя" @blur="updateHuman" />
    <el-input v-model="user.human.patronymic" label="Отчество" @blur="updateHuman" />
    <div>
      <PInputData v-model="user.human.dateBirth" @blur="update" />
    </div>
    <div>
      <el-input v-model="user.email" @blur="update" />
      <el-input v-model="user.phone" @blur="update" />
    </div>
    <div>
      <el-input v-model="user.inn" @blur="update" />
      <el-input v-model="user.snils" @blur="update" />
    </div>
    <div>
      <el-input v-model="user.passportNum" @blur="update" />
      <el-input v-model="user.passportSeria" @blur="update" />
      <el-input v-model="user.passportDivision" @blur="update" />
      <el-input v-model="user.passportDivisionCode" @blur="update" />
      <el-input v-model="user.passportCitzenship" @blur="update" />
    </div>
  </ModalCard>
</template>

<script setup lang="ts">
import AdminUserPageInfo from './AdminUserPageInfo.vue';
import PInput from '@/services/components/PInput.vue';

import ModalCard from '@/components/Base/ModalCard.vue';
const mounted = ref(false);
const user: Ref<User> = Store.Item('users');

const components = {
  AdminUserPageInfo: AdminUserPageInfo,
};

const updateHuman = async () => {
  await Store.Update('humans', user.value.human);
};

const update = async () => {
  await Store.Update('users', user.value);
};

const load = async () => {
  await Store.Get("users", Router.Id());
  mounted.value = true;
  return;
};

const remove = async () => {
  ElMessageBox.confirm('Вы уверены, что хотите удалить?', {
    distinguishCancelAndClose: true,
    confirmButtonText: 'Удалить',
    cancelButtonText: 'Отмена',
  }).then(async () => {
    await Provider.store.dispatch('users/remove', Provider.route().params['id']);
    await Provider.router.push('/admin/users');
  });
};

Hooks.onBeforeMount(load, {
  adminHeader: {
    title: computed(() => (Provider.route().params['id'] ? user.value.name : 'Добавить')),
    showBackButton: true,
    buttons: [{ text: 'Удалить', type: 'warning-button', action: remove }],
  },
});
// Hooks.onBeforeRouteLeave();
</script>

<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.background-with-color {
  background: grey
}

.field {
  width: 100%;
  height: 100%;
  background: red;
  padding: 10px;
}

.tab {
  font-size: 12px;
  text-transform: uppercase;
  color: #b0a4c0;
  border: 1px solid #999999;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */

  background: #f5f5f5;
  margin: -0.5px;
}

.tab:hover {
  background: $secondary-background;
}

.selected-tab {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: $site_dark_gray;
  position: relative;
  border: 1px solid #343d5c;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */

  background: $secondary-background;
  margin: -0.5px;
  z-index: 1;
}
</style>
