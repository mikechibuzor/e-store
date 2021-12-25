import { createRouter, createWebHistory } from "vue-router";

// import HomePage from "../pages/HomePage.vue";
import about from "../pages/about.vue";
import collections from "../pages/collections.vue";
import contact from "../pages/contact.vue";
import men from "../pages/men.vue";
import women from "../pages/women.vue";
import checkout from "../pages/checkout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/collections",
      component: collections,
      alias: "/",
    },
    {
      path: "/contact",
      component: contact,
    },
    {
      path: "/men",
      component: men,
    },
    {
      path: "/women",
      component: women,
    },
    {
      path: "/about",
      component: about,
    },
    {
      path: "/checkout",
      component: checkout,
    },
  ],
});

export default router;
