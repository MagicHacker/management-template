import Vue from "vue";
import Router from "vue-router";
import Login from "./components/login.vue";
import HomePage from "./components/homepage.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/homepage",
      name: "homepage",
      component: HomePage
    },
    {
      path: "",
      name: "",
      component: Login
    }
  ]
});
