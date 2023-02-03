import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import ContactUs from "./pages/ContactUs.vue";
import SingleProject from "./pages/SingleProject.vue";
import Page404 from "./pages/Page404.vue";
import TypeFilteredList from "./pages/TypeFilteredList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/contacts",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/boolfolio/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/boolfolio/type/:slug",
      name: "type-filtered-list",
      component: TypeFilteredList,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export default router;
