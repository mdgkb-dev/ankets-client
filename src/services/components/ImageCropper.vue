<template>
  <PModalWindow :show="open" @close="$emit('close')">
    <div class="background-container">
      <div class="tools-line">
        <div class="line-block">
          <PSelect v-model="resolution" label="Пропорции изображения">
            <option label="2:3 (формат A4)" :value="2 / 3" />
            <option label="4:3 (для карточек новостей)" :value="4 / 3" />
            <option label="1:1 (для фото сотрудников)" :value="1" />
            <option label="3:2" :value="3 / 2" />
            <option label="16:9" :value="16 / 9" />
            <option label="3:4 (вертикальное изображение)" :value="3 / 4" />
            <option label="Задать пропорции вручную" :value="0" />
          </PSelect>
        </div>
      </div>
      <Cropper
        ref="cropperRef"
        :src="cropper.src"
        :stencil-props="{ aspectRatio: cropper.ratio }"
        style="max-height: 50vh; min-height: 50vh"
        @change="onChange"
      />

      <div class="dialog-footer">
        <PButton text="Сохранить" @click="save" />
      </div>
    </div>
  </PModalWindow>
</template>

<script lang="ts" setup>
import 'vue-advanced-cropper/dist/style.css';

import { Cropper } from 'vue-advanced-cropper';

import ICanvasResult from '@/services/interfaces/canvas/ICanvasResult';
import ICoordinates from '@/services/interfaces/canvas/ICoordinates';

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  defaultRatio: {
    type: Number,
    required: false,
    default: 1,
  },
});
const emits = defineEmits(['crop', 'close']);

const cropper = CropperStore.Cropper();
const resolution: Ref<number> = ref(props.defaultRatio);

cropper.ratio = resolution.value;

const selectResolution = async () => {
  if (resolution.value === 0) {
    cropper.ratio = 0;
  } else {
    cropper.ratio = resolution.value;
  }
};

const coordinates: Ref<ICoordinates> = ref({
  width: 0,
  height: 0,
  left: 0,
  top: 0,
});

const loading = ref(false);
const resultImage = ref('');
const cropperRef = ref();

const save = async () => {
  loading.value = true;
  const canvas = cropperRef.value.getResult();
  if (cropper.ratio === 0) {
    resolution.value = coordinates.value.width / coordinates.value.height;
  }
  if (canvas) {
    canvas.canvas.toBlob((blob: Blob) => {
      emits('crop', { blob: blob, src: canvas.canvas?.toDataURL() });
    });
  }

  loading.value = false;
};

// const cancel = () => {
//   resultImage.value = '';
//   emits('close');
// };

const onChange = (res: ICanvasResult) => {
  coordinates.value = res.coordinates;
  resultImage.value = res.canvas?.toDataURL();
};
</script>

<style lang="scss" scoped>
@import '@/services/assets/style/index.scss';

.dialog-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.background-container {
  width: auto;
  padding: 10px;
  margin: 0 20px 20px 20px;
  background: #dff2f8;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
}

.tools-line {
  display: flex;
  justify-content: left;
  align-items: center;
}

.line-item {
  margin-left: 20px;
}

.foto-select {
  width: 280px;
}

.line-block {
  width: 280px;
}

:deep(.el-input__inner) {
  border-radius: 40px;
  padding-left: 15px;
  height: 32px;
  width: 270px;
  display: flex;
  font-family: Comfortaa, Arial, Helvetica, sans-serif;
  font-size: 14px;
}

:deep(.el-form-item__label) {
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 12px;
  color: #a3a9be;
  padding: 0 !important;
  text-transform: uppercase;
  margin-left: 5px;
  height: 40px;
}

:deep(.el-select .el-input .el-select__caret) {
  color: #343e5c;
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 1px;
}

:deep(.el-select .el-input .el-select__caret.el-icon-circle-close) {
  height: 40px;
}

:deep(.el-select .el-input__suffix) {
  top: -3px;
}

:deep(.el-form-item) {
  display: block;
  margin-bottom: 16px;
}

@media only screen and (max-width: 480px) {
  .background-container {
    width: auto;
    padding: 10px;
    margin: 0 10px 10px 10px;
  }

  :deep(.el-input__inner) {
    border-radius: 40px;
    padding-left: 15px;
    height: 32px;
    width: 250px;
    display: flex;
    font-family: Comfortaa, Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
}
</style>
