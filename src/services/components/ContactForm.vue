<template>
  <div v-if="full" class="contact-container">
    <PInput v-model="contact.description" label="Описание" />
    <PInput v-model="contact.time" label="Время работы" />
    <PInput v-model="contact.latitude" label="Широта (для карты)" />
    <PInput v-model="contact.longitude" label="Долгота (для карты)" />
  </div>

  <div class="contact-container" :style="{ background: contact.phones.length ? '' : '#F9FAFB' }">
    <div class="bottom-buttons">
      <div class="title" :style="{ color: !contact.phones.length ? '#c4c4c4' : '#303133' }">Телефоны</div>
      <PButton class="admin-add" text="+ Добавить" @click="addPhone()" />
    </div>

    <div v-for="(phone, i) in contact.phones" :key="phone.id" class="contact-container-item">
      <PButton class="admin-del" text="Удалить" @click="removePhone(phone.id)" />
      <div class="list-number">
        {{ i + 1 }}
      </div>
      <PhoneForm v-model="contact.phones[i]" />
    </div>
  </div>

  <div class="contact-container" :style="{ background: contact.emails.length ? '' : '#F9FAFB' }">
    <div class="bottom-buttons">
      <div class="title" :style="{ color: !contact.emails.length ? '#c4c4c4' : '#303133' }">Электронная почта</div>
      <PButton class="admin-add" text="+ Добавить" @click="addEmail()" />
    </div>

    <div v-for="(email, i) in contact.emails" :key="email.id" class="contact-container-item">
      <PButton class="admin-del" text="Удалить" @click="removeEmail(email.id)" />
      <div class="list-number">
        {{ i + 1 }}
      </div>
      <EmailForm v-model="contact.emails[i]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Contact from '@/services/classes/Contact';
import EmailForm from '@/services/components/EmailForm.vue';
import PhoneForm from '@/services/components/PhoneForm.vue';
const contact: Ref<Contact> = defineModel<Contact>() as Ref<Contact>;

defineProps({
  // contact: {
  //   type: Object as PropType<Contact>,
  //   required: true,
  // },
  full: {
    type: Boolean,
    default: false,
  },
});

const addEmail = async () => {
  const item = contact.value.addEmail();
  await EmailsStore.Create(item);
};

const removeEmail = async (id: string | undefined) => {
  contact.value.removeEmail(id as string);
  await EmailsStore.Remove(id);
};

const addPhone = async () => {
  const item = contact.value.addPhone();
  await PhonesStore.Create(item);
};

const removePhone = async (id: string | undefined) => {
  contact.value.removePhone(id as string);
  await PhonesStore.Remove(id);
};
</script>

<style lang="scss" scoped>
@import '@/services/assets/styles/index.scss';

.admin-add {
  border: none;
  background: inherit;
  color: #00b5a4;
  transition: 0.3s;
  cursor: pointer;
}

.admin-add:hover {
  color: darken($color: #00b5a4, $amount: 10%);
}

.admin-del {
  top: 23px;
  right: 36px;
  border: none;
  background: inherit;
  color: #a3a9be;
  transition: 0.3s;
  cursor: pointer;
}

.admin-del:hover {
  color: darken($color: #cf3d19, $amount: 5%);
}

.bottom-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
}

.contact-container {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 0 10px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  margin: 0px 0px 20px 0px;
  background: #dff2f8;
}

.contact-container-item {
  position: relative;
  width: calc(100% - 42px);
  margin: 0px 10px 20px 10px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  padding: 12px 10px;
  background: #f9fafb;
}

.list-number {
  position: absolute;
  top: 20px;
  right: 10px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #1979cf;
  border-radius: 20px;
}

.title {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #c4c4c4;
  margin: 10px;
}

:deep(.el-form-item__content) {
  width: 100%;
}

:deep(.el-input__inner) {
  border-radius: 40px;
  padding-left: 25px;
  height: 32px;
  width: 100%;
  display: flex;
  font-family: Comfortaa, Arial, Helvetica, sans-serif;
  font-size: 15px;
}

:deep(.el-input__inner::placeholder) {
  color: #4a4a4a;
}

:deep(.el-select .el-input .el-select__caret) {
  color: #343e5c;
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
}

.el-select {
  width: 100%;
}

:deep(.el-input__prefix) {
  left: 230px;
  top: -3px;
}

:deep(.el-date-editor.el-input, .el-date-editor.el-input__inner) {
  width: 100%;
}

:deep(.el-input__icon) {
  color: #343e5c;
}

:deep(.el-input__suffix) {
  top: -3px;
}

:deep(.el-form-item__label) {
  font-size: 12px;
  color: #a3a9be;
  padding: 0 !important;
  text-transform: uppercase;
  margin-left: 5px;
  height: 30px;
}

:deep(.el-input__prefix) {
  left: auto;
  right: 10px;
}

:deep(.el-form-item) {
  margin-bottom: 10px;
}
</style>
