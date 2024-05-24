<template>
  <div class="bg">
    <InfoBlock>
      <template #foto>
        <div class="foto">
          <div class="f"></div>
        </div>
      </template>
      <template #header-info>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInput v-model="user.human.surname" placeholder="Фамилия" margin="0" @blur="updateHuman" />
          <PInput v-model="user.human.name" placeholder="Имя" margin="0" @blur="updateHuman" />
          <PInput v-model="user.human.patronymic" placeholder="Отчество" margin="0" @blur="updateHuman" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInputData v-model="user.human.dateBirth" margin="10px 0 0 0" @blur="updateHuman" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInput v-model="user.email" placeholder="Адрес эл.почты" margin="10px 0 0 0" @blur="update" />
          <PInput v-model="user.email" placeholder="Дополнительный адрес эл.почты" margin="10px 0 0 0" @blur="update" />
        </GridContainer>
      </template>
      <template #footer-info>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInput v-model="user.phone" placeholder="Рабочий телефон" margin="0" @blur="update" />
          <PInput v-model="user.phone" placeholder="Мобильный телефон" margin="0" @blur="update" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInput v-model="user.inn" label="ИИН" margin="20px 0 0 0" @blur="update" />
          <PInput v-model="user.snils" label="СНИЛС" margin="20px 0 0 0" @blur="update" />
        </GridContainer>
      </template>
    </InfoBlock>
    <InfoBlock>
      <template #header-info>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInput v-model="user.passportNum" label="Документ, удостоверяющий личность" placeholder="Паспорт"
            margin="10px 0 0 0" @blur="update" />
          <PInput v-model="user.passportNum" label="Номер" margin="10px 0 0 0" @blur="update" />
          <PInput v-model="user.passportSeria" label="Серия" margin="10px 0 0 0" @blur="update" />
        </GridContainer>
        <GridContainer grid-template-columns="repeat(auto-fit, minmax(280px, 1fr))" background="#ffffff"
          max-width="100%" gridGap="10px" margin="0 auto">
          <PInput v-model="user.passportDivision" label="Подразделение" margin="20px 0 0 0" @blur="update" />
          <PInput v-model="user.passportDivisionCode" label="Код" margin="20px 0 0 0" @blur="update" />
          <PInput v-model="user.passportCitzenship" label="Гражданство" margin="20px 0 0 0" @blur="update" />
        </GridContainer>
      </template>
    </InfoBlock>
  </div>
</template>

<script lang="ts" setup>
import User from '@/classes/User';
import InfoBlock from '@/components/Profile/InfoBlock.vue'
import StringItem from '@/services/components/StringItem.vue';
import PInput from '@/services/components/PInput.vue';
import PButton from '@/services/components/PButton.vue';
import PSelect from '@/services/components/PSelect.vue';
import IconJob from '@/components/Icons/IconJob.vue';
import IconDepartment from '@/components/Icons/IconDepartment.vue';

// const user: Ref<User> = ref(User.Create());

</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.bg {
  box-sizing: border-box;
  background: $secondary-background;
}
</style>
