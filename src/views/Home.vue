<template>
  <section>
    <h1 class="text-dark text-center">Compre ou Venda</h1>
    <product-search />
    <product-list />
  </section>
</template>

<script>
import ProductSearch from "../components/Products/ProductSearch";
import ProductList from "../components/Products/ProductList";
export default {
  name: "Home",
  components: {
    ProductList,
    ProductSearch,
  },
}
</script>

<style lang="scss" scoped>

</style>
