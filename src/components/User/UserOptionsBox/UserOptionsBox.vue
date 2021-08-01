<template>
    <div class="user-options-box d-flex align-items-center justify-content-between">
        <div class="user-options-box__icon">
            <i class="fas fa-user "></i>
        </div>
        <div class="user-options-box__info">
            <user-authenticated
                v-if="isAuthenticated"
                :user="userAuthenticated"
                @logout="logout"
            />
            <user-guest v-else/>
        </div>
    </div>
</template>

<script>
import UserAuthenticated from "@/components/User/UserOptionsBox/UserAuthenticated"
import UserGuest from "@/components/User/UserOptionsBox/UserGuest"
import { mapActions, mapGetters } from "vuex"

export default {
    name: "UserOptionsBox",
    components: { UserGuest, UserAuthenticated },
    computed: {
        ...mapGetters({
            isAuthenticated: "Auth/isAuthenticated",
            userAuthenticated: "Auth/user",
        }),
    },
    methods: {
        ...mapActions({ dispatchLogout: "Auth/logout" }),
        logout() {
            this.dispatchLogout()
        },
    },
}
</script>

<style scoped>
.user-options-box {
    width: 180px;
}

.user-options-box__icon {
    flex-grow: 1;
    font-size: 40px;
}

.user-options-box__info {
    flex-grow: 3;
}
</style>