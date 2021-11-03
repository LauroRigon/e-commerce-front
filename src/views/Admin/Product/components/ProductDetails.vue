<template>
    <div class="product-details">
        <img :src="product.image" class="product-details__image">

        <h3 class="text-center pt-2">{{ product.name }}</h3>

        <p class="well">{{ product.description }}</p>
    </div>
</template>

<script>
export default {
    name: "ProductDetails",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/style/style";

.product-details {
    color: $body-bg;

    &__image {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
    }
}
</style>