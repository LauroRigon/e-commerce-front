import api from "../apiClient"

export function fetchProducts(query = null) {
  return api.get("/admin/product", { params: query })
}

export function fetchProduct(id) {
  return api.get(`/admin/product/${id}`)
}