<template>
    <div class="product-search">
        <form @submit.prevent="searchProducts">
            <input
                id="searchInput"
                name="search"
                type="text"
                placeholder="Pesquise aqui..."
                v-model="searchText"
            >
        </form>
    </div>
</template>

<script>
export default {
  name: "ProductSearch",
  data() {
    return {
      searchText: "",
    }
  },
  mounted() {
    this.searchText = this.$route.query.search
  },
  methods: {
    searchProducts() {
      this.$router.push({ name: "search", query: { search: this.searchText } })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/style/style.scss';

.product-search {

  #searchInput {
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: $border-radius;
    box-shadow: 0 4px 8px $gray-700;
    outline: none;
    transition: all 0.2s;

    &:focus,
    &:hover {
      background-color: $body-bg;
      transform: scale(1.01);
    }
  }


}
</style>