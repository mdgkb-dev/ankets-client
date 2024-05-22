<template>
  <div class="modal-card">
    <StringItem custom-class="base-title" :string="title" font-weight="bold" />
    <div class="modal-body">
        <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import StringItem from '@/services/components/StringItem.vue';
import { v4 as uuidv4 } from 'uuid';
import { computed, defineComponent, onBeforeMount, PropType, Ref, ref, withDirectives } from 'vue';


export default defineComponent({
  name: 'ModalCard',
  props: {
    title: {
      type: String as PropType<string>,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';


.modal-card {
  max-width: 760px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 60px 20px;
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
</style>
