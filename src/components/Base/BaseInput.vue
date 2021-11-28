<template>
    <div>
        <label
            v-if="label"
            :for="id"
            :class="[
                'form-label',
                {
                    'form-label--required': required,
                }
            ]"
        >
            {{ label }}
        </label>
        <input
            :id="id"
            class="form-control"
            ref="input"
            v-bind="$attrs"
            :value="modelValue"
            @input="onInput"
            required="required"
        >
        <template v-if="errorsAsArray.length">
            <div
                v-for="(error, index) in errorsAsArray"
                :key="index"
                class="form-text text-danger"
            >{{ error }}
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "BaseInput",
    inheritAttrs: false,
    props: {
        id: {
            type: [String, Number],
            default: () => Math.ceil(Math.random() * 10000),
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        label: {
            type: String,
            required: false,
        },
        errors: {
            type: [Array, String],
            default: () => [],
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:modelValue"],
    computed: {
        errorsAsArray() {
            if (Array.isArray(this.errors)) {
                return this.errors
            }

            return [this.errors]
        },
    },
    methods: {
        onInput(e) {
            this.$emit("update:modelValue", e.target.value)
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'src/style/style.scss';

.form-label--required::after {
    content: "*";
    color: $danger;
}
</style>