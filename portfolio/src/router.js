import Vue from "vue";
import Router from "vue-router";
import About from "@/views/pages/About";
import Contact from "@/views/pages/Contact";
import Project from "@/views/pages/work/Project";
import Work from "@/views/pages/Work";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/work",
      component: Work,
      name: "work",
      children: [
        {
          path: ":id",
          name: "project",
          component: Project
        }
      ]
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
