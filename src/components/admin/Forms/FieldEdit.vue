<template>
  <template v-if="field.id">
    <div class="q-container">
      <SelectValueType :selected-type="field.valueType.name" @select="selectType" />
      <button v-if="field.valueType.isNumber()" class="admin-add2" @click="edit">+ Добавить варианты ответов числового вида</button>
    </div>
    <component :is="FieldsEditsComponents[field.valueType.name]" :field="field" />
  </template>

  <ModalWindow
    v-if="fieldVariantsModalOpened"
    :show="fieldVariantsModalOpened"
    title="Варианты ответов числового вида"
    @close="fieldVariantsModalOpened = false"
  >
    <!-- <div class="tools-buttons"> -->
    <!--   <button class="admin-add" @click="addVariant()">+ Добавить</button> -->
    <!-- </div> -->
    <!-- <div v-for="(variant, i) in field.fieldVariants" :key="variant.id" class="container"> -->
    <!--   <button class="admin-del" @click="removeVariant(variant.id)">Удалить</button> -->
    <!--   <div class="list-number"> -->
    <!--     {{ i + 1 }} -->
    <!--   </div> -->
    <!--   <el-input v-model="variant.name" @focus.stop @blur="updateVariant(variant)" /> -->
    <!-- </div> -->
    <!-- <SessionConstructor :start-time="selectedSession" :session="selectedSession" @close="showEditSessionModal = false" /> -->
    <!-- <Button button-class="del-button" text="Удалить" @click="removeSession" /> -->
  </ModalWindow>
</template>

<script setup lang="ts">
import Field from '@/classes/Field';
import FieldsEditsComponents from '@/components/admin/Forms/Fields/FieldsEditsComponents';
import ValueType from '@/services/classes/ValueType';
import ValueTypes from '@/services/types/ValueTypes';
const fieldVariantsModalOpened = ref(false);

const edit = () => {
  fieldVariantsModalOpened.value = true;
};

const field: Field = FieldsStore.Item();

const valueType: ValueType = ValueTypesStore.Item();

const selectType = async (itemName: string) => {
  await ValueTypesStore.Get(itemName);
  field.setType(valueType);
  await FieldsStore.Update();
};

// const updateVariant = async (item: FieldVariant) => {
//   sort(field.fieldVariants);
//   await Store.Update('fieldVariants', item);
// };
//
// const removeVariant = async (id: string) => {
//   await Store.Remove('fieldVariants', id);
//   ClassHelper.RemoveFromClassById(id, field.fieldVariants);
//   sort(field.fieldVariants);
// };
//
// const addVariant = async () => {
//   const item = field.addFieldVariant();
//   sort(field.fieldVariants);
//   await Store.Create('fieldVariants', item);
// };
</script>

<style lang="scss" scoped>
.q-container {
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 0 0px;
}

.admin-add {
  border: none;
  background: inherit;
  color: #1979cf;
  margin: 10px;
  padding: 0 10px;
  transition: 0.3s;
  cursor: pointer;
}

.admin-add:hover {
  color: darken($color: #1979cf, $amount: 10%);
  background: inherit;
}

.admin-add2 {
  border: none;
  background: inherit;
  color: #00b5a4;
  transition: 0.3s;
  cursor: pointer;
}

.admin-add2:hover {
  color: darken($color: #00b5a4, $amount: 10%);
}

.admin-del {
  position: absolute;
  top: 10px;
  right: 36px;
  border: none;
  background: inherit;
  color: #a3a9be;
  transition: 0.3s;
  cursor: pointer;
}

.admin-del:hover {
  color: darken($color: #cf3d19, $amount: 5%);
}

.tools-buttons {
  display: flex;
  justify-content: right;
  align-items: center;
}

.container {
  position: relative;
  width: calc(100% - 62px);
  margin: 0px 20px 20px 20px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  padding: 40px 10px 10px 10px;
  background: #dff2f8;
}

.list-number {
  position: absolute;
  top: 7px;
  right: 10px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #1979cf;
  border-radius: 20px;
}

@media screen and (max-width: 400px) {
  .container {
    width: calc(100% - 42px);
    margin: 0px 10px 20px 10px;
  }
}
</style>
