<template>
    <div class="address-page">
        <h3>Endereços</h3>
        <router-link :to="{ name: 'account-address-create' }" class="btn btn-primary mb-2">Novo endereço</router-link>
        <transition name="fade" mode="out-in">
            <app-loading v-if="isLoading" />
            <div
                v-else
                class="address-list-wrapper"
            >
                <p v-if="!data.length" class="text-center">
                    Nenhum endereço cadastrado
                </p>
                <address-item
                    v-else
                    v-for="address in data"
                    :key="address.id"
                    :address="address"
                    @address-deleted="loadData"
                />
            </div>
        </transition>
    </div>
</template>

<script>


import AddressItem from "@/views/App/UserAccount/views/Address/components/AddressItem"
import { listAddress } from "@/services/AddressService"
import AppLoading from "@/components/AppLoading"
import ListingIndex from "@/mixins/ListingIndex"

export default {
    name: "AddressIndexPage",
    components: { AppLoading, AddressItem },
    mixins: [ ListingIndex ],
    data() {
        return {
            data: [],
        }
    },
    methods: {
        async getRequest(q) {
            return listAddress(q)
        },
    },
}
</script>

<style lang="scss" scoped>
.address-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .address-item {
        min-width: 300px;
        width: 100%;
        padding: 3px 10px;

    }
    @media (min-width: 826px) {
        .address-item {
            width: 50%;
        }
    }
}
</style>