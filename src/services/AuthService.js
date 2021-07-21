import api from "./apiClient"

export function register(userData) {
  return api.post("/register", userData)
}

export function login(email, password) {
  return api.post("/login", { email, password })
}

export function logout() {
  return api.post("/logout")
}

export function getAuthenticatedUser() {
  return api.get("/me")
}