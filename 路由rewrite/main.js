import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
}).$mount("#app");
