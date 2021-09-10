import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import menuFix from './utils/admin-menu-fix'
// import Vuex from 'vuex'
// Vue.use(Vuex);
// import XLSX from 'xlsx';
Vue.config.productionTip = false
Vue.config.ignoredElements = ['canvas-datagrid'];
import '../../assets/css/tail.css';

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#vue-admin-app');
// fix the admin menu for the slug "vue-app"
menuFix('vue-app');
