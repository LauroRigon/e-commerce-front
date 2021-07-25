<template>
    <div class="address-item">
        <div class="card">
            <div class="card-header">
                <span class="address-item__alias">{{ address.alias }}</span>
                <div class="address-item__options">
                    <router-link :to="{ name: 'account-address-update', params: { id: address.id } }">
                        <i class="fas fa-edit"></i>
                    </router-link>
                    <base-dropdown drop-side="top-middle" target-class="dropdown-confirm">
                        <template v-slot:trigger="{ toggleVisibility }">
                            <a
                                href="#"
                                @click="toggleVisibility"
                            >
                                <i class="fas fa-trash"></i>
                            </a>
                        </template>

                        <p>Remover endereço?</p>
                        <div class="d-grid">
                            <base-button
                                variant="danger"
                                @click.native.prevent="deleteAddress"
                                :loading="isDeleting"
                            >
                                Confirmar
                            </base-button>
                        </div>
                    </base-dropdown>
                </div>
            </div>
            <div class="card-body">
                <div>{{ address.address }} - {{ address.complement }}</div>
                <div>{{ address.cep }} - {{ address.district }}</div>
                <div>{{ address.city }}/{{ address.state }}</div>
            </div>
        </div>
    </div>
</template>

<script>

import { deleteAddress } from "@/services/AddressService"
import BaseDropdown from "@/components/Base/dropdown/BaseDropdown"
import BaseButton from "@/components/Base/BaseButton"

export default {
    name: "AddressItem",
    components: { BaseButton, BaseDropdown },
    props: {
        address: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isDeleting: false,
        }
    },
    methods: {
        async deleteAddress() {
            this.isDeleting = true
            await deleteAddress(this.address.id)

            this.$emit("address-deleted")
            this.isDeleting = false
        },
    },
}
</script>

<style lang="scss" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
}

.address-item__options {
    i {
        margin: 0 3px;
    }
}

.dropdown__content {
    p {
        text-align: center;
    }
}
</style>

<style lang="scss">
.dropdown-confirm {
    padding: 10px;
    width: 250px;
}
</style>