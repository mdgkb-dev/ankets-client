import AdminFormsRouters from './AdminFormsRouters';
const routes = [...AdminFormsRouters];

routes.forEach((r) => {
  // r.beforeEnter = RouterGuard.BeforeEnter;
  r.meta = {
    layout: 'AdminLayout',
  };
});
export default routes;
