<template>
<panel title="Bookmarks">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
        <template slot="items" slot-scope="props">
            <td class="text-xs-left">
                {{ props.item.album }}
            </td>
            <td class="text-xs-left">
                {{ props.item.artist}}
            </td>
        </template>
    </v-data-table>
</panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
    data() {
        return {
            headers: [{
                    text: "Album",
                    value: "album"
                },
                {
                    text: "Artis",
                    value: "artist"
                }
            ],
            pagination: {
                sortBy: 'date',
                descending: true
            },
            bookmarks: [{}] //empty
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
            
            this.bookmarks = (await BookmarkService.getBookmark()).data
            /*
            this.bookmarks = (await BookmarkService.getBookmark({
                userId: this.user.id
            })).data */
            console.log(this.bookmarks)
        }
    }
}
</script>

<style>

</style>
