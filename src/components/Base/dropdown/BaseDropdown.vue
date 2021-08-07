<template>
    <div
        class="base-dropdown"
        v-click-outside="clickOutside"
    >
        <span class="dropdown-trigger--wrapper" ref="triggerRef">
            <slot
                name="trigger"
                v-bind="{ toggleVisibility, showDropdown, hideDropdown, visible }"
            >
                <div
                    class="dropdown--button"
                    @click.stop="toggleVisibility"
                >Drop
                </div>
            </slot>
        </span>
        <transition name="fade">
            <ul
                v-show="visible"
                class="dropdown-menu"
                :class="[targetClass]"
                ref="dropdownBox"
            >
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core"

export default {
    name: "BaseDropdown",
    props: {
        placement: {
            type: String,
            default: "bottom",
        },
        targetClass: {
            type: [String, Object, Array],
        },
        popperOptions: {
            type: Object,
            required: false,
        },
    },
    provide: function () {
        return {
            hideDropdown: this.hideDropdown,
        }
    },
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
        this.popupItem = this.$el
        this.setFreshPopperInstance()
    },
    destroyed() {
        this.popperInstance.destroy()
    },
    methods: {
        toggleVisibility() {
            this.visible ? this.hideDropdown() : this.showDropdown()
        },
        showDropdown() {
            this.visible = true
            this.popperInstance.update()
        },
        hideDropdown() {
            this.visible = false
        },
        clickOutside() {
            this.hideDropdown()
        },
        setFreshPopperInstance() {
            this.popperInstance && this.popperInstance.destroy()
            this.popperInstance = createPopper(this.$refs.triggerRef, this.$refs.dropdownBox, this.mergedPopperOptions)
        },
    },
    watch: {
        mergedPopperOptions() {
            this.popperInstance.setOptions(this.mergedPopperOptions)
        },
    },
}
</script>

<style scoped>
.base-dropdown {
    display: inline-block;
}

.dropdown-menu {
    display: block;
}

/*Top*/
/*.dropdown-menu__top-middle {*/
/*    top: 0;*/
/*    transform: translate(-50%, -100%);*/
/*}*/

/*.dropdown-menu__top-right {*/
/*    top: 0;*/
/*    right: 0;*/
/*    transform: translateY(-100%);*/
/*}*/

/*.dropdown-menu__top-left {*/
/*    top: 0;*/
/*    left: 0;*/
/*    transform: translateX(-100%);*/
/*}*/

/*!*Bottom*!*/
/*.dropdown-menu__bottom-middle {*/
/*    top: 100%;*/
/*    transform: translateX(-50%);*/
/*}*/
/*.dropdown-menu__bottom-left {*/
/*    transform: translateX(-100%);*/
/*}*/
/*.dropdown-menu__bottom-right {*/
/*    left: 100%;*/
/*}*/

/*.dropdown-menu__top {*/
/*    transform: translateY(-100%);*/
/*}*/
</style>