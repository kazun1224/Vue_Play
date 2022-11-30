import { createRouter, createWebHistory } from "vue-router";

import TodoView from "../views/ToDoView.vue";
// import AboutView from "@/views/AboutView.vue";
// import Error404View from "@/views/Error404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TodoView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: AboutView,
    // },
    // {
    //   path: "/:catchAll(.*)*",
    //   component: Error404View,
    // },
  ],
});

export default router;
