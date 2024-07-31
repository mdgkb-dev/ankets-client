import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import indexAdminRoutes from '@/router/indexAdminRoutes';
import PageNotFound from '@/services/components/PageNotFound.vue';

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
