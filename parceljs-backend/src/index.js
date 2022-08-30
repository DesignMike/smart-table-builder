import { createApp } from "vue";
import App from "./App.vue";

import store from './store'
// import router from './router'

import { createRouter, createWebHashHistory } from 'vue-router'
import menuFix from './utils/admin-menu-fix'


const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// Vue.use(VueRouter)
const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp({});
app.use(router);
// app.use(store);
app.mount("#app");

