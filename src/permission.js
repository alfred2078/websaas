import Vue from "vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // progress bar style
import router from "./router";
import store from '@/store'
import { ACCESS_TOKEN } from "@/store/mutation-types";

import { generateRouter } from "@/router/menurouter";

NProgress.configure({
  showSpinner: false
});

router.beforeEach((to, from, next) => {
  
  NProgress.start();
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === "/user/login") {
      
    } else {
      next();
      NProgress.done();
      //装载菜单       
      if (store.getters.listmenu.length === 0 ) {
        store.dispatch("GetMenuListByUser").then(res => {
            const menu = res;
            
            if (menu === null || menu === "" || menu === undefined) {
              return;
            }
            let constRoute = []; 
                     
            constRoute = generateRouter(menu);  
                        
            //添加主画面路由
            store.dispatch("UpdateRouter", { constRoute }).then(() => {
              //动态添加路由
              router.addRoutes(store.getters.addRouters);
              const rectpath = decodeURIComponent(
                from.query.redirect || to.path
              );
              if (to.path === rectpath) {
                // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true })
              } else {
                // 跳转到目的路由
                next({ path: rectpath })
              }
            });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        next();
        NProgress.done();
      }
    }
  } else {
    if (to.path === "/user/login") {
      next();
      NProgress.done();
    } else {
      next({ path: "/user/login" });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
