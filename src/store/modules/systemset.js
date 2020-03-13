/*系统参数的设置*/
import { SYS_LANGUAGE } from "@/store/mutation-types";
import Vue from 'vue'
import Cookies from 'js-cookie'

const systemset = {
    state: {
        language: ''
    },
    actions: {
        getLange({ commit }, language) { 
            Cookies.set(SYS_LANGUAGE,language)
            commit("SET_LANGUAGE", language);
        }
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            
            state.language = language
        }
    }
}

export default systemset