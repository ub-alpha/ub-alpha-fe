import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from "../views/HomeView.vue";
import StartView from "@/views/StartView.vue";
import GameView from "@/views/GameView.vue";
import PointMissionView from "@/views/PointMissionView.vue";
import ShopView from "@/views/ShopView.vue";
import LoginView from "@/views/LoginView.vue";
import MydataView from "@/views/MydataView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
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
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/mydata",
    name: "mydata",
    component: MydataView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
