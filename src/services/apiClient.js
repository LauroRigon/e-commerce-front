import axios from "axios"
import store from "@/store"

const api = axios.create({
  baseURL: "http://localhost/api/",
})

api.interceptors.request.use(function (request) {
  request.headers.common["Authorization"] = "Bearer " + store.state.Auth.token

  return request
}, function (error) {
  return Promise.reject(error);
})

export const ApiPlugin = {
  install: (Vue) => {
    Vue.prototype.$api = api
  }
}

export default api