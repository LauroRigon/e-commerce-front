import api from "./apiClient";

export function fetchProducts(query = null) {
  return api.get("/products", { params: query })
}

export function fetchProduct(id) {
  return api.get(`/products/${id}`)
}