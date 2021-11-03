<template>
    <div>
        <notification-container/>
        <div class="page__wrapper">
            <side-menu
                @menu-opened="menuCondensed = false"
                @menu-closed="menuCondensed = true"
            />
            <main class="flex-grow-1 content-wrapper" :class="{'full-width': menuCondensed}">
                <h2>{{ $route.meta.title }}</h2>
                <div class="card">
                    <div class="card-body">
                        <router-view/>
                    </div>
                </div>
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
    data() {
        return {
            menuCondensed: false,
        }
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

.content-wrapper {
    padding: 15px;
    margin-left: 240px;
    transition: margin-left .1s ease-in-out;

    &.full-width {
        margin-left: 50px;
    }
}
</style>