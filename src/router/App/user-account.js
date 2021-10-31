export default {
  path: "/account",
  component: () => import("@/views/App/UserAccount/AccountArea"),
  meta: {
    isProtected: true,
  },
  children: [
    {
      path: "/",
      name: "account-profile",
      component: () => import("@/views/App/UserAccount/views/Profile/ProfileIndexPage"),
    },
    {
      path: "address",
      name: "account-address",
      component: () => import("@/views/App/UserAccount/views/Address/AddressIndexPage"),
    },
    {
      path: "address/create",
      name: "account-address-create",
      component: () => import("@/views/App/UserAccount/views/Address/AddressFormPage"),
    },
    {
      path: "address/update/:id",
      name: "account-address-update",
      props: true,
      component: () => import("@/views/App/UserAccount/views/Address/AddressFormPage"),
    },
  ],
}