<template>
    <div>
        <transition name="fade" mode="out-in">
            <app-loading v-if="isLoading" />
            <div v-else>
                <base-table
                    :headers="table.headers"
                    :data="data"
                >

                </base-table>

                <app-pagination
                    v-if="pagination.total"
                    :length="pagination.last_page"
                    :current="pagination.current_page"
                    @change-page="changePage"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import BaseTable from "@/components/Base/BaseTable"
import AppPagination from "@/components/AppPagination"
import AppLoading from "@/components/AppLoading"
import { fetchUsers } from "@/services/admin/UsersService"
import ListingIndex from "@/mixins/ListingIndex"

export default {
    components: { BaseTable, AppPagination, AppLoading },
    mixins: [ ListingIndex ],
    data() {
        return {
            table: {
                headers: [
                    {
                        name: "Nome",
                        key: "name",
                    },
                    {
                        name: "E-mail",
                        key: "email",
                    },
                ],
            },
            itemDetailed: null,
        }
    },
    methods: {
        async getRequest(q) {
            return fetchUsers(q)
        },
    },
}
</script>

<style lang="scss">

</style>