
import {constantRouterMap } from '@/router/index'

const menuuser = {
    state:{
        routers:constantRouterMap,
        addRouters:[]//父级路由+从后台取的子路由
    },
    mutations:{
        SET_ROUTERS:(state,data)=>{               
            state.addRouters = data
            state.routers = constantRouterMap.concat(data)
        }
    },
    actions:{
        UpdateRouter({commit},routes){            
            return new Promise(resolve =>{                
                let routelist = routes.constRoute;                
                commit('SET_ROUTERS',routelist)
                resolve()
            })
        }
    }
}

export default menuuser;