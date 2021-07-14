import Vue from "vue";
import App from "./App";

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this; //this指向这个实例
  },
  render: (h) => h(App),
}).$mount("#app");
