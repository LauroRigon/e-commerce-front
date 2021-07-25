import Home from "@/views/Home"

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/busca",
    name: "search",
    component: () => import("@/views/Product/ProductSearchPage"),
  },
  {
    path: "/produto/:id",
    name: "product",
    props: true,
    component: () => import("@/views/Product/ProductPage"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Auth/Register"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Auth/AuthPage"),
    meta: {
      onlyGuest: true,
    },
  },
  {
    path: "/account",
    component: () => import("@/views/UserAccount/AccountArea"),
    meta: {
      isProtected: true,
    },
    children: [
      {
        path: "/",
        name: "account-profile",
        component: () => import("@/views/UserAccount/views/Profile/ProfileIndexPage"),
      },
      {
        path: "address",
        name: "account-address",
        component: () => import("@/views/UserAccount/views/Address/AddressIndexPage"),
      },
      {
        path: "address/create",
        name: "account-address-create",
        component: () => import("@/views/UserAccount/views/Address/AddressFormPage"),
      },
      {
        path: "address/update/:id",
        name: "account-address-update",
        props: true,
        component: () => import("@/views/UserAccount/views/Address/AddressFormPage"),
      },
    ],
  },
]