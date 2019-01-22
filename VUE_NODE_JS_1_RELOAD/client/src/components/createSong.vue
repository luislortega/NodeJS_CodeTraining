<template>
<v-container fluid>
    <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
            <panel title="Metadata songs">
                <v-text-field label="title" v-model="song.title"></v-text-field>

                <v-text-field label="artist" v-model="song.artist"></v-text-field>

                <v-text-field label="genre" v-model="song.genre"></v-text-field>

                <v-text-field label="album" v-model="song.album"></v-text-field>

                <v-text-field label="albumImageURL" v-model="song.albumImageURL"></v-text-field>

                <v-text-field label="youtubeId" v-model="song.youtubeId"></v-text-field>
            </panel>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
            <panel title="Metadata songs">
                <v-text-field label="lyrics" multi-line v-model="song.lyrics"></v-text-field>
                <br/> <br/> <br/> <br/>
                <v-text-field label="tab" multi-line v-model="song.tab"></v-text-field>
                <v-btn dark class="cyan" @click="createSong">CREATE</v-btn>
            </panel>
            
        </v-flex>
    </v-layout>
    <br/>
                <div v-html="error" />
                <br/>
</v-container>
</template>

<script>
// title, artist, genre, album, albumImageUrl, youtubeId, lyrics, tab
import panel from '@/components/panel'
import SongService from '@/services/SongService'
export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageURL: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },
            error:null
        }
    },
    created(){
        //Redirect :)
        if(!this.$store.state.isUserLoggedIn) this.$router.push({name: 'HelloWorld'})
    },
    methods: {
        async createSong() {
            try {
                await SongService.addSong(this.song)
                this.$router.push({name: 'songs'})
            } catch (err) {
                console.log(err)
            }
        }
    },
    components: {
        panel
    }
}
</script>

<style scoped>

</style>
