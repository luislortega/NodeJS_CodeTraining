<template>
<v-container fluid>
    <v-layout column>
        <v-flex xs-6>
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
export default {
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
