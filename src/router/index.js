import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import ProductSearchPage from "@/views/Product/ProductSearchPage"
import ProductPage from "@/views/Product/ProductPage"
import UserAccount from "@/views/UserAccount/UserAccount";
import Register from "@/views/Auth/Register";
import AuthPage from "@/views/Auth/AuthPage";

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
  {
    path: "/produto/:id",
    name: "product",
    props: true,
    component: ProductPage,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: AuthPage,
  },
  {
    path: "/account",
    name: "user-account",
    component: UserAccount,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 })
  }
})

export default router
