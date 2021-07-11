import Home from "@/views/Home"
import ProductSearchPage from "@/views/Product/ProductSearchPage"
import ProductPage from "@/views/Product/ProductPage"
import Register from "@/views/Auth/Register"
import AuthPage from "@/views/Auth/AuthPage"
import AccountArea from "@/views/UserAccount/AccountArea"
import ProfileIndexPage from "@/views/UserAccount/views/Profile/ProfileIndexPage"
import AddressIndexPage from "@/views/UserAccount/views/Address/AddressIndexPage"

export default [
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
    meta: {
      onlyGuest: true,
    }
  },
  {
    path: "/account",
    component: AccountArea,
    meta: {
      isProtected: true,
    },
    children: [
      {
        path: "/",
        name: "account-profile",
        component: ProfileIndexPage,
      },
      {
        path: "address",
        name: "account-address",
        component: AddressIndexPage,
      },
    ],
  },
]