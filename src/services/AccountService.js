import api from "./apiClient"

export function updateAccount(id, accountData) {
  return api.put(`account/${id}`, accountData)
}