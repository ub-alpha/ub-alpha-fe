import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import StartView from "@/views/StartView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/start",
    name: "start",
    component: StartView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
