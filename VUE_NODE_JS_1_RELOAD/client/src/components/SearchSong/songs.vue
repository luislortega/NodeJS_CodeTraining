<template>
<v-container fluid>
    <v-layout column>
        <v-flex xs-6>
            <search-songs-panel/>
            <songs-panel :songs="this.songs" />
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
//SongService
import SongService from '@/services/SongService'
import songsPanel from './songsPanel'
import searchSongsPanel from './searchSongsPanel'
export default {
    data() {
        return {
            songs: {}
        }
    },
    async mounted() {
        //Do a request to backend for all the songs
        this.songs = (await SongService.getAllSongs()).data
    },
    created() {
        //Redirect :)
        if (!this.$store.state.isUserLoggedIn) this.$router.push({
            name: 'HelloWorld'
        })
    },
    components: {
        songsPanel,
        searchSongsPanel
    }
}
</script>

<style scoped>
</style>
