<template>
    <table :class="['table', ...variantClasses]">
        <thead>
            <tr>
                <th v-for="header in headers" :key="header.key">
                    {{ header.name }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="header in headers" :key="header.key">
                    <slot :name="header.key" :item="item" :header="header">
                        {{ item[header.key] }}
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
const VARIANTS = {
    dark: [ "table-dark", "table-striped"],
}

export default {
    name: "BaseTable",
    props: {
        headers: {
            type: Array,
            default: () => [],
        },
        data: {
            type: Array,
            default: () => [],
        },
        variant: {
            type: String,
            validator: (value) => Object.keys(VARIANTS).includes(value),
        },
    },
    computed: {
        variantClasses() {
            return VARIANTS[this.variant]
        },
    },
}
</script>

<style scoped>

</style>