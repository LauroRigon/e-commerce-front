<template>
    <div>
        <transition name="fade" mode="out-in">
            <app-loading v-if="isLoading" />
            <div v-else>
                <base-table
                    :headers="table.headers"
                    :data="data"
                >
                    <template #image="{ item } ">
                        <img :src="item.image" style="width: 50px; height: 50px;">
                    </template>

                    <template #original_price="{ item } ">R$ {{item.price}}</template>

                    <template #stock="{ item }">{{item.stock}}</template>

                    <template #actions="{ item }">
                        <button class="btn btn-info" @click.prevent="openDetails(item)">
                            <i class="fas fa-eye"></i>
                        </button>
                    </template>
                </base-table>

                <app-pagination
                    v-if="pagination.total"
                    :length="pagination.last_page"
                    :current="pagination.current_page"
                    @change-page="changePage"
                />
            </div>
        </transition>
        <app-quick-details :open="!!itemDetailed" @close="itemDetailed = null">
            <product-details :product="itemDetailed" />
        </app-quick-details>
    </div>
</template>

<script>
import BaseTable from "@/components/Base/BaseTable"
import AppPagination from "@/components/AppPagination"
import AppLoading from "@/components/AppLoading"
import { fetchProducts } from "@/services/ProductService"
import ListingIndex from "@/mixins/ListingIndex"
import AppQuickDetails from "@/components/AppQuickDetails"
import ProductDetails from "@/views/Admin/Product/components/ProductDetails"

export default {
    components: { ProductDetails, AppQuickDetails, BaseTable, AppPagination, AppLoading },
    mixins: [ ListingIndex ],
    data() {
        return {
            table: {
                headers: [
                    {
                        name: "Img",
                        key: "image",
                    },
                    {
                        name: "Nome",
                        key: "name",
                    },
                    {
                        name: "Descrição",
                        key: "description",
                    },
                    {
                        name: "Valor (Original)",
                        key: "original_price",
                    },
                    {
                        name: "Estoque (Qtd)",
                        key: "stock",
                    },
                    {
                        name: "Ações",
                        key: "actions",
                    },
                ],
            },
            itemDetailed: null,
        }
    },
    methods: {
        async getRequest(q) {
            return fetchProducts(q)
        },
        openDetails(item) {
            this.itemDetailed = item
        },
    },
}
</script>

<style lang="scss">

</style>