import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import indexAdminRoutes from '@/router/indexAdminRoutes';
import baseRoutes from '@/services/BaseRoutes';

const routes: Array<RouteRecordRaw> = [...baseRoutes, ...indexAdminRoutes];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

// router.beforeEach(authGuard);

export default router;
