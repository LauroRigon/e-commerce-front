<template>
    <button :class="['btn', variantClass]" :disabled="disabled || loading">
        <div class="spinner-border spinner-border-sm" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
        </div>
        <slot/>
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: null,
            validator: function (value) {
                return [
                    "primary",
                    "secondary",
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "light",
                    "dark",
                ].indexOf(value) !== -1
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        variantClass() {
            if (!this.variant) {
                return
            }

            return `btn-${this.variant}`
        },
    },
}
</script>

<style scoped>

</style>