<template>
    <li @click="closeDropdown">
        <slot />
    </li>
</template>

<script>
export default {
    name: "DropdownItem",
    inject: {
        hideDropdown: { default: null },
    },
    methods: {
        closeDropdown() {
            this.hideDropdown()
        },
    },
}
</script>

<style scoped>

</style>