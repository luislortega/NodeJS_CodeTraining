<template>
<panel title="Songs">
    <v-btn slot="action" class="white accent-2" light absolute right fab :to="{name:'create-song'}">
        <v-icon>add</v-icon>
    </v-btn>
    <div v-for="song in songs" :key="song.id">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>
                <div class="song-artist">
                    {{song.artist}}
                </div>
                <div class="song-genre">
                    {{song.genre}}
                </div>
                <!-- v-btn dark class="orange darken-2" @click="navigateTo({name: 'song', params:{songID:song.id}})" -->
                <v-btn dark class="orange darken-2" :to="{ name: 'song', params:{songID:song.id}}">
                    View song
                </v-btn>
            </v-flex>
            <v-flex xs6>
                <img class="song-imageURL" :src="song.albumImageURL"/>
                </v-flex>
        </v-layout>
        <br/>
        </div>
</panel>
</template>

<script>
import SongService from '@/services/SongService'

export default {
    data() {
        return {
            songs: {}
        }
    },
    watch:{
        '$route.query.search': {
            immediate: true,
            async handler (value) {
                console.log("Envio el ",value)
                this.songs = (await SongService.getAllSongs(value)).data
            }
        }
    },
    /*
    async mounted() {
        //Do a request to backend for all the songs
        this.songs = (await SongService.getAllSongs()).data
    },*/
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
.song-imageURL {
    width: 100%;
}

.song-title {
    font-size: 30px;
}

.song-artist {
    font-size: 20px;
}

.song-genre {
    font-size: 15px;
}
</style>
