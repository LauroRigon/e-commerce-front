import api from "./apiClient"

export function createAddress(addressData) {
  return api.post("/address", addressData)
}

export function updateAddress(id, addressData) {
  return api.put(`/address/${id}`, addressData)
}

export function fetchAddress(id) {
  return api.get(`/address/${id}`)
}

export function listAddress() {
  return api.get("/address")
}

export function deleteAddress(id) {
  return api.delete(`/address/${id}`)
}