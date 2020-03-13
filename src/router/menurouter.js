import { isURL } from '@/utils/validate.js'


export function generateRouter(data) {
  let indexRouter = [{
    path: '/',
    name: 'dashboard',
    component: resolve => require(['@/components/layouts/TabLayout'], resolve),
    hidden: false,
    redirect:"/dashboard/dashmain",
    meta: {
      "keepAlive": false,
      "internalOrExternal": false,
      "icon": "store",
      "title": "首页"
    },
    // redirectk: '/dashboard',
    children: [
      ...generateChildRouters(data)
    ]
  },
  // {
  //   "path": "*",
  //   "redirect": "/404",
  //   "hidden": true
  // }
  ]
// console.log(indexRouter)
  return indexRouter

}


// 生成嵌套路由（子路由）

function generateChildRouters(data) {
  const routers = [];

  for (var item of data) {

    let component = "";
    if (item.component.indexOf("layouts") >= 0) {
      component = "components/" + item.component;
    } else {
      component = "views/" + item.component;
    }

    // eslint-disable-next-line
    let URL = (item.meta.url || '').replace(/{{([^}}]+)?}}/g, (s1, s2) => eval(s2)) // URL支持{{ window.xxx }}占位符变量
    if (isURL(URL)) {
      item.meta.url = URL;
    }

    let menu = {
      path: item.path,
      name: item.name,
      redirect: item.redirect,
      component: resolve => require(['@/' + component + '.vue'], resolve),
      hidden: item.hidden,
      // component:()=> import(`@/views/${item.component}.vue`),
      meta: {
        title: item.meta.title,
        icon: item.meta.icon,
        url: item.meta.url,
        permissionList: item.meta.permissionList,
        keepAlive: item.meta.keepAlive,
        /*update_begin author:wuxianquan date:20190908 for:赋值 */
        internalOrExternal: item.meta.internalOrExternal
        /*update_end author:wuxianquan date:20190908 for:赋值 */
      }
    }
    if (item.alwaysShow) {
      menu.alwaysShow = true;
      menu.redirect = menu.path;
    }

    if (item.children && item.children.length > 0) {
      menu.children = [...generateChildRouters(item.children)];
    }
    //判断是否生成路由
    if (item.route && item.route === '0') {

    } else {
      routers.push(menu);
    }
  }

  return routers
}
