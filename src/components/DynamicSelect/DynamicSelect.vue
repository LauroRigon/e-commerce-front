<template>
    <div>
        <div class="list-group">
            <a
                v-for="option in options"
                :key="option.id"
                href="#"
                :class="['list-group-item list-group-item-action', {active: option.selected}]"
                @click="handleSelectOption(option)"
            >
                {{ option.text }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "DynamicSelect",
    props: {
        /**
         * {
         *     label: '',
         *     value: ''
         * }
         */
        options: {
            type: Array,
            required: true,
        },
        trackBy: {
            type: String,
            default: "id",
        },
    },
    data() {
        return {
            selected: [],
            internalValue: [],
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
        handleSelectOption(option) {
            this.$emit("input", option.value)
        },
        isSelected(option) {
            this.internalValue.find((optionSelected) => optionSelected[option.value])
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/style/style";

.list-group-item.active {
    background-color: darken($primary, 7);
}
</style>