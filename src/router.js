import { createWebHistory, createRouter } from "vue-router";
// import Record from "./components/RecordStorage.vue";
import Home from "./Home.vue";
import Record from "./Record.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/record",
    component: Record,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
