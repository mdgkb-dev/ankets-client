<template>
  <div class="scroll-block">
    <InfoBlock>
      <template #foto>
        <div class="foto">
          <div class="f"></div>
        </div>
      </template>
      <template #header-info>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInput v-model="user.human.surname" placeholder="Фамилия" margin="0" @blur="updateHuman" />
          <PInput v-model="user.human.name" placeholder="Имя" margin="0" @blur="updateHuman" />
          <PInput v-model="user.human.patronymic" placeholder="Отчество" margin="0" @blur="updateHuman" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInputData v-model="user.human.dateBirth" margin="10px 0 0 0" @blur="updateHuman" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInput v-model="user.email" placeholder="Адрес эл.почты" margin="10px 0 0 0" @blur="update" />
          <PInput v-model="user.email" placeholder="Дополнительный адрес эл.почты" margin="10px 0 0 0" @blur="update" />
        </GridContainer>
      </template>
      <template #footer-info>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInput v-model="user.phone" placeholder="Рабочий телефон" margin="10px 0 0 0" @blur="update" />
          <PInput v-model="user.phone" placeholder="Мобильный телефон" margin="10px 0 0 0" @blur="update" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInput v-model="user.inn" label="ИИН" margin="20px 0 0 0" @blur="update" />
          <PInput v-model="user.snils" label="СНИЛС" margin="20px 0 0 0" @blur="update" />
        </GridContainer>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #header-info>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInput readonly label="Документ, удостоверяющий личность" placeholder="Паспорт" margin="10px 0 0 0"
            @blur="update" />
          <PInput v-model="user.passportNum" label="Номер" margin="10px 0 0 0" @blur="update" />
          <PInput v-model="user.passportSeria" label="Серия" margin="10px 0 0 0" @blur="update" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff" max-width="100%"
          gridGap="10px" margin="0 auto">
          <PInput v-model="user.passportDivision" label="Подразделение" margin="20px 0 0 0" @blur="update" />
          <PInput v-model="user.passportDivisionCode" label="Код" margin="20px 0 0 0" @blur="update" />
          <PInput v-model="user.passportCitzenship" label="Гражданство" margin="20px 0 0 0" @blur="update" />
        </GridContainer>
      </template>
    </InfoBlock>
  </div>
</template>

<script setup lang="ts">
import AdminUserPageInfo from './AdminUserPageInfo.vue';
import PInput from '@/services/components/PInput.vue';
import InfoBlock from '@/components/Profile/InfoBlock.vue'

import ModalCard from '@/components/Base/ModalCard.vue';
import GridContainer from '@/services/components/GridContainer.vue';
const mounted = ref(false);
const user: Ref<User> = Store.Item('users');

const components = {
  AdminUserPageInfo: AdminUserPageInfo,
};

const updateHuman = async () => {
  await Store.Update('humans', user.value.human);
};

const updateUserAccount = async () => {
  await Store.Update('usersAccounts', user.value.userAccount);
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

.foto {
  min-width: 186px;
  max-width: 186px;
  min-height: 186px;
  max-height: 186px;
}

.f {
  min-width: 150px;
  max-width: 150px;
  min-height: 150px;
  max-height: 150px;
  background: #D9D9D9;
  border-radius: 15px;
}


.header-block {
  display: flex;
  justify-content: left;
}

.scroll-block {
  height: 84vh;
  overflow-x: auto;
}

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
