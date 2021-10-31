<template>
    <li id="app" class="d-flex flex-column">
        <notification-container/>
        <the-header/>
        <main class="flex-grow-1">
            <router-view/>
        </main>
        <the-footer/>
    </li>
</template>

<script>
import TheHeader from "../../components/TheHeader"
import TheFooter from "../../components/TheFooter"
import NotificationContainer from "@/components/Notification/NotificationContainer"

export default {
    components: { NotificationContainer, TheFooter, TheHeader },
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