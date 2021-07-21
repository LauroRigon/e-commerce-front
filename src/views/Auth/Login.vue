<template>
    <div class="card">
        <div class="card-body">
            <form
                class="login-form"
                @submit.prevent="login"
            >
                <div class="mb-3">
                    <base-input
                        id="email"
                        type="email"
                        name="email"
                        v-model="form.email"
                        label="Email"
                        :errors="errors.email"
                    />
                </div>
                <div class="mb-3">
                    <base-input
                        id="password"
                        type="password"
                        name="password"
                        v-model="form.password"
                        label="Password"
                        :errors="errors.password"
                    />
                </div>
                <base-button
                    type="submit"
                    variant="primary"
                    :loading="isLoading"
                >
                    Entrar
                </base-button>
            </form>
            <p class="mt-2">
                <a href="/">Esqueceu sua senha? Clique aqui</a>
            </p>
        </div>
    </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton"
import { mapActions } from "vuex"
import BaseInput from "@/components/Base/BaseInput"

export default {
  name: "Login",
  components: {BaseInput, BaseButton},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {},
      isLoading: false,
    }
  },
  methods: {
    ...mapActions({
      dispatchLogin: "Auth/login",
    }),
    async login() {
      this.isLoading = true

      try {
        await this.dispatchLogin(this.form)

        this.$router.push({ name: "account-profile" })
      } catch ({ response }) {
        if (response.data.errors) {
          this.errors = response.data.errors
        } else {
          this.errors["password"] = [response.data.message]
        }
      }

      this.isLoading = false
    },
  },
}
</script>

<style scoped>
</style>