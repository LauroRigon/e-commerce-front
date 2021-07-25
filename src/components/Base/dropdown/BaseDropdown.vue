<template>
    <div
        class="base-dropdown"
        v-click-outside="clickOutside"
    >
        <slot name="trigger" v-bind="{ toggleVisibility, showDropdown, hideDropdown, visible }">
            <div
                class="dropdown--button"
                @click.stop="toggleVisibility"
            >Drop
            </div>
        </slot>
        <transition name="fade">
            <ul
                v-show="visible"
                class="dropdown-menu"
                :class="[dropSideClass]"
                ref="dropdownBox"
            >
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>

<script>

export default {
    name: "BaseDropdown",
    props: {
        dropSide: {
            type: String,
            default: "down",
            validate: function (value) {
                return ["down", "right"].contains(value)
            },
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
        }
    },
    computed: {
        dropSideClass() {
            return `dropdown-menu__${this.dropSide}`
        },
    },
    created() {
        this.popupItem = this.$el
    },
    methods: {
        toggleVisibility() {
            this.visible ? this.hideDropdown() : this.showDropdown()
        },
        showDropdown() {
            this.visible = true

            // this.$nextTick(function () {
            //     const box = this.$refs.dropdownBox
            //     const clientRects = box.getClientRects()[0]
            //
            //     if (clientRects && clientRects.top < 0) {
            //         box.style.transform = `translateY(${Math.abs(clientRects.top)}px)`
            //     }
            //
            //     if (clientRects && (window.innerHeight < clientRects.bottom)) {
            //         const diff = (clientRects.bottom - window.innerHeight) * -1
            //         box.style.transform = `translateY(${diff}px)`
            //     }
            // })
        },
        hideDropdown() {
            this.visible = false
        },
        clickOutside() {
            this.hideDropdown()
        },
    },
}
</script>

<style scoped>
.base-dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    display: block;
}

.dropdown-menu__right {
    top: 0;
    left: 100%;
}
.dropdown-menu__down {
    left: 0;
}
</style>