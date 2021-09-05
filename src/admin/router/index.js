import Vue from 'vue'
import Router from 'vue-router'
import CreateFromSpreadsheet from 'admin/pages/CreateFromSpreadsheet.vue'
import Settings from 'admin/pages/Settings.vue'
import Edit from 'admin/pages/Edit.vue'
import AddFromScratch from 'admin/pages/AddFromScratch.vue'
import Home from 'admin/pages/Home.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/create-from-excel',
      name: 'New table from excel file',
      component: CreateFromSpreadsheet
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
    {
      path: '/create-from-scratch',
      name: 'Add From Scratch',
      component: AddFromScratch
    },
    {
      path: '/',
      name: 'Create A new Table',
      component: Home
    },
  ]
})

router.beforeEach((to, from, next) => {
  if ((from.path == "/edit" || from.path == "/") && to.path == "/create-from-excel") {
    router.app.$store.commit('setEditingTableId', null);
    router.app.$store.commit('updateGrid', []);
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
  router.app.$store.commit('setPageTitle', to.name);
  next();
});

router.afterEach((to, from) => {
  debugger;
})

export default router;