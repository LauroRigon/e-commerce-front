<template>
    <div class="address-create-page">
        <router-link :to="{ name: 'account-address' }">Voltar</router-link>
        <h3>Criar novo endereço</h3>
        <address-form
            @saved="handleSave"
            :edit-id="id"
            :edit-data="address"
        />
    </div>
</template>

<script>
import AddressForm from "@/views/UserAccount/views/Address/components/AddressForm"
import { createAddress, updateAddress, fetchAddress } from "@/services/AddressService"

export default {
    name: "AddressFormPage",
    components: { AddressForm },
    props: {
        id: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
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
            const { data } = await fetchAddress(this.id)

            this.address = data.data
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