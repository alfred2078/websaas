// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueLs from 'vue-ls'
import SystemConfig from '@/systemsettings'
import '@/permission'
import store from './store'
import './icons' // icon
import '@/styles/index.scss'
import i18n from './lang'
import Cookies from 'js-cookie'
import Viser from 'viser-vue'

import {
  SYS_LANGUAGE
} from "@/store/mutation-types"

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(Viser)
Vue.use(VueLs, SystemConfig.storageOptions)
// Vue.use(ElementUI)

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  mounted() {    
    store.dispatch('getLange', Cookies.get(SYS_LANGUAGE) || 'zh')
  },
  components: { App },
  template: '<App/>'
})
