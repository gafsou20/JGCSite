import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/about' },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/works",
    name: "Works",
    component: () => import("../views/Works.vue"),
  },
  {
    path: "/blog",
    name: "Blogs",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/blog/detail/:id",
    name: "BlogDetail",
    component: () => import("../views/BlogDetail.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
