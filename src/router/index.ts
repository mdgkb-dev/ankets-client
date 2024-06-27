import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';

import AuthPage from '@/components/Auth/AuthPage.vue';
import PageNotFound from '@/services/components/PageNotFound.vue';
import indexAdminRoutes from '@/router/indexAdminRoutes';
import UserService from '@/services/User';
import store from '@/store/index';
import ProfileInfoPage from '@/components/Profile/ProfileInfoPage.vue';
import UserResearchesList from '@/components/admin/Profile/UserResearchesList.vue';
import UserResearchPage from '@/components/admin/UsersResearches/UserResearchPage.vue';

export const isAuthorized = (next: NavigationGuardNext): void => {
  next();
};

export const authGuard = async (next?: NavigationGuardNext): Promise<void> => {
  const auth = store.getters['auth/auth'];
  auth.actualize();
  if (!auth.isAuth) {
    router.push('/login');
  }
};

export const devGuard = (): void => {
  if (!UserService.isAdmin()) {
    router.push('/dev');
  }
};

export const adminGuard = async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> => {
  if (to.path != '/main') {
    try {
      await store.dispatch('auth/checkPathPermissions', to.matched[0].path);
    } catch (e) {
      await router.push('/');
    }
  }
  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/profile/users-researches',
  },
  {
    path: '/login',
    component: AuthPage,
    meta: {
      layout: 'LoginLayout',
    },
  },
  {
    path: '/profile',
    component: ProfileInfoPage,
  },
  {
    path: '/profile/users-researches',
    component: UserResearchesList,
  },
  {
    path: '/profile/users-researches/:id',
    component: UserResearchPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
  },
  ...indexAdminRoutes,
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

// router.beforeEach(authGuard);

export default router;
