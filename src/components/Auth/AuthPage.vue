<template>
  <div class="auth-container">
    <AnketAuthForm :restrict-register="true" @action="action" />
  </div>
</template>

<script lang="ts" setup>
import AnketAuthForm from '@/components/Auth/AnketAuthForm.vue';
const form: ComputedRef<AuthForm> = Store.Getters('auth/form');
const auth: ComputedRef<AuthForm> = Store.Getters('auth/auth');
const user = computed(() => auth.value.user.get());

const action = () => {
  if (user.value.role === 'expert') {
    Router.To("/profile/users-researches/" + user.value.id);
    return
  }
  if (user.value.role === 'admin') {
    Router.ToAdmin('/users');
    return
  }
};
</script>

<style scoped lang="scss">
.auth-container {
  width: 100%;
  height: 70vh;
}

.card-content {
  width: 60%;
  margin: 50px auto 65px auto;
}

.card-header {
  text-align: center;
}

.reg-item {
  margin-bottom: 0;
}

.warning {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: 1px solid #f56c6c;
  color: #f56c6c;
  background-color: lighten(#f56c6c, 25%);
  word-break: break-word;
}
</style>
