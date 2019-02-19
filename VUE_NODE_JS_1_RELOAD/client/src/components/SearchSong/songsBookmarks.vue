<template>
<panel title="Bookmarks">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
        <template slot="items" slot-scope="props">
            <td class="text-xs-left">
                {{ props.item.UserId }}
            </td>
            <td class="text-xs-left">
                {{ props.item.UserId}}
            </td>
        </template>
    </v-data-table>
</panel>
</template>

<script>
import {
    mapState
} from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
    data() {
        return {
            headers: [{
                    text: "id",
                    value: "idt"
                },
                {
                    text: "nombre",
                    value: "nombret"
                }
            ],
            pagination: {
                sortBy: 'date',
                descending: true
            },
            bookmarks: [{} //Empty array
            ]
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    async mounted() {
        if (this.isUserLoggedIn) {
            console.log(this.user)
            this.bookmarks = (await BookmarkService.getBookmark({
                userId: this.user.id
            })).data
            console.log(this.bookmarks)
        }
    }
}
</script>

<style>

</style>
