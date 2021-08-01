<template>
    <header class="bg-dark text-light shadow">
        <nav class="header__nav container-fluid d-flex justify-content-lg-between align-items-center py-3">
            <div class="header-left">
                <router-link to="/" custom v-slot="{ navigate }">
                    <h3
                        class="logo"
                        @click="navigate"
                    >
                        E-commerce
                    </h3>
                </router-link>
            </div>
            <div class="header-center">
                <product-search />
            </div>
            <div class="header-right">
                <user-options-box />
            </div>
        </nav>
    </header>
</template>

<script>
import ProductSearch from "./Product/ProductSearch"
import UserOptionsBox from "@/components/User/UserOptionsBox/UserOptionsBox"

export default {
  name: "TheHeader",
  components: { UserOptionsBox, ProductSearch },
}
</script>

<style lang="scss" scoped>
.header-center {
  width: 600px;
}

.header__nav {
    flex-wrap: wrap;
}
</style>