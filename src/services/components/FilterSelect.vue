<template>
  <PSelect v-model="filterModel" :clearable="filterModel" :placeholder="defaultLabel" @change="selectFilter">
    <option v-for="(model, i) in models" :key="i" :value="model" :label="model.label" />
  </PSelect>
</template>

<script lang="ts" setup>
import FilterModel from '@/services/classes/filters/FilterModel';

defineProps({
  models: {
    type: Array as PropType<FilterModel[]>,
    default: () => [],
  },
  defaultLabel: {
    type: String as PropType<string>,
    default: 'Все',
  },
  inverse: { type: Boolean as PropType<boolean>, required: false, default: false },
});
const emits = defineEmits(['load']);
const ftsp = FTSP.Get();

// watch(
//   () => restore.value,
//   () => {
//     // const finded = props.models.find((m: FilterModel) => {
//     //   return ftsp.value.f.some((f: FilterModel) => {
//     //     return m.valueEq(f);
//     //   });
//     // });
//     // setFilter(finded);
//   }
// );
const filterModel: Ref<FilterModel | undefined> = ref(undefined);

const setFilter = async (model?: FilterModel) => {
  ftsp.replaceF(model, filterModel.value);
  filterModel.value = model;
};

const selectFilter = async (model?: FilterModel) => {
  if (!model) {
    await setFilter(undefined);
  } else {
    await setFilter(filterModel.value);
  }
  emits('load');
};
</script>

<style lang="scss" scoped>
.filter-button {
  width: auto;
  height: 23px;
  border-radius: 5px;
  color: #006bb4;
  background: #ffffff;
  font-size: 12px;
  padding: 10px;
}

.anticon {
  margin: 4px 4px 2px 4px;
  font-size: 13px;

  &:hover {
    color: #5cb6ff;
  }
}

.set {
  color: #5cb6ff;
}

:deep(.el-input__inner) {
  border-radius: 20px;
  padding-left: 25px;
  height: 34px;
  width: 100%;
  display: flex;
  font-family: Comfortaa, Arial, Helvetica, sans-serif;
  font-size: 15px;
}

:deep(.el-input__inner::placeholder) {
  color: #4a4a4a;
}

:deep(.el-select .el-input .el-select__caret) {
  color: #4a4a4a;
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
}

.el-select {
  width: 100%;
}

:deep(.el-form-item) {
  margin-bottom: 0;
}
</style>
