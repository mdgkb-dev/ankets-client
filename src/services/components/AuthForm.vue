<template>
  <div class="auth-card">
    <StringItem custom-class="auth-title" string="Авторизация"/>
    <div class="auth-body">
      <PAnketInput placeholder="Имя пользователя" margin="40px auto 0 auto" icon="user" icon-class="user-icon" />
      <PAnketInput placeholder="Пароль" margin="10px auto 0 auto" icon="password" icon-class="password-icon" >
        <template #help >
          <StringItem custom-class="help-string" string="Забыли пароль?"/>
        </template>
      </PAnketInput>
      <div class="check-line">
        <svg v-if="!saveToggleOn" class="icon-check" @click="saveToggleOn=true">
          <use xlink:href="#check_off"></use>
        </svg>
        <svg v-if="saveToggleOn" class="icon-check" @click="saveToggleOn=false" >
          <use xlink:href="#check_on"></use>
        </svg>
        <StringItem custom-class="save-password" string="Запомнить пароль" justify-content="left"/>
      </div>
      <div class="check-line"><PButton text="Войти" button-class="auth-button"/></div>
    </div>

    <svg width="0" height="0" class="hidden">
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" id="check_off">
        <circle cx="21" cy="21" r="12" stroke-width="2"></circle>
      </symbol>

      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" id="check_on">
        <circle cx="21" cy="21" r="12" stroke-width="2"></circle>
        <path d="M20.7081 28L12 18.6076L13.251 17.2601L20.7081 25.3032L36.7507 8L38 9.34744L20.7081 28Z" fill="#5F6A99"></path>
      </symbol>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  restrictRegister: {
    type: Boolean as PropType<boolean>,
    default: false
  },
});

import AuthButton from '@/services/classes/AuthButton';
import AuthForm from '@/services/classes/AuthForm';
import Message from '@/services/classes/Message';
import Provider from '@/services/Provider/Provider';
import PAnketInput from '@/services/components/PAnketInput.vue'

import AuthStatuses from '../interfaces/AuthStatuses';
import StringItem from './StringItem.vue';
import PButton from './PButton.vue';

const form: ComputedRef<AuthForm> = Store.Item('auth', 'form');
form.value.restrictRegister = props.restrictRegister

const auth: ComputedRef<AuthForm> = Store.Item('auth', 'auth');

const saveToggleOn = ref(false);

const emailRef = ref();
const passwordRef = ref();

const emits = defineEmits(['action']);
const buttons = computed(() => form.value.getAuthButtons());

const registration = () => {
  form.value.reset();
  form.value.setStatus(AuthStatuses.Login);
};

const login = () => {
  form.value.reset();
};

const restore = async () => {
  form.value.reset();
  await Provider.router.push('/main');
};

const refresh = async () => {
  form.value.reset();
  await Provider.router.push('/main');
  auth.value.logout();
};

const authButtonClick = async (authButton: AuthButton): Promise<void> => {
  authButton.off();
  if (!authButton.isSubmit) {
    authButton.on();
    return form.value.setStatus(authButton.getStatus());
  }

  const errors = form.value.getErrors();
  if (errors.length > 0) {
    Message.Error(errors.join(', '));
    authButton.on();
    return;
  }

  try {
    Store.Dispatch(`auth/${form.value.getAction()}`);
    Message.Success(form.value.getSuccessMessage());
  } catch (error) {
    return;
  }
  switch (form.value.status) {
    case AuthStatuses.Login:
      login();
      break;

    case AuthStatuses.Register:
      registration();
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
  authButton.on();
  emits('action');
};

onBeforeUnmount(() => {
  form.value.reset;
});
const focus = () => {
  if (form.value.isRefresh()) {
    passwordRef.value.focus();
    return;
  }
  emailRef.value.focus();
};
watch(
  () => form.value.status,
  () => {
    focus();
  }
);
onMounted(() => {
  focus();
});
</script>

<style scoped lang="scss">

.save-password {
  color: #5F6A99;
  font-size: 12px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  margin: 0 0 0 7px;
}

.help-string {
  color: #5F6A99;
  font-size: 16px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  opacity: 0.4;
  margin-right: 5px;
  cursor: pointer;
}

.help-string:hover {
  color: #5F6A99;
  font-size: 16px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  opacity: 1;
}

.check-line {
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 560px;
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 0 auto;
  // height: 40px;
}

.icon-check {
  width: 24px;
  height: 24px;
  fill:#5F6A99;
  stroke: #5F6A99;
  cursor: pointer;
  margin: 10px 0;
}

.icon-check:hover {
  fill:#343E5C;
  stroke: #343E5C;
}

.hidden {
  display: none;
}

.custom-input {
  background: red;
}

.auth-title {
  margin: 0 auto;
  padding: 55px 0 20px 0;
  color: #5F6A99;
  font-size: 28px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #E3E7FB;
}

.wer {
  height: 20px;
  width: 20px;
  background: red;
}

.auth-card {
  max-width: 760px;
  height: 424px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  margin: 238px auto 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
}

.btn-group {
  display: block;
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

.auth-card-header {
  width: 100%;
  font-size: 20px;
  color: #409efe;
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
