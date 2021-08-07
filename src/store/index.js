import Vue from "vue"
import Vuex from "vuex"
import Auth from "./modules/auth"
import persistUserSession from "@/store/plugins/persistUserSession"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistUserSession],
  state: {
    notifications: [],
  },
  mutations: {
    addNotification(state, notification) {
      let randomId = Math.floor(Math.random() * 90000)
      state.notifications.push({ id: randomId, ...notification })
    },
    removeNotification(state, id) {
      state.notifications = this.state.notifications.filter(notification => notification.id !== id)
    },
  },
  modules: {
    Auth,
  },
})
