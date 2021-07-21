import Vue from "vue"
import Vuex from "vuex"
import Auth from "./modules/auth"
import persistUserSession from "@/store/plugins/persistUserSession"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistUserSession],
  modules: {
    Auth,
  },
})
