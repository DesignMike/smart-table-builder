import Vue from 'vue';
import store from './store';
import router from './router';
import App from './app.vue';
import './styles/index.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['canvas-datagrid'];

export default new Vue({
	router,
	render: (h) => h(App),
	store: store,
}).$mount('#vue-admin-app');

// import menuFix from './utils/admin-menu-fix'
// // import Vuex from 'vuex'
// // Vue.use(Vuex);
// // import XLSX from 'xlsx';
// Vue.config.productionTip = false
// Vue.config.ignoredElements = ['canvas-datagrid'];
// import '../../assets/css/tail.css';

// /* eslint-disable no-new */
// new Vue({
//   router,
//   render: h => h(App),
//   store: store
// }).$mount('#vue-admin-app');
// // fix the admin menu for the slug "vue-app"
// menuFix('vue-app');
