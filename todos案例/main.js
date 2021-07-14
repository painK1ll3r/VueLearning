import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
import '../styles/common.css'

new Vue({
  render: (h) => h(App),
}).$mount("#app");
