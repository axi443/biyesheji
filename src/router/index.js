import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Layout from "@/layout";

const routers = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    hidden: true
  },
  {
    path: "",
    component: Layout,
    meta: { 
      title: "多级menu", 
      icon: "gongzuotai",
    },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index"),
        name: "home",
        meta: { 
          title: "首页", 
          icon: "gongzuotai",
        },
      },
      {
        path: "index",
        component: () => import("@/views/index/index"),
        name: "index",
        meta: { 
          title: "功能页", 
          icon: "juese",
        },
      },
      {
        path: "echart",
        component: () => import("@/views/echart_test/index"),
        name: "echart_test",
        meta: { 
          title: "echart", 
          icon: "juese",
        },
      },
    ],
  },
  {
    path: "/map_test",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/map_test/index"),
        name: "map_test",
        meta: { 
          title: "map", 
          icon: "juese",
        },
      },
    ],
  },
  {
    path: "/supermap_test",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/supermap_test/index"),
        name: "supermap_test",
        meta: { 
          title: "supermap", 
          icon: "juese",
        },
      },
    ],
  },
  { path: "*", redirect: "/home", hidden: true },
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routers,
  });

const router = createRouter();


export default router;
