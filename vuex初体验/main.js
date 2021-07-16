import Vue from "vue";
import App from "./App";
import store from './store'

Vue.config.productionTip = false;

new Vue({
  //应用store得到全局得到$store
  store,
  render: (h) => h(App),
}).$mount("#app");
