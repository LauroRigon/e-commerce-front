<template>
    <transition name="from-right" mode="out-in">
        <div class="quick-details shadow-sm" v-if="open">
            <span class="quick-details__close" @click="close">
                <i class="fas fa-times"></i>
            </span>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: "AppQuickDetails",
    props: {
        open: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        close() {
            this.$emit("close")
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/style/style";

.quick-details {
    position: fixed;
    top: 0;
    right: 0;
    background-color: $primary;
    height: 100vh;
    width: 350px;

    &__close {
        position: absolute;
        top: 10px;
        right: 15px;
        color: $body-bg;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: lighten($primary, 20);
            box-shadow: 0 1px 3px 1px #0000008f;
        }
    }
}

.from-right-enter,
.from-right-leave-to {
    transform: translateX(100%);
}

.from-right-enter-active,
.from-right-leave-active {
    transition: transform .2s ease-out;
}

.from-right-enter-to {
    transform: translateX(0);
}
</style>