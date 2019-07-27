import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login.vue";
import Signup from "./views/signup.vue";
import Home from "./views/home.vue";

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/app/signup",
      name: "signup",
      component:Signup
    },{
      path: "/app/home",
      name: "home",
      component: Home
    }
  ]
});
