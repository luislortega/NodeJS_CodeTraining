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
            <panel title="Tabs">
                <textarea readonly v-model="song.tab">
                </textarea>
            </panel>
        </v-flex>
        <v-flex xs6>
            <panel title="Lyrics">
       
            </panel>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import SongService from '@/services/SongService'
import panel from '@/components/panel'
import SongMetadata from './SongMetadata'
import YoutubeView from './YoutubeView'

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
        YoutubeView
    }
}
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
