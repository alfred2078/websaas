import Vuex from 'vuex'
import Vue from 'vue'
import loginusers from './modules/loginusers'
import menuuser from './modules/menuuser'
import systemset from './modules/systemset'
import getters from './getters'

Vue.use(Vuex)

const store =  new Vuex.Store({
    modules:{
        loginusers,
        menuuser,
        systemset
    },
    getters
})

export default store
