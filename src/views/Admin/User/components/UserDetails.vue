<template>
    <div class="user-details">
        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" class="user-details__image" alt="avatar">

        <h3 class="text-center pt-2">{{ user.name }}</h3>
        <div>
            <h3>Atribuições:</h3>
            <ul>
                <li v-for="role in roles" :key="role.id"> {{  role.name }} </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserDetails",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            roles: [],
        }
    },
    created() {
      this.fetchPermissions()
    },
    methods: {
        fetchPermissions() {
            //passar para externa
            this.$api.get(`admin/user/${this.user.id}/roles`)
            .then(({ data }) => {
                this.roles = data.data
            })
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/style/style";

.user-details {
    color: $body-bg;

    &__image {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
    }
}
</style>