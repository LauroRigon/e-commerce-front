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
import {updateAccount} from "@/services/AccountService"

export default {
  name: "ProfileForm",
  components: { BaseButton, BaseInput },
  props: {
    editId: {
      type: Number,
      default: null,
    },
    editData: {
      type: Object,
      default: () => ({ empty: true }),
    },
  },
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
  created() {
    this.assignFormEditData(this.editData)
  },
  methods: {
    assignFormEditData(data) {
      this.form = { ...this.form, ...data }
    },
    async saveProfile() {
      const { data } = await updateAccount(this.editId, this.form)

      console.log(data)
    },
  },
  watch: {
    editData(newData) {
      this.assignFormEditData(newData)
    },
  },
}
</script>

<style scoped>

</style>