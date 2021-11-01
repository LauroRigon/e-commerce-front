import Home from "@/views/App/Home"
import UserAccountRoutes from "@/router/App/user-account"

export default {
  path: "",
  component: () => import("@/views/App/Root"),
  children: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/busca",
      name: "search",
      component: () => import("@/views/App/Product/ProductSearchPage"),
    },
    {
      path: "/produto/:id",
      name: "product",
      props: true,
      component: () => import("@/views/App/Product/ProductPage"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/App/Auth/Register"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/App/Auth/AuthPage"),
      meta: {
        onlyGuest: true,
      },
    },
    UserAccountRoutes,
  ],
}