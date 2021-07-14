import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../views/Home'
import About from '../views/About'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/home",
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});

export default router
