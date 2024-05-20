<template>
  <div class="bg">
  <!-- <StringItem string="Мой профиль > Общая информация" font-weight="bold" font-size="28px" justify-content="left"/> -->
    <InfoBlock>
      инфо
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
