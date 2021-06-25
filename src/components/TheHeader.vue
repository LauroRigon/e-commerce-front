<template>
  <header class="bg-dark text-light shadow">
    <nav class="container-fluid d-flex justify-content-lg-between align-items-center py-3">
      <div class="header-left">
        <router-link to="/" class="logo" tag="h3">
          E-commerce
        </router-link>
      </div>
      <div class="header-right">
        <router-link to="/login" class="btn btn-primary">
          Login
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="scss" scoped>

</style>