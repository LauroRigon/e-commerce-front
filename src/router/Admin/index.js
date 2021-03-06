export default {
  path: "/admin",
  component: () => import("@/views/Admin/Root"),
  meta: {
    isProtected: true,
  },
  children: [
    {
      path: "/",
      name: "admin",
      component: () => import("@/views/Admin/Product/ProductsIndex"),
    },
    {
      path: "products",
      name: "admin.products",
      component: () => import("@/views/Admin/Product/ProductsIndex"),
      meta: {
        title: "Produtos",
      },
    },
    {
      path: "users",
      name: "admin.users",
      component: () => import("@/views/Admin/User/UsersIndex"),
      meta: {
        title: "Usuários",
      },
    },
  ],
}