<template>
    <div class="base-popover">
        <span class="popover-trigger--wrapper" ref="triggerRef" @click="toggleVisibility">
            <slot
                name="trigger"
                v-bind="{ toggleVisibility, showDropdown, hideDropdown, visible }"
            >
                <div
                    class="dropdown--button"
                    @click="toggleVisibility"
                >Drop
                </div>
            </slot>
        </span>
        <transition name="fade">
            <div
                v-show="visible"
                class="dropdown-menu"
                :style="{ padding: `${paddingY} ${paddingX}` }"
                ref="dropdownBox"
            >
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core"

export default {
    name: "BasePopover",
    props: {
        placement: {
            type: String,
            default: "bottom",
        },
        popperOptions: {
            type: Object,
            required: false,
        },
        paddingY: {
            type: String,
            default: "5px",
        },
        paddingX: {
            type: String,
            default: "10px",
        },
    },
    emits: [],
    data() {
        return {
            visible: false,
            popperInstance: null,
        }
    },
    computed: {
        defaultPopperOptions() {
            return {
                placement: this.placement,
            }
        },
        mergedPopperOptions() {
            return { ...this.defaultPopperOptions, ...this.popperOptions }
        },
    },
    mounted() {
        this.setFreshPopperInstance()
    },
    unmounted() {
        this.popperInstance.destroy()
    },
    methods: {
        setFreshPopperInstance() {
            this.popperInstance && this.popperInstance.destroy()
            this.popperInstance = createPopper(this.$refs.triggerRef, this.$refs.dropdownBox, this.mergedPopperOptions)
        },
        toggleVisibility() {
            console.log("aaa")
            this.visible ? this.hideDropdown() : this.showDropdown()
        },
        showDropdown() {
            this.visible = true
            this.popperInstance.update()
        },
        hideDropdown() {
            this.visible = false
        },
    },
}
</script>

<style scoped>
.base-popover {
    display: inline-block;
}

.dropdown-menu {
    display: block;
}
</style>