import Vue from "vue";
import VueRouter from "vue-router";
import Buefy from "buefy";

import App from "./App.vue";
import store from "./store";
import { routes } from "./routes";
import "buefy/dist/buefy.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
