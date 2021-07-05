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
      component: Edit
    },
  ]
})

router.beforeEach((to, from, next) => {
  // router.app.$store.commit('SET_ROUTE', to);
  if (from.path == "/edit" && to.path == "/") {
    router.app.$store.commit('setEditingTableId', null);
    router.app.$store.commit('updateGrid', {data: []});
    router.app.$store.commit('setTitle', null);
  }
  if (from.query.table_id) {
    let updateListTables = (data) => {
      router.app.$store.commit('availableTables', data );
    }
    
    jQuery.ajax({
        type: "GET",
        url: ajaxurl + '?action=sprdsh_list_tables',
        success: updateListTables
    })
  }
  next();
});

export default router;