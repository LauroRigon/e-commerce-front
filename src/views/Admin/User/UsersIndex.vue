<template>
    <div>
        <transition name="fade" mode="out-in">
            <app-loading v-if="isLoading" />
            <div v-else>
                <base-table
                    :headers="table.headers"
                    :data="data"
                >

                    <template #actions="{ item }">
                        <button class="btn btn-info" @click.prevent="openDetails(item)">
                            <i class="fas fa-eye"></i>
                        </button>
                    </template>
                </base-table>

                <app-pagination
                    v-if="pagination.total"
                    :length="pagination.last_page"
                    :current="pagination.current_page"
                    @change-page="changePage"
                />
            </div>
        </transition>

        <app-quick-details :open="!!userDetailed" @close="closeDetails">
            <user-details v-if="userDetailed" :user="userDetailed"/>
        </app-quick-details>
    </div>
</template>

<script lang="ts">
// import BaseTable from "@/components/Base/BaseTable"
// import AppPagination from "@/components/AppPagination"
// import AppLoading from "@/components/AppLoading"
// import { fetchUsers } from "@/services/admin/UsersService"
// import ListingIndex from "@/mixins/ListingIndex"
// import AppQuickDetails from "@/components/AppQuickDetails"
// import UserDetails from "@/views/Admin/User/components/UserDetails"
import { defineComponent, SetupContext } from "vue"

export default defineComponent({
    setup(props, context: SetupContext) {

    },
})

// export default {
//     components: { UserDetails, AppQuickDetails, BaseTable, AppPagination, AppLoading },
//     mixins: [ ListingIndex ],
//     data() {
//         return {
//             userDetailed: null,
//             table: {
//                 headers: [
//                     {
//                         name: "Nome",
//                         key: "name",
//                     },
//                     {
//                         name: "E-mail",
//                         key: "email",
//                     },
//                     {
//                         name: "Ações",
//                         key: "actions",
//                     },
//                 ],
//             },
//             itemDetailed: null,
//         }
//     },
//     methods: {
//         async getRequest(q) {
//             return fetchUsers(q)
//         },
//         openDetails(user) {
//             this.userDetailed = user
//         },
//         closeDetails() {
//             console.log("aaa")
//             this.userDetailed = null
//         },
//     },
// }
</script>

<style lang="scss">

</style>