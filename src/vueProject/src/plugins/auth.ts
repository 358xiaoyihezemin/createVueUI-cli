// @ts-ignore
import Cookies from 'js-cookie';
import { Route } from 'vue-router';

export default ({ router }: any) => {
  router.beforeEach((to: Route, from: Route, next: any) => {
    if (to && to.meta && to.meta.auth) {
      const user: any = Cookies.get('user_info');
      if (!user) {
        return next({ path: '/login', query: { redirect: window.location.href } });
      }
    }
    next();
  });
};
