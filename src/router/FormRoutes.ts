const FormPage = () => import('@/components/Forms/FormPage.vue');

export default [
  {
    path: '/forms/:id',
    name: 'FormPage',
    component: FormPage,
  },
];
