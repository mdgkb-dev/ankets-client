const AuthPage = () => import('@/services/components/AuthPage.vue');
const PageNotFound = () => import('@/services/components/PageNotFound.vue');

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: AuthPage,
    meta: {
      layout: 'LoginLayout',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
  },
];
