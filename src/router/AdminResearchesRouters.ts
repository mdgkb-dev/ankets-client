import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import AdminResearchesList from '@/components/admin/Researches/AdminResearchesList.vue';
import { authGuard, isAuthorized } from '@/router/index';

export default [
  {
    path: '/admin/researches',
    name: 'AdminResearchesList',
    component: AdminResearchesList,
    beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void {
      isAuthorized(next);
      authGuard();
    },
    meta: {
      layout: 'AdminLayout',
    },
  },
];
