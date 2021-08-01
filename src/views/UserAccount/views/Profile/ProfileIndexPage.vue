<template>
    <div>
        <h3 class="card-title">Seu cadastro</h3>
        <transition name="fade" mode="out-in">
            <app-loading v-if="isLoading"/>
            <profile-form
                v-else
                :edit-id="profile.id"
                :edit-data="profile"
            />
        </transition>
    </div>
</template>

<script>
import ProfileForm from "@/views/UserAccount/views/Profile/components/ProfileForm"
import { mapActions } from "vuex"
import AppLoading from "@/components/AppLoading"

export default {
    name: "ProfileIndexPage",
    components: { AppLoading, ProfileForm },
    data() {
        return {
            isLoading: false,
            profile: {},
        }
    },
    created() {
        this.isLoading = true

        this.fetchUser()
            .then(() => {
                this.profile = this.$store.getters["Auth/user"]
            })
            .finally(() => this.isLoading = false)
    },
    methods: {
        ...mapActions({ fetchUser: "Auth/fetchAuthenticatedUser" }),
    },
}
</script>

<style scoped>

</style>