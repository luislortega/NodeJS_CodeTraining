<template>
    <panel title="Bookmarks">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="bookmarks">
            <template slot="items" slot-scope="props">
                <td class="text-xs-left">
                    {{props.item.SongId}}
                </td>
                <td class="text-xs-left">
                    {{props.item.SongId}}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>
<script>
import {mapState} from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
    data(){
        return{
            headers:[
                {
                    text: "id",
                    value: "idt"
                },
                {
                    text: "nombre",
                    value: "nombret"
                }
            ],
            pagination:{
                sortBy: 'date',
                descending: true
            },
            bookmarks: {}
        }
    },
    computed:{
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    async mounted(){
        if(this.isUserLoggedIn){
            console.log("checkpoint")
            this.bookmarks = (await BookmarkService.getBookmark({
                userId: 1,
                songId: 1
            })).data
            console.log(this.bookmarks)
        }
    }
}
</script>
<style>

</style>
