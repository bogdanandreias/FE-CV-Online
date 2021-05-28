import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import CvEditor from "../views/CvEditingPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    if(localStorage.getItem('jwt') != null) {
      next({
        path: '/',
        params: { nextUrl: '/'}
      })
    } else {
      next()
    }
  }
})

export default router;
