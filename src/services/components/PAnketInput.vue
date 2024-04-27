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
      v-model="model">

    <div v-if="icon" class="icon-field" >
      <svg :class="iconClass">
        <use :xlink:href="'#' + icon"></use>
      </svg>
    </div>
    <div class="help-field">
      <slot name="help" />
    </div>
  </div>
  <div class="hidden"><component :is="iconComponent[icon]" /></div>
</template>

<script setup lang="ts">
import User from '@/services/assets/svg/User.svg';
import Password from '@/services/assets/svg/Password.svg';

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
  iconClass: { type: String as PropType<string>, required: false, default: '' },
  icon: { type: String as PropType<string>, required: false, default: '' },
});

const iconComponent = {
  'user': User,
  'password': Password,
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/elements/base-style.scss';

.hidden {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.help-field {
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

.user-icon {
  widows: 28px;
  height: 28px;
  fill: #5F6A99;
}

.password-icon {
  widows: 28px;
  height: 28px;
  stroke: #5F6A99;
  fill: #F5FAFF;
}

.icon-field {
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
  font-family: Comfortaa, Arial, Helvetica, sans-serif;
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
  // background-color: #fff;
  // border-color: #409eff;
  outline: 0;
  // box-shadow: 0 0 0 0.1rem rgba(64, 158, 255, 0.8);
  // box-shadow: rgb(25, 121, 207) 0px 0px 1px 1px;
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
</style>
