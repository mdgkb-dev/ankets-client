<template>
  <!-- <MenuContainer v-if="mounted" min-menu-item-width="160px" background="#DFF2F8"> -->
  <!-- <template #body> -->
  <div>
    <PInput v-model="user.human.surname" />
    <PInput v-model="user.human.name" />
    <PInput v-model="user.human.patronymic" />
  </div>
  <div>
    <PInputData v-model="user.human.dateBirth" />
  </div>
  <div>
    <PInputData v-model="user.human.dateBirth" />
  </div>
  <div>
    <PInput v-model="user.email" />
    <PInput v-model="user.phone" />
  </div>
  <div>
    <PInput v-model="user.inn" />
    <PInput v-model="user.snils" />
  </div>
  <div>
    <PInput v-model="user.passportNum" />
    <PInput v-model="user.passportSeria" />
    <PInput v-model="user.passportDivision" />
    <PInput v-model="user.passportDivisionCode" />
    <PInput v-model="user.passportCitzenship" />
  </div>
  <!-- </template> -->
  <!-- </MenuContainer> -->
</template>

<script setup lang="ts">
import AdminUserPageInfo from './AdminUserPageInfo.vue';
import PInput from '@/services/components/PInput.vue';

const mounted = ref(false);
const user: Ref<User> = Store.Item('users');

const components = {
  AdminUserPageInfo: AdminUserPageInfo,
};

const load = async () => {
  await Provider.loadItem();
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
  background: $custom-background;
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

  background: $custom-background;
  margin: -0.5px;
  z-index: 1;
}
</style>
