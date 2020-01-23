import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Cursos from "../views/Cursos.vue";
import Curriculums from "../views/Curriculums.vue";
import Prueba from "../views/Prueba.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos
  },
  {
    path: "/curriculums",
    name: "curriculums",
    component: Curriculums
  },
  {
    path: "/prueba",
    name: "prueba",
    component: Prueba
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
