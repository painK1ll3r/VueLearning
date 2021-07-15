import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";
import Messages from "../views/Home/Messages";
import News from "../views/Home/News";
import Details from "../views/Home/Messages/Details";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "messages",
          component: Messages,
          children: [
            {
              path: "details/:id",
              component: Details,
            },
          ],
        },
        {
          path: "news",
          component: News,
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
export default router;
