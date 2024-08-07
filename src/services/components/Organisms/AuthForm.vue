<template>
  <div class="auth-card" :style="{ width: width, margin: margin }">
    <div class="auth-card-header">
      {{ PHelp.AuthForm.GetTitle() }}
    </div>
    <div>
      <PInput
        v-if="PHelp.AuthForm.Email().show(PHelp.AuthForm.Status())"
        v-model="PHelp.AuthForm.Email().email"
        label="Введите email"
        placeholder="Email"
      />
      <PInput
        v-if="PHelp.AuthForm.Password().show(PHelp.AuthForm.Status())"
        v-model="PHelp.AuthForm.Password().password"
        label="Введите пароль"
        placeholder="Пароль"
      />
      <PInput
        v-if="PHelp.AuthForm.PasswordRepeat().show(PHelp.AuthForm.Status())"
        v-model="PHelp.AuthForm.PasswordRepeat().text"
        prop="email"
        label="Введите email"
        placeholder="Email"
      />
      <div class="btn-group">
        <PButton
          v-for="btn in buttons"
          :key="btn.getStatus()"
          :disabled="blockBtn"
          type="primary"
          skin="base"
          :text="btn.label"
          :color="btn.isSubmit ? 'blue' : 'grey'"
          margin="10px 0 0 0"
          @click="authButtonClick(btn)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AuthButton from '@/services/classes/AuthButton';
import AuthStatuses from '@/services/interfaces/AuthStatuses';

const props = defineProps({
  width: {
    type: String as PropType<string>,
    default: '300px',
  },
  margin: {
    type: String as PropType<string>,
    default: 'auto',
  },
});

const form = PHelp.AuthForm;
const blockBtn = ref(false);
// const emailRef = ref();
// const passwordRef = ref();

const emits = defineEmits(['action']);
const buttons = computed(() => form.GetAuthButtons());

const registration = async () => {
  form.Reset();
  await AuthStore.Register();
  form.SetStatus(AuthStatuses.Login);
};

const login = async () => {
  await AuthStore.Login();
  form.Reset();
};

const restore = async () => {
  form.Reset();
  await Router.To('/');
};

const refresh = async () => {
  form.Reset();
  await Router.To('/');
  PHelp.Auth.Logout();
};

const authButtonClick = async (authButton: AuthButton): Promise<void> => {
  // authButton.off();
  blockBtn.value = true;
  if (!authButton.isSubmit) {
    // authButton.on();
    blockBtn.value = false;
    return form.SetStatus(authButton.getStatus());
  }

  const errors = form.GetErrors();
  if (errors.length > 0) {
    PHelp.Notification.Error(errors.join(', '));
    blockBtn.value = false;
    return;
  }

  try {
    PHelp.Loading.Show();
    // await Store.Dispatch(`auth/${form.GetAction()}`);
    PHelp.Loading.Hide();

    PHelp.Notification.Success(form.GetSuccessMessage());
  } catch (error) {
    PHelp.Loading.Hide();
    blockBtn.value = false;
    return;
  }

  switch (form.Status()) {
    case AuthStatuses.Login:
      await login();
      break;

    case AuthStatuses.Register:
      await registration();
      break;

    case AuthStatuses.Restore:
      await restore();
      break;

    case AuthStatuses.Refresh:
      await refresh();
      break;
    default:
      break;
  }
  blockBtn.value = false;
  authButton.on();
  emits('action');
};

onBeforeUnmount(() => {
  form.Reset();
});
</script>

<style scoped lang="scss">
.wer {
  height: 20px;
  width: 20px;
  background: red;
}

.btn-group {
  display: block;
  margin: 40px 0 0 0;
}

.btn {
  color: #409efe;
  border: none;
  width: 100%;
  height: 40px;
  text-transform: none;
  // text-transform: uppercase !important;
}

.btn:hover {
  box-shadow: none;
  color: #006fe1;
}

.btn-active {
  background: #ddf2f9;
  color: #409efe;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 40px 0 10px 0;
}

.btn-active:hover {
  box-shadow: none;
  background: #409efe;
  color: #ddf2f9;
}

.auth-card {
  margin: auto;
}

.auth-card-header {
  width: 100%;
  font-size: 20px;
  font-family: var(--base-font);
  color: var(--font-primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  // text-transform: uppercase;
  word-wrap: break-word;
  word-break: break-all;
  margin-bottom: 20px;
}

:deep(.el-form--label-top .el-form-item__label) {
  padding: 0px;
}

:deep(.el-form-item) {
  margin-bottom: 10px;
}
</style>
