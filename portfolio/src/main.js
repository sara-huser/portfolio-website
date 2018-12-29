import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import VueScrollReveal from "vue-scroll-reveal";

Vue.use(VueScrollTo);
Vue.use(VueScrollReveal, {
  duration: 300,
  scale: 1,
  distance: "10px",
  mobile: false,
  reset: false,
  viewFactor: 0.1
});

Vue.config.productionTip = false;

require("./assets/sass/main.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
