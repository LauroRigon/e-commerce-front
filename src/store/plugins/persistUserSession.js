const TOKEN_KEY = "auth-token"

export default store => {
  const userToken = window.localStorage.getItem(TOKEN_KEY)

  if (userToken) {
    store.commit("Auth/SET_TOKEN", JSON.parse(userToken))
  }

  store.subscribe((mutation) => {
    if (mutation.type === "Auth/SET_TOKEN") {
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(mutation.payload))
    }
  })
}