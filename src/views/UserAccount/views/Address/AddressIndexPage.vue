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
                <address-item
                    v-for="address in addresses"
                    :key="address.id"
                    :address="address"
                />
            </div>
        </transition>
    </div>
</template>

<script>


import AddressItem from "@/views/UserAccount/views/Address/components/AddressItem"
import { listAddress } from "@/services/AddressService"
import AppLoading from "@/components/AppLoading"

export default {
    name: "AddressIndexPage",
    components: { AppLoading, AddressItem },
    data() {
        return {
            isLoading: false,
            addresses: [],
        }
    },
    created() {
        this.fetchAddresses()
    },
    methods: {
        async fetchAddresses() {
            this.isLoading = true
            const { data } = await listAddress()

            this.addresses = data.data
            this.pagination = data.meta

            this.isLoading = false
        },
    },
}
</script>

<style scoped>
.address-list-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    grid-gap: 15px;
}
</style>