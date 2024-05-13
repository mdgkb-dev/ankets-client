<template>
  <div class="menu-icon" @click="openMenuBar()">
    <IconMenuLines hover-color="#343D5C" size="32px" margin="0 0 0 15px"/>
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
      <IconPfArrowLeft size="20px"/>
      <StringItem string="Скрыть меню" width="auto" margin="0 0 0 10px" padding="3px 0 0 0"/>
    </div>
    <div class="menu-body">
      <div>
        <DropListItem name="Мой профиль">
          <StringItem string="Общие данные" width="auto" justifyContent="left" padding="6px 0" @click="Router.To('/profile')"/>
          <StringItem string="Документы" width="auto" justifyContent="left" padding="6px 0"/>
          <StringItem string="Экспертизы" width="auto" justifyContent="left" padding="6px 0"/>
          <StringItem string="Мои настройки" width="auto" justifyContent="left" padding="6px 0"/>
        </DropListItem>
        <DropListItem name="Анкеты">
          <StringItem string="Список анкет" width="auto" justifyContent="left" padding="6px 0"/>
          <StringItem string="Конструктор анкет" width="auto" justifyContent="left" padding="6px 0"/>
        </DropListItem>
        <DropListItem name="Администрирование">
          <template v-for="item in menus" :key="item.name">
            <div v-if="item.link !== '/'"
              :class="{ 'selected-menu-item': item.link === activePath, 'menu-item': item.to !== activePath }"
              :index="item.link" @click="Router.To(item.link)">
              {{ item.name }}
            </div>
          </template>
          <StringItem string="Документы" width="auto" justifyContent="left" padding="6px 0"/>
          <StringItem string="Экспертизы" width="auto" justifyContent="left" padding="6px 0"/>
          <StringItem string="Мои настройки" width="auto" justifyContent="left" padding="6px 0"/>
        </DropListItem>
        <DropListItem name="Аналитика"></DropListItem>
        <DropListItem name="Чат"></DropListItem>
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
import DropListItem from '@/views/adminLayout/DropListItem.vue';

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

.menu-header {
  box-sizing: border-box;
  margin: 0 20px;
  height: 65px;
  border-bottom: 1px solid #E3E7FB;
}

.menu-tools {
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}

.menu-item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  color: $base-font-color;
  font-family: $base-font;
  font-size: $base-font-size;
}

.menu-item:hover {
  color: $site_dark_gray;
}

.selected-menu-item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 6px 0;
  color: $site_dark_gray;
  font-family: $base-font;
  text-decoration: underline;
  font-size: $base-font-size;
}

.selected-menu-item:hover {
  background: #ffffff;
}

.exit-button-container {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: left;
  position: absolute;
  bottom: 50px;
}

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

.menu-body {
  padding: 0 20px;
}

</style>
