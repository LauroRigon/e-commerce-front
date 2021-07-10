<template>
<form
    class="col-4"
    @submit.prevent="saveAddress"
>
  <base-input
    id="alias"
    label="Apelido do endereço"
    placeholder="Digite um apelido para esse endereço"
    v-model="form.alias"
    required
  />

  <base-input
    id="cep"
    label="Cep"
    placeholder="Digite seu cep"
    type="text"
    v-model="form.cep"
    v-mask="'#####-###'"
  />

  <template v-if="blockCepRelatedFields">
    <base-input
      id="address"
      label="Endereço"
      placeholder="Digite seu endereço"
      type="text"
      v-model="form.address"
      :disabled="blockCepRelatedFields"
    />
    <div class="row">
      <base-input
        id="number"
        class="col-4"
        label="Número"
        type="number"
        min="1"
        v-model="form.number"
      />
      <base-input
        id="number"
        class="col-8"
        label="Complemento"
        type="text"
        v-model="form.complement"
      />
    </div>
    <base-input
        id="district"
        label="Bairro"
        type="text"
        v-model="form.district"
    />
    <base-input
        id="city"
        label="Cidade"
        type="text"
        v-model="form.city"
        :disabled="blockCepRelatedFields"
    />
    <base-input
        id="state"
        label="Estado"
        type="text"
        v-model="form.state"
        :disabled="blockCepRelatedFields"
    />
  </template>
</form>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput"
import { getCepInfo } from "@/services/externals/CepService"
// import { createAddress } from "@/services/AddressService"

export default {
  name: "AddressForm",
  components: {BaseInput},
  data() {
    return {
      form: {
        alias: "",
        cep: "",
        address: "",
        number: null,
        complement: "",
        district: "",
        city: null,
        state: null,
        money: 0,
      },
      blockCepRelatedFields: false,
    }
  },
  watch: {
    "form.cep"(cep) {
      const cleanCep = cep.replace("-", "")
      if (cleanCep.length === 8) {
        this.fetchCepInfo(cleanCep)
      }
    }
  },
  methods: {
    async fetchCepInfo(cep) {
      try {
        const data = await getCepInfo(cep)

        this.form.address = data.logradouro
        this.form.city = data.localidade
        this.form.state = data.uf

        this.blockCepRelatedFields = true
      }  catch (e) {
        console.log(e)
      }
    },
    async saveAddress() {
      // const { data } = await createAddress(this.form)
    },
  },
}
</script>

<style scoped>

</style>