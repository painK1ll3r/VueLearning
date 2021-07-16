import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";
import News from "../views/Home/News";
import Massages from "../views/Home/Massages";
import Deatils from '../views/Home/Massages/Details'

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
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
      children: [
        {
          path: "/home/news",
          component: News,
        },
        {
          path: "massages",
          component: Massages,
          children:[
            {
              path:'details/:id',
              component:Deatils
            }
          ]
        },
      ],
    },
  ],
});

export default router;
