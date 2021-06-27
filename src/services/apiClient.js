import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost/api/",
})

export const ApiPlugin = {
  install: (Vue) => {
    Vue.prototype.$api = api
  }
}

export default api