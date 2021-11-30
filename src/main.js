import Vue from "vue";
import App from "./App.vue";
//TODO? import router from './router'
import store from "./store";

import "./style/stylesheet.css";

Vue.config.productionTip = false;

new Vue({
        render: (h) => h(App),
    })
    .use(store)
    .$mount("#app");