<template>
    <div>
        <h3 class="card-title">Seu cadastro</h3>
        <profile-form :edit-id="profile.id" :edit-data="profile"/>
    </div>
</template>

<script>
import ProfileForm from "@/views/UserAccount/views/Profile/components/ProfileForm"
import { mapActions } from "vuex"


export default {
  name: "ProfileIndexPage",
  components: { ProfileForm },
  data() {
    return {
      profile: {},
    }
  },
  created() {
    this.fetchUser()
    .then(() => {
      this.profile = this.$store.getters["Auth/user"]
    })
  },
  methods: {
    ...mapActions({ fetchUser: "Auth/fetchAuthenticatedUser" }),
  },
}
</script>

<style scoped>

</style>