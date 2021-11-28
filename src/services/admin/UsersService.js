import api from "../apiClient"

export function fetchUsers(query = null) {
  return api.get("/admin/user", { params: query })
}

export function fetchUser(id) {
  return api.get(`/admin/user/${id}`)
}

export function fetchPermissions(id) {
  return api.get(`admin/user/${id}/roles`)
}