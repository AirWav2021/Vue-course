import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import About from '../pages/About.vue';
import NotFound from '../pages/404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'dashboard', params: { page: 1 } },
    },
    {
      path: '/dashboard',
      redirect: { name: 'dashboard', params: { page: 1 } },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: ':page',
          name: 'dashboard',
          component: Dashboard,
          children: [
            {
              path: 'add/payment/:category',
              name: 'addPayment',
            },
          ],
        },
      ],
    },
    {
      path: '/dashboard/about*',
      component: About,
      name: 'about',
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: { name: '404' },
    },
  ],

});

const user = true;

router.beforeEach((to, from, next) => {
  if (!user && to.name !== '404') next({ name: '404' });
  else next();
});

const titles = {
  dashboard: 'Dashboard',
  addPayment: 'Dashboard',
  about: 'About',
  404: '404 - Not Found',
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
