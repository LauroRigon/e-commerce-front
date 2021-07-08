<template>
  <section>
    <h1 class="text-dark text-center">Compre ou Venda</h1>
    <product-list :products="products"/>
  </section>
</template>

<script>
import ProductList from "../components/Product/ProductList"
import { fetchProducts } from "@/services/ProductService"

export default {
  name: "Home",
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      const { data } = await fetchProducts()

      this.products = data.data
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
