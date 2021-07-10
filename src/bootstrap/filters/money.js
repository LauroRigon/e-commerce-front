import Vue from "vue"

Vue.filter("money", function(value) {
  return `${value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
})