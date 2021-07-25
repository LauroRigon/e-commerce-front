<template>
    <div class="card">
        <div class="card-header">
            <span class="address-item__alias">{{ address.alias }}</span>
            <div class="address-item__options">
                <router-link :to="{ name: 'account-address-update', params: { id: address.id } }">
                    <i class="fas fa-edit"></i>
                </router-link>
            </div>
        </div>
        <div class="card-body">
            {{ address }}
        </div>
    </div>
</template>

<script>

export default {
    name: "AddressItem",
    props: {
        address: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {}
    },
}
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
}
</style>