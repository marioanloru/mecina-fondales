import Vue from "vue";
import VueRouter from "vue-router";
//  import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Inicio",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/mecina",
    name: "Mecina",
    component: () =>
      import(/* webpackChunkName: "mecina" */ "../views/Mecina.vue")
  },
  {
    path: "/mecinilla",
    name: "Mecinilla",
    component: () =>
      import(/* webpackChunkName: "mecinilla" */ "../views/Mecinilla.vue")
  },
  {
    path: "/fondales",
    name: "Fondales",
    component: () =>
      import(/* webpackChunkName: "fondales" */ "../views/Fondales.vue")
  },
  {
    path: "/actividades",
    name: "Actividades",
    component: () =>
      import(/* webpackChunkName: "activities" */ "../views/Activities.vue")
  },
  {
    path: "/rutas",
    name: "Rutas",
    component: () =>
      import(/* webpackChunkName: "rutas" */ "../views/Routes.vue")
  },
  {
    path: "/comida",
    name: "Comida",
    component: () => import(/* webpackChunkName: "food" */ "../views/Food.vue")
  },
  {
    path: "/lugares",
    name: "lugares",
    component: () =>
      import(/* webpackChunkName: "places" */ "../views/Places.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});

export default router;
