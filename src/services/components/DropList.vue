<template>
  <div class="drop-item">
    <div class="drop-item-name" @click="stateСhange;">
      <StringItem font-weight="bold" :string="name" justify-content="left" width="auto" margin="0 5px 0 0" padding="6px 0" />
      <div :style="{ transform: change ? '' : 'rotate(-90deg)' }"><IconArrowDrop size="12px" /></div>
    </div>
    <div v-if="change" class="drop-item-list">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: { type: String, default: 'Name' },
  rolledUp: { type: Boolean, default: true }, // начальное состояние списка: свернут или развернут
});

const change: Ref<boolean> = ref(props.rolledUp);

const stateСhange = async () => {
  change.value = !change.value;
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';
.drop-item-name {
  display: flex;
  justify-content: left;
  align-items: center;
  transition: 0.3s;
}

.drop-item-list {
  transition: 0.3s;
}
</style>
