<template>
    <div class="card">
        <div class="card-body">
            <h3 class="text-center">Criar conta</h3>
            <form
                class="register-form"
                @submit.prevent="register"
            >
                <div class="mb-3">
                    <base-input
                        id="name"
                        name="name"
                        v-model="form.name"
                        label="Nome"
                        :errors="errors.name"
                    />
                </div>
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
                    Registrar
                </base-button>
            </form>
        </div>
    </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton"
import { mapActions } from "vuex"
import BaseInput from "@/components/Base/BaseInput"

export default {
  name: "Register",
  components: { BaseInput, BaseButton },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
      isLoading: false,
    }
  },
  methods: {
    ...mapActions({
      dispatchRegister: "Auth/register",
    }),
    async register() {
      this.isLoading = true

      try {
        await this.dispatchRegister(this.form)

        this.$router.push({ name: "user-account" })
      } catch ({ response }) {
        this.errors = response.data.errors
      }

      this.isLoading = false
    },
  },
}
</script>

<style scoped>
</style>