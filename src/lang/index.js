import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import Cookies from 'js-cookie'
import {
  SYS_LANGUAGE
} from "@/store/mutation-types"

Vue.use(VueI18n)


const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({

  locale: Cookies.get(SYS_LANGUAGE) || 'zh',

  messages
})

export default i18n
