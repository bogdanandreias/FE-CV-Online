import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
