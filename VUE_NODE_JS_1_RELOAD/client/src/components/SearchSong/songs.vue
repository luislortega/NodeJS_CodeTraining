<template>
<v-container fluid>
    <v-layout>
        <v-flex xs6>
            <songs-bookmarks/>
        </v-flex>
        <v-flex xs6>
            <search-songs-panel/>
            <songs-panel/>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
//SongService
import songsPanel from './songsPanel'
import searchSongsPanel from './searchSongsPanel'
import songsBookmarks from './songsBookmarks'

export default {
    created() {
        //Redirect :)
        if (!this.$store.state.isUserLoggedIn) this.$router.push({
            name: 'songs'
        })
    },
    components: {
        songsPanel,
        searchSongsPanel,
        songsBookmarks
    }
}
</script>

<style scoped>
</style>
