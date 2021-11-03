<template>
    <div class="notification-container" v-if="notifications.length">
        <transition-group name="fade">
            <notification-toast
                v-for="notification in notifications"
                :key="notification.id"
                :id="notification.id"
                :type="notification.type"
                :title="notification.title"
                :message="notification.message"
            />
        </transition-group>
    </div>
</template>

<script>
import NotificationToast from "@/components/Notification/NotificationToast"

export default {
    name: "NotificationContainer",
    components: { NotificationToast },
    computed: {
        notifications() {
            return this.$store.state.notifications
        },
    },
}
</script>

<style lang="scss" scoped>
.notification-container {
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 10px;
    z-index: 9999;
}
</style>