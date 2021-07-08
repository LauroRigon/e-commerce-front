<template>
  <section class="product-search-page">
    <div class="product-search-filters">

    </div>
    <div class="product-list-container">
      <template v-if="isLoading">
        <app-loading />
      </template>
      <template v-else>
        <h2 v-show="query.search">Resultados da pesquisa por: "{{ query.search }}"</h2>
        <template
            v-if="!!products.length"
        >
          <product-list
              :products="products"
          />
          <app-pagination
              v-if="pagination.total"
              :length="pagination.last_page"
              :current="pagination.current_page"
              @change-page="changePage"
          />
        </template>
        <p v-else>
          Sem resultados para pesquisa
        </p>
      </template>
    </div>
  </section>
</template>

<script>
import ProductList from "@/components/Product/ProductList";
import { fetchProducts } from "@/services/ProductService";
import AppPagination from "../../components/AppPagination";
import AppLoading from "../../components/AppLoading";

export default {
  name: "ProductSearchPage",
  components: {
    AppLoading,
    AppPagination,
    ProductList,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
    }
  },
  created() {
    this.fetchProducts()
  },
  computed: {
    query() {
      return this.$route.query;
    }
  },
  watch: {
    query() {
      this.fetchProducts()
    }
  },
  methods: {
    async fetchProducts() {
      this.isLoading = true
      this.products = []

      const { data } = await fetchProducts(this.query)

      this.products = data.data
      this.pagination = data.meta
      this.isLoading = false
    },
    changePage(page) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page,
        }
      })
    },
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
