<template>
  <div class="menu-icon" @click="openMenuBar()">
    <IconMenuLines hover-color="#343D5C" size="32px" margin="0 0 0 15px"/>
    <!-- <IconPfArrowLeft size="20px" />
    <StringItem custom-class="auth-title" string=" меню" width="auto" margin="0 0 0 10px"/> -->
  </div>
  <div v-if="mounted" class="admin-side-menu" 
    :style="{
      marginLeft: showMenuBar ? '0px' : '-250px', 
      boxShadow: shadow ? '0 0 6px rgba(0, 0, 0, 0.3)' : 'none',
      borderRight: border ? '1px solid #c4c4c4' : 'none',
    }">
    <div class="menu-header">
      <StringItem string="Логотип" padding="33px 0 0 0" color="#6B7CC6" /> <!--Logo-->
    </div>
    <div class="menu-tools" @click="showMenuBar = false">
      <IconPfArrowLeft />
      <StringItem string="Скрыть меню" width="auto" margin="0 0 0 10px" />
    </div>
    <div class="menu-body">
      <!-- <div @select="closeDrawer"> -->
      <div>
        <template v-for="item in menus" :key="item.name">
          <!-- <div @click="showMenuBar = false"> -->
          <div>
            <div v-if="item.link !== '/'"
              :class="{ 'selected-menu-item': item.link === activePath, 'menu-item': item.to !== activePath }"
              :index="item.link" @click="Router.To(item.link)">
              {{ item.name }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="exit-button-container">
      <PButton button-class="exit-button" text="Выйти" @click="logout" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconMenuLines from '@/components/Icons/IconMenuLines.vue';
import MenusSortsLib from '@/libs/sorts/MenusSortsLib';
import Menu from '@/services/classes/Menu';
import Router from '@/services/Router';
import StringItem from '@/services/components/StringItem.vue';
import IconPfArrowLeft from '@/components/Icons/IconPfArrowLeft.vue';
import PButton from '@/services/components/PButton.vue';

const props = defineProps({ 
  shadow: { type: Boolean as PropType<Boolean>, default: true },
  border: { type: Boolean as PropType<Boolean>, default: true },
});


const isCollapseSideMenu = Store.Item('admin', 'isCollapseSideMenu');
const closeDrawer = () => Store.Commit('admin/closeDrawer');
const activePath: Ref<string> = ref('');
const auth = Store.Item('auth', 'auth');
// const applicationsCounts: Ref<IApplicationsCount[]> = computed(() => store.getters['admin/applicationsCounts']);
const mounted = ref(false);
const showMenuBar: Ref<boolean> = ref(true);
// const userPermissions: ComputedRef<IPathPermission[]> = computed(() => store.getters['auth/userPathPermissions']);
const menus: ComputedRef<Menu[]> = Store.Items('menus');

watch(
  () => Router.Route().path,
  () => {
    activePath.value = Router.Route().path;
  }
);

onBeforeMount(async () => {
  const ftsp = new FTSP();
  ftsp.setSortModel(MenusSortsLib.byOrder());
  await Store.FTSP('menus', { withCache: true, ftsp: ftsp });
  activePath.value = Router.Route().path;
  mounted.value = true;
});

onBeforeUnmount(async () => {
  // await store.dispatch('admin/unsubscribeApplicationsCountsGet');
});

const openMenuBar = async () => {
  showMenuBar.value = true;
};

const logout = async () => {
  // auth.value.logout();
  await Router.To('/login');
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/base-style.scss';

.exit-button {
  border: none;
  background: inherit;
  color: $base-font-color;
  font-family: $base-font;
  margin: 0 0 0 20px;
  font-size: $base-font-large-size;
  cursor: pointer;
}

.exit-button:hover {
  color: $site_dark_gray;
}

.menu-tools {
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}

.menu-header {
  box-sizing: border-box;
  margin: 0 20px;
  height: 65px;
  border-bottom: 1px solid #E3E7FB;
}

.save-button {
  width: calc(100% - 20px);
  border-radius: 5px;
  height: 34px;
  color: #006bb4;
  background: #dff2f8;
  margin: 0 10px;
  font-size: 14px;
}

.hidden {
  display: none;
}

.exit-button-container {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: left;
  position: absolute;
  bottom: 50px;
}

::-webkit-scrollbar {
  display: block;
  width: 8px;
  height: 8px;
  background-color: rgba(245, 245, 245, 0.47);
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
  margin: 5px 0;
}

::-webkit-scrollbar-thumb {
  height: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(85, 85, 85, 0.25);
}

.admin-side-menu {
  box-sizing: border-box;
  width: 240px;
  position: relative;
  min-height: inherit;
  height: inherit;
  float: left;
  background-color: $menu-background;
  border-right: 1px solid #e6e6e6;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  border-right: 1px solid #c4c4c4;
  z-index: 10;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.el-menu,
.el-menu-item {
  border: none;
}

.row-menu-title {
  margin-right: 20px;
}

.sub-menu-container {
  position: relative;

  .el-badge {
    position: absolute;
    top: -10px;
    left: -10px;
  }
}

.menu-item-container {
  display: flex;
  align-items: center;

  .el-badge {
    margin-left: 5px;
  }
}

.menu-icon {
  position: absolute;
  top: 14px;
  left: 5px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.menu-item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
  color: $base-font-color;
  font-family: $base-font;
}

.menu-item:hover {
  color: $site_dark_gray;
}

.selected-menu-item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 20px;
  height: 40px;
  color: $site_dark_gray;
  font-family: $base-font;
  text-decoration: underline;
}

.menu-item:hover {
  background: #ffffff;
}


@media screen and (max-width: 992px) {
  // .admin-side-menu {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 5;
  //   margin-left: -250px;
  // }


}
</style>
