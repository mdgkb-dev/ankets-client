<template>
  <div class="check-line">
    <label class="check-field__label" :style="{ fontSize: fontSize}">
      <input class="check-field__input" type="checkbox" v-model="model">
      <svg 
        v-if="!model" 
        class="icon-check"
        :style="{ width: width, height: height }" 
        @click="ToggleOn=true"
      >
        <use xlink:href="#check_off"></use>
      </svg>
      <svg 
        v-if="model" 
        class="icon-check"
        :style="{ width: width, height: height }" 
        @click="ToggleOn=false"
      >
        <use xlink:href="#check_on"></use>
      </svg>
        {{  label }}
    </label>
  </div>

  <svg width="0" height="0" class="hidden">
    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" id="check_off">
      <circle cx="21" cy="21" r="12" stroke-width="2"></circle>
    </symbol>

    <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" id="check_on">
      <circle cx="21" cy="21" r="12" stroke-width="2"></circle>
      <path d="M20.7081 28L12 18.6076L13.251 17.2601L20.7081 25.3032L36.7507 8L38 9.34744L20.7081 28Z" fill="#5F6A99"></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
const ToggleOn = ref(false);
const model = defineModel();
const props = defineProps({
  width: { type: String as PropType<string>, default: '32px' },
  height: { type: String as PropType<string>, default: '32px' },
  label: { type: String as PropType<string>, default: 'label' },
  fontSize: { type: String as PropType<string>, default: '14px' },
});
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/elements/base-style.scss';

  .hidden { display: none }

  .icon-check {
    fill:#5F6A99;
    stroke: #5F6A99;
    cursor: pointer;
    margin: 10px 10px 10px 0;
  }

  .icon-check:hover {
    fill:#343E5C;
    stroke: #343E5C;
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
    // height: 40px;
  }

  .check-field__input {
    display: none;
  }

  .check-field__label {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 12px;
    font-family: Gilroy, Arial, Helvetica, sans-serif;
    color: #5F6A99;
  }

  // .custom-checkbox {
  //   position: absolute;
  //   z-index: -1;
  //   opacity: 0;
  // }

//   .custom-checkbox+label {
//     display: inline-flex;
//     align-items: center;
//     user-select: none;
//   }
//   .custom-checkbox+label::before {
//     content: '';
//     display: inline-block;
//     width: 1em;
//     height: 1em;
//     flex-shrink: 0;
//     flex-grow: 0;
//     border: 1px solid #adb5bd;
//     border-radius: 0.25em;
//     margin-right: 0.5em;
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-size: 50% 50%;
//   }

//   .custom-checkbox:checked+label::before {
//     border-color: #0b76ef;
//     background-color: #0b76ef;
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
//   }


//   *{
//   user-select: none;
// }
// .filter__parametr{
//   display: flex;
//   width:300px;
//   flex-wrap: wrap;
// }
// .filter__block{
//   width:150px;
//   border:1px solid transparent;
//   box-sizing:border-box;
//   position: relative;
// }
// .bl{
//   border:3px solid red;
//   width:18px;
//   height:18px;
//   display:inline-block;
//   vartical-align: middle;
//   transform:translateY(3px);
// }
// #check{
//   display:inline-block;
//   vertical-align:middle;
//   position: absolute;
//   left:0;
//   top:1px;
//   transform:translate(33%,35%);
//   opacity:0;
// }
// input{
//     opacity: 1;
// }
// input[type="checkbox"]:checked~ .bl > #check{
//   opacity:1 !important;

// }
// .filter__title {
//   font-size: 18px;
//   line-height: 1.6;
//   border-bottom: 2px solid #c3c3c3;
//   color: #888;
//   text-transform: uppercase;
//   padding-top: 20px;
//   padding-bottom: 10px; }

// .filter__text {
//   font-size: 16px;
//   line-height: 1.8;
//   text-transform: uppercase;
//   color: #888; }

// .filter__block {
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   -webkit-align-items: center;
//       -ms-flex-align: center;
//           align-items: center; }
//   .filter__block input {
//     width: 20px;
//     height: 20px;
//     border: 5px solid #ababab;
//     -webkit-border-radius: 5px;
//             border-radius: 5px;
//     margin-right: 10px; }
//   .filter__block label {
//     font-size: 16px;
//     line-height: 1.8;
//     color: #888; }
</style>
