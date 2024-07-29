import { createRouter, createWebHistory, NavigationGuardNext, RouteRecordRaw } from 'vue-router';

import indexAdminRoutes from '@/router/indexAdminRoutes';
import PageNotFound from '@/services/components/PageNotFound.vue';

export const isAuthorized = (next: NavigationGuardNext): void => {
  PHelp.Auth.Actualize();
  next();
};

export const authGuard = async (next?: NavigationGuardNext): Promise<void> => {
  if (next) {
    next();
  }
};

export const devGuard = (): void => {
  // if (!UserService.isAdmin()) {
  //   router.push('/dev');
  // }
};

const routes: Array<RouteRecordRaw> = [
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
