import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SpeechView from "../views/SpeechView.vue";
import AudioVisualView from "../views/AudioVisualView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/speech",
      name: "speechview",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SpeechView,
      // component: () => import("../views/SpeechView.vue"),
    },
    {
      path: "/audio-visualization",
      name: "audioviz",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AudioVisualView.vue"),
      component: AudioVisualView,
    },
  ],
});

export default router;
