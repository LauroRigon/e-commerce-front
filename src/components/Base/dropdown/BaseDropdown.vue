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
                :class="[dropSideClass, targetClass]"
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
            default: "bottom-middle",
            validate: function (value) {
                return [
                    "bottom-right",
                    "bottom-left",
                    "bottom-middle",
                    "top-right",
                    "top-left",
                    "top-middle",
                ].contains(value)
            },
        },
        targetClass: {
            type: [String, Object, Array],
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

            this.$nextTick(function () {
                const box = this.$refs.dropdownBox
                const clientRects = box.getClientRects()[0]

                if (clientRects && clientRects.top < 0) {
                    box.style.transform = `translateY(${Math.abs(clientRects.top)}px)`
                }

                if (clientRects && (window.innerHeight < clientRects.bottom)) {
                    const diff = (clientRects.bottom - window.innerHeight) * -1
                    box.style.transform = `translateY(${diff}px)`
                }
            })
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
    left: 50%;
}

/*Top*/
.dropdown-menu__top-middle {
    top: 0;
    transform: translate(-50%, -100%);
}

.dropdown-menu__top-right {
    top: 0;
    right: 0;
    transform: translateY(-100%);
}

.dropdown-menu__top-left {
    top: 0;
    left: 0;
    transform: translateX(-100%);
}

/*Bottom*/
.dropdown-menu__bottom-middle {
    top: 100%;
    transform: translateX(-50%);
}
.dropdown-menu__bottom-left {
    transform: translateX(-100%);
}
.dropdown-menu__bottom-right {
    left: 100%;
}

.dropdown-menu__top {
    transform: translateY(-100%);
}
</style>