<template>
<panel title="Recently viewed songs">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="songs">
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
import SongHistoryService from '@/services/SongHistoryService'

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
                sortBy: 'createdAt',
                descending: true
            },
            songs: [{}] //empty
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
            this.songs = (await SongHistoryService.index({
                userId: this.user.id
            })).data
        }
    }
}
</script>

<style>

</style>
