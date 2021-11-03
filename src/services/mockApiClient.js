import axios from "axios"
import store from "@/store"

const api = axios.create({
  baseURL: "https://e3235d62-5817-49fa-8967-0e1623ea35ab.mock.pstmn.io/api/",
})

api.interceptors.request.use(function (request) {
  request.headers.common["Authorization"] = "Bearer " + store.state.Auth.token

  return request
}, function (error) {
  return Promise.reject(error)
})

export default api