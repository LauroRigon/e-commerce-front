<template>
<div class="product-page">
  <app-loading v-if="!product"/>
  <div
      v-else
      class="product-summary"
  >
    {{ product }}
    <div class="product-gallery">
      <figure>
        <img
            v-if="product.image"
            :src="product.image"
            class="img-fluid"
        />
      </figure>
    </div>
  </div>
</div>
</template>

<script>
import { fetchProduct } from "@/services/ProductService";
import AppLoading from "../../components/AppLoading";

export default {
  name: "ProductPage",
  components: {AppLoading},
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      product: null,
      isLoading: false,
    }
  },
  created() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      this.isLoading = true

      const { data } = await fetchProduct(this.id)

      this.product = data.data
      this.isLoading = false
    }
  },
}
</script>

<style scoped>

</style>