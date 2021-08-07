<template>
    <div
        :class="['toast', 'show', typeClass, 'my-2']"
        @click.prevent="close"
    >
        <div
            class="toast-header justify-content-between"
            v-if="title"
        >
            {{ title }}
            <button
                @click.prevent="close"
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
            />
        </div>
        <div class="toast-body">
            <div v-html="message"/>
        </div>
    </div>
</template>

<script>
import store from "@/store"

const TYPE_CLASSES = {
    ["default"]: "bg-default",
    ["danger"]:  "bg-danger",
    ["warning"]: "bg-warning",
    ["success"]: "bg-success",
}

export default {
    name: "NotificationToast",
    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            defalut: "",
            validator: function (value) {
                return [
                    "default",
                    "danger",
                    "warning",
                    "success",
                ].indexOf(value) !== -1
            },
        },
        title: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: true,
        },
        timeout: {
            type: Number,
            default: 5000,
        },
    },
    computed: {
        typeClass() {
            return TYPE_CLASSES[this.type]
        },
    },
    mounted() {
        window.setTimeout(this.close, this.timeout)
    },
    methods: {
        close() {
            store.commit("removeNotification", this.id)
        },
    },
}
</script>