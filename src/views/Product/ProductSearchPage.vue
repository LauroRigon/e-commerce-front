<template>
  <section class="product-search-page">
    <div class="product-search-filters">

    </div>
    <div class="product-list-container">
      <h2>Resultados da pesquisa por: "{{ searchQuery }}"</h2>
      <product-list
          v-if="!!products.length"
          :products="products"
      />
      <p v-else>
        Sem resultados para pesquisa
      </p>
    </div>
  </section>
</template>

<script>
import ProductList from "@/components/Product/ProductList";
import { fetchProducts } from "@/services/ProductService";

export default {
  name: "ProductSearchPage",
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
  computed: {
    searchQuery() {
      return this.$route.query.q;
    }
  },
  watch: {
    searchQuery() {
      this.fetchProducts()
    }
  },
  methods: {
    async fetchProducts() {
      const { data } = await fetchProducts(this.searchQuery)

      this.products = data.data
    }
  }
}
</script>

<style lang="scss" scoped>

.product-search-page {
  display: grid;
  //grid-template-columns: fit-content(300px) auto;
  grid-template-columns: 300px auto;
  grid-gap: 10px;

  .product-search-filters {
    border: 1px solid red;
  }

  .product-list-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px 10px;
  }
}

</style>
