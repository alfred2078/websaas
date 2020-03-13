import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/views/login/Login";
import MainLayout from "@/components/layouts/TabLayout";
Vue.use(Router);

/**
 * 基础路由
 * @type {*[]}
 */
export const constantRouterMap = [
  {
    path: "/user/login",
    name: "Login",
    component: Login    
  }
];

export default new Router({
  mode: "history",
  routes: constantRouterMap
});

/**
 * 路由格式
 * [{
  path: '/user/login',
  name: 'Login',
  component: Login 
}]
 */
