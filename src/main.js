import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./Vee-validate";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SweetModal from "sweet-modal-vue/src/plugin.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Notifications from "vue-notification";

Vue.use(Notifications);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(SweetModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
