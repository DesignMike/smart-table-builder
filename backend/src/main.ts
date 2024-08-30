import Vue from 'vue';
import store from './store';
import router from './router';
import App from './app.vue';
import './styles/index.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['canvas-datagrid'];
const appConfig = document.querySelector(
	'#ultimate_tables_config',
)?.textContent;
store.commit('setConfig', JSON.parse(appConfig));
export default new Vue({
	router,
	render: (h) => h(App),
	store: store,
}).$mount('#vue-admin-app');
