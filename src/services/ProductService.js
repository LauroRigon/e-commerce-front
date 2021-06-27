import api from "./apiClient";

export function fetchProducts(query = null) {
  return api.get("/products", { params: { search: query } })
}