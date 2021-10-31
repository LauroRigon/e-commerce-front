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
            class="mt-2"
            label="Cep"
            placeholder="Digite seu cep"
            type="text"
            v-model="form.cep"
            v-mask="'#####-###'"
            :errors="errors['cep']"
        />

        <app-loading v-if="isLoadingCepInfo" />
        <template v-else-if="showAddressFields">
            <base-input
                id="address"
                class="mt-2"
                label="Endereço"
                placeholder="Digite seu endereço"
                type="text"
                v-model="form.address"
                :disabled="disabledInputs.disableAddress"
            />
            <div class="row">
                <base-input
                    id="number"
                    class="col-4 mt-2"
                    label="Número"
                    type="number"
                    min="1"
                    v-model="form.number"
                />
                <base-input
                    id="number"
                    class="col-8 mt-2"
                    label="Complemento"
                    type="text"
                    v-model="form.complement"
                />
            </div>
            <base-input
                id="district"
                class="mt-2"
                label="Bairro"
                type="text"
                v-model="form.district"
            />
            <base-input
                id="city"
                class="mt-2"
                label="Cidade"
                type="text"
                v-model="form.city"
                :disabled="disabledInputs.disableCity"
            />
            <base-input
                id="state"
                class="mt-2"
                label="Estado"
                type="text"
                v-model="form.state"
                :disabled="disabledInputs.disableState"
            />

            <base-button
                variant="primary"
                class="mt-2"
                type="submit"
                :loading="isLoading"
            >
                Salvar
            </base-button>
        </template>
    </form>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput"
import { getCepInfo } from "@/services/externals/CepService"
import BaseButton from "@/components/Base/BaseButton"
import EditableFormComponent from "@/mixins/EditableFormComponent"
import { createAddress, updateAddress } from "@/services/AddressService"
import AppLoading from "@/components/AppLoading"
import { errorsToList } from "@/helpers/errors"
// import { createAddress } from "@/services/AddressService"

export default {
    name: "AddressForm",
    components: { AppLoading, BaseButton, BaseInput },
    mixins: [EditableFormComponent],
    data() {
        return {
            isLoading: false,
            isLoadingCepInfo: false,
            form: {
                alias: "",
                cep: "",
                address: "",
                number: null,
                complement: "",
                district: "",
                city: null,
                state: null,
            },
            disabledInputs: {
                disableAddress: false,
                disableCity: false,
                disableState: false,
            },
            cepLoaded: false,
            errors: [],
        }
    },
    computed: {
        isCepValid() {
            return this.getCepLength(this.form.cep) === 8
        },
        showAddressFields() {
            return this.isCepValid && this.cepLoaded
        },
    },
    watch: {
        "form.cep"(cep) {
            if (this.isCepValid) {
                this.fetchCepInfo(this.clearCep(cep))
            }
        },
    },
    methods: {
        getCepLength(cep) {
            return this.clearCep(cep).length
        },
        clearCep(cep) {
            return cep.replace("-", "")
        },
        async fetchCepInfo(cep) {
            try {
                this.errors = []

                const data = await getCepInfo(cep)
                this.setAddressAndDisableInput(data.logradouro)
                this.setCityAndDisableInput(data.localidade)
                this.setStateAndDisableInput(data.uf)

                this.cepLoaded = true
            } catch (e) {
                this.cepLoaded = false
                this.$set(this.errors, "cep", e.message)
            }
        },
        setAddressAndDisableInput(address) {
            this.form.address = address
            this.disabledInputs.disableAddress = !!address
        },
        setCityAndDisableInput(city) {
            this.form.city = city
            this.disabledInputs.disableCity = !!city
        },
        setStateAndDisableInput(state) {
            this.form.state = state
            this.disabledInputs.disableState = !!state
        },
        async saveAddress() {
            try {
                this.isLoading = true
                const { data } = this.isEditing ? await updateAddress(this.editId, this.form) : await createAddress(this.form)

                this.$emit("saved", data)
            } catch (e) {
                // this.$store.commit("addNotification", { type: "danger", title: errorsToList(e.data)})
            }

            this.isLoading = false
        },
    },
}
</script>

<style scoped>

</style>