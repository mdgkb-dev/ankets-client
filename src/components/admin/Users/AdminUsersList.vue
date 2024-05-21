<template>
  <AdminListWrapper v-if="mounted" pagination show-header>
    <div class="scroll-block">
      <div class="user-count">Количество пользователей: {{ count }}</div>
      <div v-for="(user, i) in users" :key="user.id">
        <CollapseItem :is-collaps="false" padding="0 8px">
          <template #inside-title>
            <div class="flex-block" @click.prevent="() => undefined">
              <div class="item-flex">
                <div class="line-item-left">
                  <PButton :text="i + 1" button-class="number" />
                  <PButton text="Редактировать" button-class="number" @click="edit(user)" />
                  <ToggleInfoItem title="email" :content="user.userAccount.email"
                    @submit="updateUserAccount(user.userAccount)">
                    <el-input v-model="user.userAccount.email" />
                  </ToggleInfoItem>
                </div>

                <div class="line-item-right">
                  <ToggleInfoItem title="Должность" :content="user.position" @submit="updateUser(user)">
                    <el-input v-model="user.position" />
                  </ToggleInfoItem>
                </div>
              </div>
              <!-- <div class="item-flex">
                <ToggleInfoItem title="Подразделение" :content="user.division" @submit="updateUser(user)">
                  <el-input v-model="user.division" />
                </ToggleInfoItem>
              </div> -->
            </div>
          </template>
        </CollapseItem>
      </div>
    </div>
  </AdminListWrapper>
  <PModalWindow width="960px" top="10vh" :show="showAddModal" @close="showAddModal = false">
    <CreateUserForm @add="showAddModal = false" />
  </PModalWindow>
</template>

<script lang="ts" setup>
import User from '@/classes/User';
import PButton from '@/services/components/PButton.vue';
import PModalWindow from '@/services/components/PModalWindow.vue';
// import UsersSortsLib from '@/libs/sorts/UsersSortsLib';

const showAddModal: Ref<boolean> = ref(false);
const users: Ref<User[]> = Store.Items('users');
const count: Ref<number> = Store.Count('users');

const mounted = ref(false);

const loadUsers = async () => {
  await Store.FTSP('users');
  mounted.value = true;
};

const load = async () => {
  await Promise.all([loadUsers()]);
};

const addUser = async (): Promise<void> => {
  showAddModal.value = !showAddModal.value;
};

Hooks.onBeforeMount(load, {
  adminHeader: {
    title: 'Список пользователей',
    buttons: [{ text: 'Добавить', type: 'normal-button', action: addUser }],
  },
  pagination: { storeModule: 'users', action: 'ftsp' },
  // sortsLib: UsersSortsLib,
});
const updateUserAccount = async (item: UserAccount): Promise<void> => {
  await Store.Update('usersAccounts', item);
};
const updateUser = async (item: User): Promise<void> => {
  await Store.Update('users', item);
};
const edit = async (item: User): Promise<void> => {
  await Router.ToAdmin('users/' + item.id);
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 5px;
  overflow: hidden;
  background: $base-background;
  font-size: $base-font-large-size;
  font-family: $base-font;
  color: $base-font-color;
  margin-right: 8px;
  padding: 0;
}

.button {
  width: auto;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  font-size: 12px;

  &-filter {
    background: #ffffff;
  }

  &-download {
    background: #dff2f8;
  }
}

:deep(.button-register) {
  width: auto;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #ffffff;
  font-size: 12px;
}

:deep(.name-item) {
  margin: 0;
  width: auto;
  border-color: #ffffff;
  padding: 0;
}

.grid {
  grid-gap: 10px;
  margin: 0;
}

.plus-button {
  width: 100%;
  height: 34px;
  border-radius: 5px;
  color: #00bea5;
  background: #c1efeb;
}

.save-picker-button {
  width: 100%;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
}

.gender-button {
  width: 42px;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 2px 10px 0 0;
  font-size: 18px;
}

.save-button {
  width: 100%;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 2px 10px 0 0;
  font-size: 14px;
}

:deep(.edit-button) {
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
  margin-right: 10px;
}

:deep(.files-buttons) {
  width: auto;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
  font-size: 12px;

  &:hover {
    background: #dff2f8;
  }
}

.edv {
  font-size: 14px;
  padding: 0;
  margin: 0 5px 0 0;

  &-active {
    color: #b0a4c0;
  }
}

.user-name {
  color: #006bb4;
  font-size: 17px;
  min-width: 150px;
  width: 100%;
  padding: 0;
}

.hidden {
  display: none;
}

.scroll-block {
  height: 78vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 20px;
  background: $base-content-color;
}

.registers-tooltip {
  &:hover {
    cursor: pointer;
  }
}

.user-link {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.tag-link:hover {
  background-color: darken(white, 10%);
  cursor: pointer;
}

.flex-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

:deep(.edit-icon) {
  width: 28px;
  height: 28px;
  color: #006bb4;
}

.item-flex {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 0 0;
}

.item-flex:last-child {
  margin: 10px 0;
}

.line-item-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 10px;
  padding: 0;
}

.line-item-right {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  min-width: 210px;
  padding: 0;
}

:deep(.icon-plus) {
  fill: #00b5a4;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.icon-filter {
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #006bb4;
  fill: none;
}

.icon-del {
  width: 10px;
  height: 10px;
  cursor: pointer;
}

.user-count {
  color: $base-font-color;
  font-size: $base-font-size;
  font-family: $base-font;
}

:deep(.el-form-item) {
  margin: 8px 0 0 0;
}

@media (max-width: 1915px) {
  .flex-block {
    width: 100%;
    display: block;
    justify-content: space-between;
    align-items: center;
  }

  .line-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
  }

  .item-flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .item-flex:last-child {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 560px) {
  .line-item-left {
    margin: 10px 0;
  }

  .line-item-right {
    margin: 10px 0;
    justify-content: space-between;
  }

  .item-flex:first-child {
    display: block;
    width: 100%;
    margin: 0 0 10px 0;
  }
}
</style>
