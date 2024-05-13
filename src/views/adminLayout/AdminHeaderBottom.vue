<template>
  <div :key="headerParams" class="admin-header-bottom">
    <div class="content-container">
      <div class="user-login-panel">
        <!-- TODO user account-->
        <StringItem string="test@gmail.com" font-size="12px" width="auto"/>
        <IconAccount color="#C2C8E9" margin="0 0 0 8px"/>
      </div>
      <div class="flex-between">
        <h4 class="menu-title">
          <StringItem :string="headerParams.title" font-weight="bold" font-size="28px"/>
          <el-badge v-if="headerParams.applicationsCount" :value="headerParams.applicationsCount" type="danger" />
        </h4>
        <div class="button-group">
          <div v-for="item in headerParams.buttons" :key="item" style="margin: 0 0 0 10px">
            <!-- <Button v-if="item.action && item.condition" :text="item.text" :button-class="item.type" @click="action(item.action)" /> -->
            <PButton v-if="item.action && item.condition" :text="item.text" button-class="add-button" @click="action(item.action)" >
              <IconAddButton size="20px" color="#F5FAFF"/>
            </PButton>
          </div>
          <div v-if="headSpinner" class="system-message">
            <StringItem string="Сохранение" font-size="20px" padding="0 10px" />
            <span class="loader-spinner" />
          </div>
          <div v-else-if="headSuccess" class="system-message">
            <StringItem string="Успешно сохранено" font-size="20px" padding="0 10px" color="green" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AdminHeaderParams from '@/services/classes/admin/AdminHeaderParams';
import Provider from '@/services/Provider/Provider';
import StringItem from '@/services/components/StringItem.vue';
import IconAccount from '@/components/Icons/IconAccount.vue';
import PButton from '@/services/components/PButton.vue';
import IconAddButton from '@/components/Icons/IconAddButton.vue';

const headerParams: Ref<AdminHeaderParams> = Store.Item('admin', 'headerParams');
const headSpinner: Ref<boolean> = Store.Item('admin', 'headerSpinner');
const headSuccess: Ref<boolean> = Store.Item('admin', 'headerSuccess');

const goBack = () => {
  Provider.router.go(-1);
};
const buttonClicked: Ref<boolean> = ref(false);

const action = (f: CallableFunction) => {
  buttonClicked.value = true;
  f();
  buttonClicked.value = false;
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.add-button {
  display: flex;
  justify-content: left;
  align-items: center;
  box-sizing: border-box;
  width: auto;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #5E6CE7;
  color: #ffffff;
  font-size: 13px;
  font-family: Gilroy, Arial, Helvetica, sans-serif;
  cursor: pointer;
  padding: 0 25px;
}

.add-button:hover {
  background: lighten($color: #5E6CE7, $amount: 3%);
}

.content-container {
  display: block;
  width: 100%;
  background: $base-content-color;
}

.user-login-panel {
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #E3E7FB;
  margin: 0 20px;
}

.admin-header-bottom {
  box-shadow: none;
  // background-color: $base-content-color;
  display: flex;
  align-items: center;
  // height: 60vh;
  overflow: hidden;
}

h4 {
  font-weight: normal;
  font-size: 18px;
}

.flex-between {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;

  .el-button {
    margin-left: 5px;
  }
}

.loader-text {
  vertical-align: middle;
  margin-bottom: 10px;
  display: inline-block;
  margin-right: 10px;
}

.loader-spinner {
  width: 24px;
  height: 24px;
  border: 5px solid $custom-background;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.system-message {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: #ffffff;
}

.plus-button {
  width: 100%;
  min-width: 150px;
  height: 34px;
  border-radius: 5px;
  color: #00bea5;
  background: #c1efeb;
}

.normal-button {
  width: 100%;
  min-width: 150px;
  height: 34px;
  border-radius: 5px;
  color: #379fff;
  background: #dff2f8;
}

.warning-button {
  width: 100%;
  min-width: 150px;
  height: 34px;
  border-radius: 5px;
  color: #f6922e;
  background: #fae3c9;
}

.save-picker-button {
  width: 100%;
  height: 34px;
  border-radius: 5px;
  color: #006bb4;
  background: #dff2f8;
}

.gender-button {
  width: 42px;
  border-radius: 5px;
  height: 42px;
  color: #006bb4;
  background: #dff2f8;
  margin: 2px 10px 0 0;
  font-size: 18px;
}

.save-button {
  width: 100%;
  border-radius: 5px;
  height: 34px;
  color: #006bb4;
  background: #dff2f8;
  margin: 2px 10px 0 0;
  font-size: 14px;
}

.menu-title {
  margin-left: 5px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 992px) {
  .menu-title {
    font-size: 14px;
  }
  :deep(.el-page-header__content) {
    font-size: 14px;
  }

  :deep(.el-page-header__left) {
    margin-right: 0;
  }

  :deep(.el-page-header__left)::after {
    display: none;
  }

  :deep(.el-page-header__icon) {
    margin-left: 30px;
  }
}

@media (max-width: 560px) {
  .normal-button {
    width: 100%;
    min-width: 80px;
    max-width: 80px;
    height: 34px;
    border-radius: 5px;
    color: #379fff;
    background: #dff2f8;
  }

  .warning-button {
    width: 100%;
    min-width: 80px;
    max-width: 80px;
    height: 34px;
    border-radius: 5px;
    color: #f6922e;
    background: #fae3c9;
  }
}

@media (max-width: 360px) {
  .menu-title {
    font-size: 12px;
  }
  :deep(.el-page-header__content) {
    font-size: 12px;
  }
}
</style>
