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
            v-mask="'###.###.###-##'"
            required
        />
        <base-input
            id="telefone"
            label="Telefone"
            v-model="form.phone"
            v-mask="'(##) # ####-####'"
            required
        />
        <base-button
            type="submit"
            variant="primary"
            class="mt-3 overflow-hidden"
        >
            Salvar alterações
        </base-button>
    </form>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput"
import BaseButton from "@/components/Base/BaseButton"
import EditableFormComponent from "@/mixins/EditableFormComponent"

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
        }
    },
    methods: {
        async saveProfile() {
            const data = await this.$store.dispatch("Auth/updateUser", { id: this.editId, userData: this.form })

            this.$emit("saved", data.data)
        },
    },
}
</script>

<style scoped>

</style>