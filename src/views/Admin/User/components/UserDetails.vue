<template>
    <div class="user-details">
        <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" class="user-details__image" alt="avatar">

        <h3 class="text-center pt-2">{{ user.name }}</h3>
        <div>
            <h3>Atribuições:</h3>
            <dynamic-select :options="rolesOptions" @select="addRole"/>
            <ul>
                <li v-for="role in roles" :key="role.id"> {{  role.name }} </li>
            </ul>
        </div>
    </div>
</template>

<script>
import DynamicSelect from "@/components/DynamicSelect/DynamicSelect"
import { fetchPermissions } from "@/services/admin/UsersService"

export default {
    name: "UserDetails",
    components: { DynamicSelect },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            rolesOptions: [
                {
                    id: 1,
                    selected:  true,
                    text: "Admin",
                },
                {
                    id: 2,
                    text: "Gestor",
                },
                {
                    id: 3,
                    text: "Childrado",
                    children:  [
                        {
                            id: 5,
                            selected:  true,
                            text: "AAA",
                        },
                        {
                            id: 6,
                            text: "BBBB",
                        },
                    ],
                },
            ],
            roles: [],
        }
    },
    created() {
      this.fetchPermissions()
    },
    methods: {
        fetchPermissions() {
            //passar para externa
            console.log(this.$api)
            fetchPermissions(this.user.id)
            .then(({ data }) => {
                this.roles = data.data
            })
        },
        addRole(role)  {
            console.log({ add: role })
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