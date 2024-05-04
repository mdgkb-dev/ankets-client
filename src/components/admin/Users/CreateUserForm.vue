<template>
  <!-- <div class="modal-card">
    <StringItem custom-class="base-title" string="Авторизация" font-weight="bold" />
    <div class="modal-body">
      <PInput placeholder="ФИО" margin="40px auto 0 auto" ><IconUser /></PInput>

      <PButton text="Назначить" button-class="base-button" />
    </div>
  </div> -->
  <InfoItem
    title="email"
    icon="edit-title"
    :with-open-window="false"
    :with-hover="false"
    border-color="#ffffff"
    base-box-margin="0 0 15px 0"
    padding="0"
    width="100%"
  >
    <el-input v-model="user.userAccount.email" />
  </InfoItem>
  <Button button-class="save-button" text="Создать" @click="create" />
</template>

<script lang="ts" setup>
import User from '@/classes/User';

// import PInput from '@/services/components/PInput copy.vue';
// import IconUser from '@/components/Icons/IconUser.vue';
// import StringItem from '@/services/components/StringItem.vue';
// import PButton from '@/services/components/PButton.vue';

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

.save-button {
  width: 300px;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 0 auto;
  font-size: 14px;
}

.modal-card {
  max-width: 760px;
  height: 424px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  // margin: 238px auto 0 auto;
  // padding: 0 30px;
  box-sizing: border-box;
}

.base-title {
  margin: 0 auto;
  padding: 55px 0 20px 0;
  color: #5F6A99;
  font-size: 28px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #E3E7FB;
}

.modal-body {
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
}

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
}

.base-button:hover {
  background: lighten($color: #5E6CE7, $amount: 3%);
}
</style>
