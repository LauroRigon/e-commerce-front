import { createWebHistory } from "vue-router"
import routes from "@/router/routes"
import store from "@/store"
import { createRouter } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 })
  },
})

/**
 * @param {String} attribute
 * @param {Array} routes
 */
function getInheritanceMetaAttribute(attribute, routes) {
  return routes.reduce((acc, route) => {
    if (attribute in route.meta) {
      return route.meta[attribute]
    }

    return acc
  }, false)
}

router.beforeEach((routeTo, routeFrom, next) => {
  const isAuthenticated = store.getters["Auth/isAuthenticated"]
  const isProtectedRoute = getInheritanceMetaAttribute("isProtected", routeTo.matched)
  const isOnlyGuestRoute = getInheritanceMetaAttribute("onlyGuest", routeTo.matched)

  if (isOnlyGuestRoute && isAuthenticated) {
    return next(routeFrom)
  }

  if (!isProtectedRoute) {
    return next()
  }

  if (isAuthenticated) {
    return next()
  }

  return next({ name: "login" })
})

export default router
