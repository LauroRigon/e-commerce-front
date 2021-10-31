<template>
    <router-view/>
</template>

<script>

export default {
    created() {
        this.$store.dispatch("Auth/fetchAuthenticatedUser")
    },
}
</script>

<style lang="scss">
</style>