import Vue from "vue";
import App from "./App.vue";
//TODO? import router from './router'
import { store } from "./store";

import "./style/stylesheet.css";

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");