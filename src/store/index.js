import { createStore } from "vuex"
import Auth from "./modules/auth"
import persistUserSession from "@/store/plugins/persistUserSession"

export default createStore({
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
