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
  ],
}