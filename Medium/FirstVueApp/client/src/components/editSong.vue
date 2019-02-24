<template>
<v-container fluid>
    <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
            <panel title="Metadata songs">
                <v-text-field label="title" v-model="song.title" required :rules="[required]"></v-text-field>

                <v-text-field label="artist" v-model="song.artist" :rules="[required]"></v-text-field>

                <v-text-field label="genre" v-model="song.genre" :rules="[required]"></v-text-field>

                <v-text-field label="album" v-model="song.album" :rules="[required]"></v-text-field>

                <v-text-field label="albumImageURL" v-model="song.albumImageURL" :rules="[required]"></v-text-field>

                <v-text-field label="youtubeId" v-model="song.youtubeId" :rules="[required]"></v-text-field>
            </panel>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
            <panel title="Metadata songs">
                <v-text-field label="lyrics" multi-line v-model="song.lyrics" :rules="[required]"></v-text-field>
                <br/> <br/> <br/> <br/>
                <v-text-field label="tab" multi-line v-model="song.tab" :rules="[required]"></v-text-field>
                <v-btn dark class="cyan" @click="editSong">SAVE</v-btn>
            </panel>
        </v-flex>
    </v-layout>
    <br/>
    <div v-html="error" />
    <br/>
</v-container>
</template>

<script>
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
            error: null,
            required: (value) => !!value || "Required."
        }
    },
    methods:{
        async editSong(){
             try {
                const allFieldsAreFilledIn = Object
                                                .keys(this.song)
                                                .every(key => !!this.song[key])

                if (!allFieldsAreFilledIn) {
                    this.error = "Please fill all the fields"
                } else {
                    await SongService.updateSong(this.song)
                    this.$router.push({
                        name:'song',
                        params: {
                            songID: this.song.id
                        }
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    async mounted() {
        const songID = this.$store.state.route.params.songID
        this.song = (await SongService.getSong(songID)).data
    }
}
</script>

<style scoped>

</style>

