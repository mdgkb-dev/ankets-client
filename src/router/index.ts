import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import FormRoutes from '@/router/FormRoutes';
import indexAdminRoutes from '@/router/indexAdminRoutes';
import baseRoutes from '@/services/BaseRoutes';

const routes: Array<RouteRecordRaw> = [...baseRoutes, ...indexAdminRoutes, ...FormRoutes];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

// router.beforeEach(authGuard);

export default router;
