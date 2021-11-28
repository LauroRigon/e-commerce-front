<template>
    <form @submit.prevent="saveProfile">
        <base-input
            id="name"
            label="Nome completo"
            v-model="form.name"
            required
        />
        <base-input
            id="email"
            label="E-mail"
            v-model="form.email"
            required
        />
        <base-input
            id="cpf"
            label="Cpf"
            v-model="form.cpf"
            required
        />
        <base-input
            id="telefone"
            label="Telefone"
            v-model="form.phone"
            required
        />
        <base-button
            type="submit"
            variant="primary"
            class="mt-3 overflow-hidden"
            :loading="isLoading"
        >
            Salvar alterações
        </base-button>
    </form>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput"
import BaseButton from "@/components/Base/BaseButton"
import EditableFormComponent from "@/mixins/EditableFormComponent"
import { errorsToList } from "@/helpers/errors"

export default {
    name: "ProfileForm",
    components: { BaseButton, BaseInput },
    mixins: [EditableFormComponent],
    data() {
        return {
            form: {
                name: "",
                email: "",
                cpf: "",
                phone: "",
            },
            isLoading: false,
        }
    },
    methods: {
        async saveProfile() {
            try {
                this.isLoading = true
                const data = await this.$store.dispatch("Auth/updateUser", { id: this.editId, userData: this.form })

                this.$store.commit("addNotification", {
                    type: "success",
                    message: "Salvo com sucesso!",
                })

                this.$emit("saved", data.data)
            } catch ({ response }) {
                this.$store.commit("addNotification", {
                    type: "danger",
                    title: response.data.message,
                    message: errorsToList(response.data.errors),
                })
            }

            this.isLoading = false
        },
    },
}
</script>

<style scoped>

</style>