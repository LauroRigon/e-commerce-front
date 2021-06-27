import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { ApiPlugin } from "./services/apiClient"
import "./style/style.scss"

console.log(ApiPlugin)
Vue.use(ApiPlugin)

Vue.filter("money", function(value) {
  return `${value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
