import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import ProductSearchPage from "@/views/Product/ProductSearchPage"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/busca",
    name: "search",
    component: ProductSearchPage,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
