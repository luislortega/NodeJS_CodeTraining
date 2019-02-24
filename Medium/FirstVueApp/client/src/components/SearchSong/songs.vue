<template>
<v-container fluid>
    <v-layout>
        <v-flex xs6 v-if="isUserLoggedIn">
                <songs-bookmarks />
                <recently-viewed-songs class="mt-12"/>
        </v-flex>
        <v-flex :class="{
            xs12: !isUserLoggedIn,
            xs6: isUserLoggedIn
        }" class="ml-2">
            <search-songs-panel />
            <songs-panel />
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
//SongService
import songsPanel from './songsPanel'
import searchSongsPanel from './searchSongsPanel'
import songsBookmarks from './songsBookmarks'
import recentlyViewedSongs from './recentlyViewedSongs'

import {mapState} from 'vuex'

export default {
    created() {
        //Redirect :)
        if (!this.$store.state.isUserLoggedIn) this.$router.push({
            name: 'songs'
        })
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
        ])
    },
    components: {
        songsPanel,
        searchSongsPanel,
        songsBookmarks,
        recentlyViewedSongs
    }
}
</script>

<style scoped>
</style>
