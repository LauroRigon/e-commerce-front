const USER_OBJECT_KEY = "auth-user"
const TOKEN_KEY = "auth-token"

export default store => {
  const userObject = window.localStorage.getItem(USER_OBJECT_KEY)
  const userToken = window.localStorage.getItem(TOKEN_KEY)

  if (userObject && userToken) {
    store.commit("Auth/SET_USER", JSON.parse(userObject))
    store.commit("Auth/SET_TOKEN", JSON.parse(userToken))
  }

  store.subscribe((mutation) => {
    if (mutation.type === "Auth/SET_USER") {
      window.localStorage.setItem(USER_OBJECT_KEY, JSON.stringify(mutation.payload))
    }

    if (mutation.type === "Auth/SET_TOKEN") {
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(mutation.payload))
    }
  })
}