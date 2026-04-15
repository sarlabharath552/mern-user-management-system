import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Users from "../views/Users.vue";
import Profile from "../views/Profile.vue";
import { authState } from "../store/auth";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  { path: "/users", component: Users, meta: { requiresAuth: true, role: ["admin", "manager"] } },
  { path: "/profile", component: Profile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔥 Route Guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authState.token) {
    return next("/");
  }

  if (to.meta.role && !to.meta.role.includes(authState.user?.role)) {
    return next("/dashboard");
  }

  next();
});

export default router;