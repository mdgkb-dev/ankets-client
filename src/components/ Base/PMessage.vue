<template>
  <div
    class="message"
    :style="{
      background: status === 'success' ? '#C7ECEA' : '#ECC7C7',
      marginTop: showMessage ? '0px' : '-300px',
    }"
  >
    <div class="message-title">
      <StringItem :string="title" />
    </div>
    <div class="message-text">
      <StringItem :string="text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import StringItem from '@/services/components/StringItem.vue';

const props = defineProps({
  showMessage: { type: Boolean as PropType<string>, default: true, },
  status: { type: String as PropType<string>, default: 'success', },
  title: { type: String as PropType<string>, default: '', },
  text: { type: String as PropType<string>, default: '', },
});




</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.message {
  position: absolute;
  top: 6px;
  left: 50%;
  z-index: 9999;
  transform: translateX(-50%);
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid $base-font-color;
  min-height: 50px;
  max-width: 300px;
  transition: 0.3s;
}

.message-title {

}

.message-text {
  
}
</style>

