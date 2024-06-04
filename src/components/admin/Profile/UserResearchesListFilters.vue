<template>
  <div class="filters" v-if="mounted">
    <GridContainer max-width="100%" grid-gap="10px" grid-template-columns="repeat(auto-fit, minmax(200px, 1fr))"
      margin="0">
      <FilterSelect default-label="Выберите пользователя" :models="getUsersModels()" @load="$emit('load')" />
      <FilterSelect default-label="Выберите анкету" :models="getResearchesModels()" @load="$emit('load')" />
    </GridContainer>
  </div>
</template>

<script lang="ts" setup>
import UserResearchFiltersLib from '@/libs/filters/UserResearchesFiltersLib'
// import Research from '@/classes/Research'
defineEmits(['load']);

const researches = Store.Items('researches');
const users = Store.Items('users');

const auth: Ref<Auth> = Store.Getters('auth/auth');
const user = computed(() => auth.value.user.get())

const mounted = ref(false);

const loadUsers = async () => {
  await Store.FTSP('users', { ftsp: new FTSP() });
  await Store.FTSP('researches', { ftsp: new FTSP() });
  mounted.value = true;
};



onBeforeMount(async () => {
  await loadUsers()
});

const getUsersModels = (): Promise<void> => {
  const models = users.value.map((u: User) => {
    const model = UserResearchFiltersLib.byUserId(u.id)
    model.label = u.userAccount.email
    return model
  })
  return models
};
const getResearchesModels = (): Promise<void> => {
  const models = researches.value.map((i: Research) => {
    const model = UserResearchFiltersLib.byResearchId(i.id)
    model.label = i.name
    return model
  })
  return models
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.filters {
  display: flex;
  justify-content: left;
  align-items: center;
  background: $royal_blue;
  padding: 10px;
}

.opt {
  min-height: 60px;
  background: red;
}
</style>
