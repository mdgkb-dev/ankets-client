<template>
  <div class="text-field" :style="{margin: margin}" >
    <label v-if="label" class="text-field__label" :for="label">
      {{ label }}
    </label>
    <input 
      class="text-field__input" 
      type="text" :name="label" 
      :id="label" 
      :placeholder="placeholder" 
      :readonly="readonly"
      :disabled="disabled"
      v-model="model"
      :style="{ paddingLeft: left ? '60px' : '20px' }"
    >
    <div v-if="left" class="left-field" ><slot /></div>    
    <div v-if="right" class="right-field"><slot name="right" /></div>
  </div>
</template>

<script setup lang="ts">

const model = defineModel();

defineOptions({ inheritAttrs: false });

const props = defineProps({
  text: { type: String as PropType<string>, default: '', required: false },
  label: { type: String as PropType<string>, default: '', required: false },
  placeholder: { type: String as PropType<string>, default: '', required: false },
  value: { type: String as PropType<string>, default: '', required: false },
  readonly: { type: Boolean as PropType<Boolean>, default: false, required: false },
  disabled: { type: Boolean as PropType<Boolean>, default: false, required: false },
  margin: { type: String as PropType<string>, required: false, default: '' },
  left: { type: Boolean as PropType<Boolean>, default: false, required: false },
  right: { type: Boolean as PropType<Boolean>, default: false, required: false },
});

</script>

<style lang="scss" scoped>
@import '@/assets/styles/elements/base-style.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
}

.right-field {
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
  top: 0;
  right: 10px;
  height: 100%;
  width: auto;
  overflow: hidden;
}


.left-field {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 10px;
  height: 100%;
  width: 50px;
  overflow: hidden;
}

input[type='text'] {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  font-size: 16px;
}

.text-field {
  position:relative;
  max-width: 560px;
  border-radius: 5px;
  overflow: hidden;
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__input {
  display: block;
  width: 100%;
  max-width: 560px;
  height: 52px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: #5F6A99;
  background-color: #F5FAFF;
  background-clip: padding-box;
  border: none;
  margin: 0 auto;
  padding-left: 60px;
}

.text-field__input::placeholder {
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #5F6A99;
}

.text-field__input:focus {
  color: #5F6A99;
  outline: 0;
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
</style>
