import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import StartView from "@/views/StartView.vue";
import GameView from "@/views/GameView.vue";
import PointMissionView from "@/views/PointMissionView.vue";

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
  {
    path: "/game",
    name: "game",
    component: GameView,
  },
  {
    path: "/mission",
    name: "mission",
    component: PointMissionView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
