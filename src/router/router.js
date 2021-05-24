import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import CvEditor from "../views/CvEditingPage.vue";

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
  {
    path: "/edit",
    name: "Edit",
    component: CvEditor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
