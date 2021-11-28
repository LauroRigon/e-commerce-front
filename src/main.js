import { createApp } from "vue"
import App from "./views/App.vue"
import router from "./router"
import store from "./store"
import { ApiPlugin } from "./services/apiClient"
import "./style/style.scss"
// import "@/bootstrap/index"
import "@fortawesome/fontawesome-free/css/all.css"
import { maska } from "maska"

const app = createApp(App)
app.use(ApiPlugin)
app.directive("maska", maska)
app.use(store)
app.use(router)

app.mount("#app")
