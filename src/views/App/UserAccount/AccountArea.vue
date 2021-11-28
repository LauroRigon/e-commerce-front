<template>
    <section class="d-flex align-items-start mt-3">
        <nav class="nav nav-pills flex-column">
            <router-link class="nav-link" :to="{ name: 'account-profile' }" exact active-class="active">Conta</router-link>
            <router-link class="nav-link" :to="{ name: 'account-address' }" exact active-class="active">Endereços</router-link>
            <!--            <router-link class="nav-link" :to="{ name: 'account-orders' }" exact active-class="active">Pedidos</router-link>-->
        </nav>
        <div class="flex-grow-1 container card shadow-sm">
            <div class="card-body">
                <router-view />
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "AccountArea",
  computed: {
    ...mapGetters({ user: "Auth/user" }),
  },
}
</script>

<style scoped>
nav {
  flex-basis: 200px;
  margin-left: 10px;
}
</style>