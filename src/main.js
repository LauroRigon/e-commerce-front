import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { ApiPlugin } from "./services/apiClient"
import "./style/style.scss"
import "@/bootstrap/index"

Vue.use(ApiPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
