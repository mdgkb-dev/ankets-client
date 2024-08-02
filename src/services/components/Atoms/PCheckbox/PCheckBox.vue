<template>
  <div class="check-line">
    <input v-model="model" class="check-field__input" type="checkbox" :value="value" />
    <div class="pointer" :style="{}">
      <div class="box" :style="{ width: size, height: size, borderRadius: borderRadius }"></div>
      <div class="check-icon" :style="{ width: size, height: size }">
        <IconSwitchDefault size="px" margin="auto" :switchPosition="model" />
        <slot />
      </div>
    </div>
    <label class="check-field__label" :style="{ fontSize: fontSize }">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<boolean>();
const emits = defineEmits(['switchPosition']);
defineProps({
  label: { type: String, default: 'label' },
  fontSize: { type: String, default: '14px' },
  value: { type: String },
  size: { type: String, default: '18px' },
  borderRadius: { type: String, default: '' },
  padding: { type: String, default: '' },
});
emits('switchPosition', model);
</script>

<style scoped>
.check-line {
  box-sizing: border-box;
  padding: 10px 0;
}

.pointer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  height: auto;
  margin: 0 0 0 20px;
}

.box {
  box-sizing: border-box;
  position: relative;
  border: 1px solid;
  border-color: var(--checkbox-border-color);
  border-radius: var(--checkbox-border-radius-default);
  overflow: hidden;
  background: red;
}

.check-icon {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: aqua;
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
}

.check-field__label {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: var(--base-font);
  color: var(--checkbox-label-color);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  margin: 0 0 0 10px;
}

/* .check-field__input {
  display: none;
} */
</style>
