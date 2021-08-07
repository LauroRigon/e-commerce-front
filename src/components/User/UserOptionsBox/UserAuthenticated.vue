<template>
    <div>
        <base-dropdown placement="bottom">
            <template v-slot:trigger="{ toggleVisibility }">
                <span @click="toggleVisibility">
                    Olá, {{ user.name }}
                </span>
            </template>

            <dropdown-link>
                <router-link class="dropdown-item" :to="{ name: 'account-profile' }">
                    Minha conta
                </router-link>
            </dropdown-link>
            <dropdown-link class="d-grid">
                <base-button
                    variant="dark"
                    @click.native.prevent="logout"
                >
                    Sair
                </base-button>
            </dropdown-link>
        </base-dropdown>
    </div>
</template>

<script>
import BaseDropdown from "@/components/Base/dropdown/BaseDropdown"
import DropdownLink from "@/components/Base/dropdown/DropdownItem"
import BaseButton from "@/components/Base/BaseButton"

export default {
    name: "UserAuthenticated",
    components: { BaseButton, DropdownLink, BaseDropdown },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        logout() {
            this.$emit("logout")
        },
    },
}
</script>

<style lang="scss" scoped>
.user-logged {
    width: 250px;
}

.user-logged__icon {
    flex-grow: 1;
    font-size: 40px;

}

.user-logged__info {
    flex-grow: 3;
}
</style>