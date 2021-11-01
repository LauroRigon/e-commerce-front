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
#app {
    min-height: 100vh;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter-to {
    opacity: 1;
}
</style>