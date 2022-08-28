import { createApp } from "vue";
import App from "./App.vue";

import store from './store'
import router from './router'
import menuFix from './utils/admin-menu-fix'

const app = createApp(App);
app.use(store)
app.mount("#app");

