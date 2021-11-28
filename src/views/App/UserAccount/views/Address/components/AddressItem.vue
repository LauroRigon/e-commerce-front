<template>
    <div class="address-item">
        <div class="card">
            <div class="card-header">
                <span class="address-item__alias">{{ address.alias }}</span>
                <div class="address-item__options">
                    <router-link :to="{ name: 'account-address-update', params: { id: address.id } }">
                        <i class="fas fa-edit"></i>
                    </router-link>
                    <base-popover placement="top" target-class="dropdown-confirm">
                        <template v-slot:trigger>
                            <base-button>
                                <i class="fas fa-trash"></i>
                            </base-button>
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
                    </base-popover>
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
import BaseButton from "@/components/Base/BaseButton"
import BasePopover from "@/components/Base/popover/BasePopover"

export default {
    name: "AddressItem",
    components: { BasePopover, BaseButton },
    props: {
        address: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isDeleting: false,
            plac: "top",
        }
    },
    methods: {
        test() {
            console.log("teste")
        },
        changePlace(p) {
          this.plac = p
        },
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