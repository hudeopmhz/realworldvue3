import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EventDetail from "../components/EventDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events/:id",
    name: "EventDetail",
    component: EventDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
