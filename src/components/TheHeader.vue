<template>
  <header class="bg-dark text-light shadow">
    <nav class="container-fluid d-flex justify-content-lg-between align-items-center py-3">
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
        <router-link
            :to="{ name: 'login' }"
            class="btn btn-primary"
            v-if="!isAuthenticated"
        >
          Login
        </router-link>
        <base-button
            v-else
            variant="dark"
            @click.native.prevent="logout"
        >
          Sair
        </base-button>
      </div>
    </nav>
  </header>
</template>

<script>
import ProductSearch from "./Product/ProductSearch"
import { mapActions, mapGetters } from "vuex"
import BaseButton from "./Base/BaseButton";

export default {
  name: "TheHeader",
  components: {BaseButton, ProductSearch },
  computed: {
    ...mapGetters({ isAuthenticated: "Auth/isAuthenticated" }),
  },
  methods: {
    ...mapActions({ dispatchLogout: "Auth/logout" }),
    logout() {
      this.dispatchLogout()
    },
  },
}
</script>

<style lang="scss" scoped>
.header-center {
  width: 600px;
}
</style>