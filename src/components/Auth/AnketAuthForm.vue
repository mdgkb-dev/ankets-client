<template>
  <div class="modal-card">
    <StringItem custom-class="base-title" string="Авторизация" font-weight="bold" />
    <div class="modal-body">
      <PInput v-if="form.email.show(form.status)" v-model="form.email.email" placeholder="Email"
        margin="40px auto 0 auto">
        <IconUser />
      </PInput>
      <PInput password v-if="form.password.show(form.status)" v-model="form.password.password" placeholder="Пароль"
        margin="10px auto 0 auto">
        <IconPassword />
        <template #right>
          <!-- <StringItem custom-class="help-string" string="Забыли пароль?" @click="restore" /> -->
        </template>
      </PInput>
      <!-- <PCheckBox v-model="check" label="Запомнить пароль" width="24px" height="24px" font-size="12px"> -->
      <!--   <IconAnketsSwitch :switch-position="check" margin="12px 10px 12px 0" hover-color="#343E5C" size="22px" /> -->
      <!-- </PCheckBox> -->
      <PButton v-for="b in buttons" :key="b.label" :text="b.label" skin="royal" type="blue"
        @click="authButtonClick(b)" />
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

import AuthStatuses from '@/services/interfaces/AuthStatuses';
import AuthButton from '@/services/classes/AuthButton'
import AuthForm from '@/services/classes/AuthForm';
import PInput from '@/services/components/PInput.vue';
import IconUser from '@/components/Icons/IconUser.vue';
import IconPassword from '@/components/Icons/IconPassword.vue';
import PCheckBox from '@/services/components/PCheckBox.vue';
import IconAnketsSwitch from '@/components/Icons/IconAnketsSwitch.vue';
import StringItem from '@/services/components/StringItem.vue';
import PButton from '@/services/components/PButton.vue';

const emits = defineEmits(['action']);
const check = ref(false);
const switchPosition = ref(false);
const form: ComputedRef<AuthForm> = Store.Item('auth', 'form');
form.value.restrictRegister = props.restrictRegister

const buttons = computed(() => {
  if (form.value.status === AuthStatuses.Login) {
    return [AuthButton.Login(true)]
  }
  if (form.value.status === AuthStatuses.Restore) {
    return [AuthButton.Restore()]
  }
  return []
});
const auth: ComputedRef<AuthForm> = Store.Item('auth', 'auth');

// const emailRef = ref();
// const passwordRef = ref();



// const emits = defineEmits(['action']);
// const buttons = computed(() => form.value.getAuthButtons());

// const registration = () => {
//   form.value.reset();
//   form.value.setStatus(AuthStatuses.Login);
// };

const login = () => {
  form.value.reset();

};

const restore = async () => {
  form.value.setStatus(AuthStatuses.Restore)

};

const refresh = async () => {
  form.value.reset();
  await Provider.router.push('/main');
  auth.value.logout();
};

const authButtonClick = async (authButton: AuthButton): Promise<void> => {
  console.log('click')
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
    await Store.Dispatch(`auth/${form.value.getAction()}`);
    Message.Success("Вы успешно вошли в систему");
    switch (form.value.status) {
      case AuthStatuses.Login:
        login();
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
  } catch (error) {
    console.log("1")
    authButton.on();
    return;
  }
};

onBeforeUnmount(() => {
  form.value.reset;
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/base-style.scss';

.modal-card {
  max-width: 760px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  margin: 238px auto 0 auto;
  padding: 60px 20px;
  box-sizing: border-box;
}

.base-title {
  margin: 0 auto;
  padding: 0 0 20px 0;
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
</style>
