<template>
    <div class="product-page container">
        <app-loading v-if="!product"/>
        <div
            v-else
            class="product-view row gx-5"
        >
            <div class="product-gallery col-6">
                <figure>
                    <img
                        v-if="product.image"
                        :src="product.image"
                        class="product-gallery__img img-fluid"
                    />
                </figure>
            </div>
            <div class="product-buy-info col-6">
                <h3 class="product-buy-info__title">{{ product.name }}</h3>
                <p class="product-buy-info__price">
                    <del v-if="product.discount">{{ asMoney(product.original_price) }}</del>
                    <ins>{{ asMoney(product.price) }}</ins>
                </p>
                <div class="row">
                    <div class="col-3">
                        <base-input
                            label="Quantidade"
                            type="number"
                            v-model="buyForm.quantity"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchProduct } from "@/services/ProductService"
import AppLoading from "../../../components/AppLoading"
import BaseInput from "@/components/Base/BaseInput"
import { formatMoney } from "@/helpers/currency"

export default {
    name: "ProductPage",
    components: { BaseInput, AppLoading },
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
            buyForm: {
                quantity: 1,
            },
        }
    },
    created() {
        this.fetchProduct()
    },
    methods: {
        asMoney(value) {
            return formatMoney(value)
        },
        async fetchProduct() {
            this.isLoading = true

            const { data } = await fetchProduct(this.id)

            this.product = data.data
            this.isLoading = false
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../../style/style';

.product-view {
    display: flex;
}

.product-gallery {
    .product-gallery__img {
        width: 100%;
    }
}

.product-buy-info {
    width: 500px;
}

.product-buy-info {

    &__price {
        del {
            display: block;
            font-size: 2rem;
            color: $gray-500;
        }

        ins {
            display: block;
            text-decoration: none;
            font-size: 2.3rem;
            font-weight: bold;
            color: $primary;
        }
    }
}
</style>