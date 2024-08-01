<template>
  <div style="display: flex">
    <div>
      <AdminFormSections />
    </div>
    <div>
      <FieldEdit />
    </div>
  </div>
</template>

<script setup lang="ts">
import Form from '@/classes/Form';
import Hooks from '@/services/Hooks/Hooks';

const form: Form = FormsStore.Item();

const load = async () => {
  await FormsStore.Get();
  PHelp.AdminUI.Head.Set(form.name, []);
  return;
};

Hooks.onBeforeMount(load);
// Hooks.onBeforeRouteLeave();
</script>

<style lang="scss" scoped>
@import '@/assets/elements/collapse.scss';
@import '@/assets/styles/base-style.scss';

.field {
  width: 100%;
  height: 100%;
  background: red;
  padding: 10px;
}

.tab {
  font-size: 12px;
  text-transform: uppercase;
  color: #b0a4c0;
  border: 1px solid #999999;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */

  background: #f5f5f5;
  margin: -0.5px;
}

.tab:hover {
  background: $secondary-background;
}

.selected-tab {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: $site_dark_gray;
  position: relative;
  border: 1px solid #343d5c;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  -webkit-user-select: none;
  /* Safari */
  -ms-user-select: none;
  /* IE 10 and IE 11 */
  user-select: none;
  /* Standard syntax */

  background: $secondary-background;
  margin: -0.5px;
  z-index: 1;
}
</style>
