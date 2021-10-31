<template>
    <li id="app" class="d-flex flex-column">
        <notification-container/>
        <main class="flex-grow-1">
            <router-view/>
        </main>
    </li>
</template>

<script>
import NotificationContainer from "@/components/Notification/NotificationContainer"

export default {
    components: { NotificationContainer },
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