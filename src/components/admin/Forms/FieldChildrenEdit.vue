<template>
  <div class="q-ch">
    <div class="tools-buttons">
      <StringItem string="Под-вопросы:" font-size="14px" padding="0" justify-content="left" margin="0" width="auto" />
      <PButton skin="text" type="success" text="+ Добавить под-вопрос" @click="addChild" margin="0" />
    </div>

    <draggable :list="field.children" item-key="id" @end="updateOrder">
      <template #item="{ element, index }">
        <div class="container">
          <div class="q-marker"></div>
          <div class="ch-title">
            <StringItem :string="'Под-вопрос ' + (index + 1)" font-size="14px" padding="0" justify-content="left" margin="0 0 5px 5px" />
          </div>
          <el-input v-model="element.name" placeholder="Введите текст вопроса" @blur="updateField(element)" />

          <PButton skin="text" type="del" text="удалить" @click="removeField(element.id)" />

          <FieldEdit :field="element" />
          <!-- <el-input v-model="variant.name" @blur="updateVariant(variant)" /> -->
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';

import Field from '@/classes/Field';
import ValueType from '@/services/classes/ValueType';

const props = defineProps({
  field: {
    type: Field,
    required: true,
  },
});

const valueType: ValueType = ValueTypesStore.Item();

const selectType = async (itemName: string, field: Field) => {
  await ValueTypesStore.Get(itemName);
  field.setType(valueType);
  await FieldsStore.Update(props.field);
};

const addChild = async () => {
  const item = props.field.addChild();
  await FieldsStore.Create(item);
};

const updateField = async (item: Field) => {
  await FieldsStore.Update(item);
};
const removeField = async (id: string) => {
  await FieldsStore.Remove(id);
  ClassHelper.RemoveFromClassById(id, props.field.children);
  sort(props.field.children);
  props.field.children.forEach((q: Field) => {
    FieldsStore.Update(q);
  });
};
const updateOrder = async (): Promise<void> => {
  sort(props.field.children);
  props.field.children.forEach((q: Field) => {
    FieldsStore.Update(q);
  });
};
</script>

<style lang="scss" scoped>
.q-marker {
  position: absolute;
  left: -32px;
  top: 13px;
  width: 14px;
  height: 14px;
  border-radius: 20px;
  background: #00b5a4;
}

.q-ch {
  width: calc(100% - 50px);
  box-sizing: border-box;
  background: #ffffff;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
  padding: 10px;
  margin: 30px 0 10px 40px;
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
  right: 10px;
  border: none;
  background: inherit;
  color: #a3a9be;
  transition: 0.3s;
  cursor: pointer;
}

.admin-del:hover {
  color: darken($color: #cf3d19, $amount: 5%);
}

.ch-title {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  border: none;
  background: inherit;
  color: #343d5b;
  transition: 0.3s;
  cursor: pointer;
}

.tools-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  position: relative;
  width: calc(100% - 72px);
  margin: 10px 10px 20px 40px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  padding: 40px 10px 10px 10px;
  background: #dff2f8;
  background: #ffffff;
  background: #c7ecea;
}

.list-number {
  margin: 0 10px;
}

@media screen and (max-width: 400px) {
  .container {
    width: calc(100% - 42px);
    margin: 0px 10px 20px 10px;
  }
}
</style>
