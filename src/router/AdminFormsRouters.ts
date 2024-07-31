const AdminFormsList = () => import('@/components/admin/Forms/AdminFormsList.vue');
const AdminFormPage = () => import('@/components/admin/Forms/AdminFormPage.vue');

export default [
  {
    path: '/admin/forms',
    name: 'AdminFormsList',
    component: AdminFormsList,
  },
  {
    path: '/admin/forms/:id',
    name: 'AdminFormPage',
    component: AdminFormPage,
  },
];
