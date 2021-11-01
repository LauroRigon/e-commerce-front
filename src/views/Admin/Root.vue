<template>
    <div>
        <notification-container/>
        <div class="page__wrapper">
            <side-menu />
            <main class="flex-grow-1">
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script>
import NotificationContainer from "@/components/Notification/NotificationContainer"
import SideMenu from "@/views/Admin/components/SideMenu"

export default {
    components: { SideMenu, NotificationContainer },
    created() {
        this.$store.dispatch("Auth/fetchAuthenticatedUser")
    },
}
</script>

<style lang="scss">
#app {
    min-height: 100vh;
}
.page__wrapper {
    display: flex;
    flex-direction: row;
}
</style>