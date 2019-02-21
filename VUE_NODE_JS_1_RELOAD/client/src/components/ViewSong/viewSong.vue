<template>
<v-container fluid>
    <v-layout>
        <v-flex xs6>
            <song-metadata :song="song"/>
        </v-flex>
        <v-flex xs6>
            <youtube-view :youtubeId="song.youtubeId"/>
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex xs6>
            <tabs-metadata :tab="song.tab"/>
        </v-flex>
        <v-flex xs6>
            <lyrics-metada :lyrics="song.lyrics"/>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {mapState} from 'vuex'
import SongService from '@/services/SongService'
import SongMetadata from './SongMetadata'
import YoutubeView from './YoutubeView'
import LyricsMetada from './LyricsMetadata'
import TabsMetadata from './TabsMetadata'
import SongHistoryService from '@/services/SongHistoryService'

export default {
    data() {
        return {
            song: {}
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user',
            'route'
        ])
    },
    async mounted() {
        const songID = this.route.params.songID
        this.song = (await SongService.getSong(songID)).data
        if(this.isUserLoggedIn){
            SongHistoryService.post({
                songId: songID,
                userId: this.user.id
            })
        }
    },
    components: {
        SongMetadata,
        YoutubeView,
        LyricsMetada,
        TabsMetadata
    }
}
</script>

<style scoped>
</style>
