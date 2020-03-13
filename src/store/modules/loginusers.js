import Vue from "vue";
import { UserLogin } from "@/api/apiloginusers";
import { ACCESS_TOKEN, USER_NAME, USER_INFO } from "@/store/mutation-types";

const loginusers = {
  state: {
    token: "",
    userInfo: {},
    listmenu: []
  },

  mutations: {
    SET_PERMISSIONLIST: (state, listmenu) => {
      state.listmenu = listmenu;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    GetMenuListByUser({ commit }) {
      return new Promise((resolve, reject) => {
        // const listmenu = []
        const listmenu = [
          {
            "redirect": null,
            "path": "/dashboard/dashmain",
            "component": "dashboard/DashMain",
            "route": "1",
            "hidden": false,
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "icon": "store",
              "title": "首页"
            },
            "name": "dashboard-dashmain",
            "id": "9502685863ab87f0ad1134142788a385"
          },
          {
            "redirect": null,
            "path": "/systemset",
            "component": "layouts/RouteView",
            "route": "1",
            "hidden": false,
            "children": [
            {
                "path": "/systemset/user",
                "component": "systemset/UserList",
                "route": "1",
                "hidden": false,
                "meta": {
                  "keepAlive": false,
                  "internalOrExternal": false,
                  "title": "用户管理"
                },
                "name": "systemset-user",
                "id": "3f915b2769fc80648e92d04e84ca059d"
              }
            ],
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "icon": "set",
              "title": "系统管理"
            },
            "name": "systemset",
            "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
          }
        ];
        commit("SET_PERMISSIONLIST", listmenu);
        resolve(listmenu);
      });
    },
    UserLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Vue.ls.set(ACCESS_TOKEN,'test001',  60 * 1000);
        resolve();
        // UserLogin(userInfo).then(response => {
        //   //API请求成功
        //   if (response.code === "200") {
        //     const result = response.result;
        //     const userInfo = result.userInfo;
        //     if (result.status === 1) {
        //       //登录成功
        //       Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000);
        //       Vue.ls.set(USER_NAME, userInfo.userName, 7 * 24 * 60 * 60 * 1000);
        //       Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000);
        //       commit("SET_TOKEN");
        //       commit("SET_USERINFO");
        //       resolve(response);
        //     } else {
        //       //登录失败
        //       reject(result.message);
        //     }
        //   } else {
        //     //API请求失败
        //     reject(response);
        //   }
        // });
      }).catch(error => {
        //API请求异常
        console.log(error)
      });
    }
  }
};

export default loginusers;
