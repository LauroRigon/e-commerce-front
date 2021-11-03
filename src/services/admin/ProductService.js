import api from "../mockApiClient"

export function fetchProducts(query = null) {
  return api.get("/admin/products", { params: query })
}

export function fetchProduct(id) {
  return api.get(`/admin/products/${id}`)
}