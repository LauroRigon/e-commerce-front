<template>
  <ul
      class="product-list"
  >
    <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </ul>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductList",
  components: {ProductItem},
  props: {
    products: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/style/style.scss';

.product-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

@include media-breakpoint-down(xl) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include media-breakpoint-down(md) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

//.animate-list-move {
//  transition: transform .3s;
//}
.animate-list-enter,
.animate-list-leave-to {
  opacity: 0;
  transform: translateY(-5%);
}

.animate-list-enter-active,
.animate-list-leave-active {
  transition: all .2s;
}

.animate-list-enter-to {
  transform: translateY(0);
}
</style>