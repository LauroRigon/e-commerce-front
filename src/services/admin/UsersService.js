import api from "../apiClient"

export function fetchUsers(query = null) {
  return api.get("/admin/user", { params: query })
}

export function fetchProduct(id) {
  return api.get(`/admin/user/${id}`)
}