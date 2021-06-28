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
    route: null,
    tableTitle: '',
    tableList: []
  },
  mutations: {
    updateGrid (state, newData) {
      state.grid = newData;
    },
    SET_ROUTE (state, route) {
      state.route = route;
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
