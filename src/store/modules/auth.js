import { getAuthenticatedUser, login, register } from "@/services/AuthService"
import { logout } from "@/services/AuthService"
import router from "@/router"
import { updateAccount } from "@/services/AccountService"

export default {
  namespaced: true,
  state: {
    user: {},
    token: "",
    items: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
  },
  actions: {
    async register({ commit }, userData) {
        const { data } = await register(userData)

        commit("SET_USER", data.data.user)
        commit("SET_TOKEN", data.data.token)
    },
    async login({ commit }, { email, password }) {
        const { data } = await login(email, password)

        commit("SET_USER", data.data.user)
        commit("SET_TOKEN", data.data.token)
    },
    async logout({ commit }) {
        await logout()

        commit("SET_USER", {})
        commit("SET_TOKEN", "")

      router.push({ name: "home" })
    },
    async fetchAuthenticatedUser({ commit }) {
      const { data } = await getAuthenticatedUser()

      commit("SET_USER", data.data)
    },
    async updateUser({ commit }, { id, userData }) {
      const { data } = await updateAccount(id, userData)
      commit("SET_USER", data.data)

      return data.data
    },
  },
  getters: {
    isAuthenticated(store) {
      return !!store.token
    },
    user(store) {
      return store.user
    },
  },
}