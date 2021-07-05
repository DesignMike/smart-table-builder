import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'
// import XLSX from 'xlsx';
Vue.config.productionTip = false
Vue.config.ignoredElements = ['canvas-datagrid'];
import '../../assets/css/tail.css';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    grid: {
      data: [
      ]
    },
    editingTableId: null,
    tableTitle: '',
    tableList: []
  },
  mutations: {
    updateGrid (state, newData) {
      state.grid = newData;
    },
    setTitle (state, title) {
      state.tableTitle = title;
    },
    setEditingTableId (state, tableId) {
      state.editingTableId = tableId;
    },
    availableTables (state, data) {
      state.tableList = data;
    }
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#vue-admin-app');

// fix the admin menu for the slug "vue-app"
menuFix('vue-app');
