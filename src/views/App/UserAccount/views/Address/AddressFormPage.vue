<template>
    <div class="address-create-page">
        <router-link :to="{ name: 'account-address' }">Voltar</router-link>
        <h3>Criar novo endereço</h3>
        <app-loading v-if="isLoadingAddress"/>
        <address-form
            v-else
            @saved="handleSave"
            :edit-id="id"
            :edit-data="address"
        />
    </div>
</template>

<script>
import AddressForm from "@/views/App/UserAccount/views/Address/components/AddressForm"
import { fetchAddress } from "@/services/AddressService"
import AppLoading from "@/components/AppLoading"

export default {
    name: "AddressFormPage",
    components: { AppLoading, AddressForm },
    props: {
        id: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            isLoadingAddress: false,
            address: null,
        }
    },
    created() {
        if (this.id) {
            this.fetchAddress()
        }
    },
    methods: {
        async fetchAddress() {
            this.isLoadingAddress = true
            const { data } = await fetchAddress(this.id)

            this.address = data.data
            this.isLoadingAddress = false
        },
        handleSave() {
            this.$router.push({ name: "account-address" })
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