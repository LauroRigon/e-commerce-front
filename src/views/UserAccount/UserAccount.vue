<template>
<div>User account {{ user }}</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "UserAccount",
  computed: {
    ...mapGetters({ user: "Auth/user" })
  },
}
</script>

<style scoped>

</style>