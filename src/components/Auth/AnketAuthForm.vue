<template>
  <div class="modal-card">
    <StringItem custom-class="base-title" string="Авторизация" font-weight="bold" />
    <div class="modal-body">
      <PInput placeholder="Имя пользователя" margin="40px auto 0 auto" ><IconUser /></PInput>
      <PInput placeholder="Пароль" margin="10px auto 0 auto"><IconPassword />
        <template #right >
          <StringItem custom-class="help-string" string="Забыли пароль?"/>
        </template>
      </PInput>
      <PCheckBox v-model="check" label="Запомнить пароль" width="24px" height="24px" font-size="12px">
        <IconAnketsSwitch :switch-position="check" margin="12px 10px 12px 0" hover-color="#343E5C" size="22px"/>
      </PCheckBox>
      <PButton text="Войти" button-class="base-button" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  restrictRegister: {
    type: Boolean as PropType<boolean>,
    default: false
  },
});

// import AuthButton from '@/services/classes/AuthButton';
import AuthForm from '@/services/classes/AuthForm';
// import Message from '@/services/classes/Message';
// import Provider from '@/services/Provider/Provider';
import PInput from '@/services/components/PInput copy.vue';
import IconUser from '@/components/Icons/IconUser.vue';
import IconPassword from '@/components/Icons/IconPassword.vue';
import PCheckBox from '@/services/components/PCheckBox.vue';
import IconAnketsSwitch from '@/components/Icons/IconAnketsSwitch.vue';

// import AuthStatuses from '@/services/interfaces/AuthStatuses.ts';
import StringItem from '@/services/components/StringItem.vue';
import PButton from '@/services/components/PButton.vue';

const check = ref(false);
const switchPosition = ref(false);
const form: ComputedRef<AuthForm> = Store.Item('auth', 'form');
form.value.restrictRegister = props.restrictRegister

const auth: ComputedRef<AuthForm> = Store.Item('auth', 'auth');

// const emailRef = ref();
// const passwordRef = ref();



// const emits = defineEmits(['action']);
// const buttons = computed(() => form.value.getAuthButtons());

// const registration = () => {
//   form.value.reset();
//   form.value.setStatus(AuthStatuses.Login);
// };

// const login = () => {
//   form.value.reset();
// };

// const restore = async () => {
//   form.value.reset();
//   await Provider.router.push('/main');
// };

// const refresh = async () => {
//   form.value.reset();
//   await Provider.router.push('/main');
//   auth.value.logout();
// };

// const authButtonClick = async (authButton: AuthButton): Promise<void> => {
//   authButton.off();
//   if (!authButton.isSubmit) {
//     authButton.on();
//     return form.value.setStatus(authButton.getStatus());
//   }

//   const errors = form.value.getErrors();
//   if (errors.length > 0) {
//     Message.Error(errors.join(', '));
//     authButton.on();
//     return;
//   }

//   try {
//     Store.Dispatch(`auth/${form.value.getAction()}`);
//     Message.Success(form.value.getSuccessMessage());
//   } catch (error) {
//     return;
//   }
//   switch (form.value.status) {
//     case AuthStatuses.Login:
//       login();
//       break;

//     case AuthStatuses.Register:
//       registration();
//       break;

//     case AuthStatuses.Restore:
//       await restore();
//       break;

//     case AuthStatuses.Refresh:
//       await refresh();
//       break;
//     default:
//       break;
//   }
//   authButton.on();
//   emits('action');
// };

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

@import '@/assets/styles/base-style.scss';

.modal-card {
  max-width: 760px;
  height: 424px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  margin: 238px auto 0 auto;
  padding: 0 30px;
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
