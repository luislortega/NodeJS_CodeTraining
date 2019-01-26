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
import SongService from '@/services/SongService'
import panel from '@/components/panel'
import SongMetadata from './SongMetadata'
import YoutubeView from './YoutubeView'
import LyricsMetada from './LyricsMetadata'
import TabsMetadata from './TabsMetadata'

export default {
    data() {
        return {
            song: {}
        }
    },
    async mounted() {
        const songID = this.$store.state.route.params.songID
        this.song = (await SongService.getSong(songID)).data
    },
    components: {
        panel,
        SongMetadata,
        YoutubeView,
        LyricsMetada,
        TabsMetadata
    }
}
</script>

<style scoped>
</style>
