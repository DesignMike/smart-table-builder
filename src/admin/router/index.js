import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/pages/Home.vue'
import Settings from 'admin/pages/Settings.vue'
import Edit from 'admin/pages/Edit.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/edit',
      name: 'Edit Existing',
      component: () => {
        debugger;
        return import('admin/pages/Edit.vue');
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  // router.app.$store.commit('SET_ROUTE', to);
  next();
});

export default router;