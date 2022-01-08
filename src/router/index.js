import Vue from 'vue';
import VueRouter from 'vue-router';

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
      component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard.vue'),
      children: [
        {
          path: ':page',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboardPage" */ '../pages/Dashboard.vue'),
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
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
      name: 'about',
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '../pages/404.vue'),
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
