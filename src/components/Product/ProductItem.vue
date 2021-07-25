<template>
    <li class="product-item card">
        <div class="product-item__img-container" @click="handleProductClick">
            <img
                class="card-img-top"
                v-if="product.image"
                :src="product.image"
            />
            <span class="badge bg-danger product-item__discont" v-if="product.discount">{{ product.discount }}% OFF</span>
        </div>
        <div class="card-body">
            <h2 class="product-item__name">{{product.name}}</h2>
            <p class="product-item__price">
                <del v-if="product.discount">{{ product.original_price | money }}</del>
                <ins>{{ product.price | money }}</ins>
            </p>
        </div>
    </li>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleProductClick() {
      this.$router.push({ name: "product", params: { id: this.product.id } })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/style/style.scss';

.product-item {
  transition: all .2s;
  overflow: hidden;
  cursor: pointer;

  .card-img-top {
    border-bottom: 1px solid $body-bg;
  }

  .card-body {
    padding: 10px 20px;
  }

  &:hover {
     box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
     //transform: scale(1.01);
     z-index: 1;
   }

  &__name {
    font-size: 18px;
    color: $gray-600;
  }

  &__price {
    del {
      display: block;
      font-size: 12px;
      color: $gray-500;
    }

    ins {
      display: block;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      color: $primary;
    }
  }

  &__img-container {
    position: relative;
  }

  &__discont {
    position: absolute;
    bottom: -9px;
    left: 15px;
  }
}

</style>