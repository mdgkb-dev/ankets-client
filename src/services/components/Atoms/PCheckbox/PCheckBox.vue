<template>
  <div class="check-line" :style="{ padding: padding, margin: margin }">
    <label class="check-field__label" :style="{ fontSize: fontSize }">
      <input v-model="model" class="check-field__input" type="checkbox" :value="value" />
      <div class="box" :style="{ width: size, height: size, borderRadius: borderRadius }">
        <div v-if="model" class="check-icon" :style="{ width: size, height: size }">
          <IconCheckDefault margin="auto" :size="size" />
          <!-- <slot /> -->
        </div>
      </div>

      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
const model = defineModel<boolean>();
const emits = defineEmits(['switchPosition']);
defineProps({
  label: { type: String, default: 'Label' },
  fontSize: { type: String, default: '14px' },
  value: { type: String },
  size: { type: String, default: '22px' },
  borderRadius: { type: String, default: '' },
  padding: { type: String, default: '' },
  margin: { type: String, default: '' },
});
emits('switchPosition', model);
</script>

<style scoped>
.check-line {
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 560px;
  width: 100%;
  display: flex;
  justify-content: left;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 0;
}

.box {
  position: relative;
  border: 1px solid;
  border-color: var(--checkbox-border-color);
  border-radius: var(--checkbox-border-radius-default);
  box-sizing: border-box;
  margin-right: 10px;
}

.check-icon {
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
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
  cursor: pointer;
}

.check-field__label:hover {
  color: var(--checkbox-border-color-hovered);
}

.check-field__label:hover > .box {
  border-color: var(--checkbox-border-color-hovered);
  color: var(--checkbox-border-color-hovered);
}

.check-field__input {
  display: none;
}
</style>
