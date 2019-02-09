<template>
<panel title="View song">
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
            <v-btn dark class="orange darken-2" :to="{name: 'edit-song', params:{songID:song.id}}">
                Edit song
            </v-btn>
            <v-btn v-if="isUserLoggedIn" dark class="orange darken-2" @click="bookmark">
                Bookmark
            </v-btn>
            <v-btn v-if="isUserLoggedIn" dark class="orange darken-2" @click="unbookmark">
                Unbookmark
            </v-btn>
        </v-flex>
        <v-flex xs6>
            <img class="song-imageURL" :src="song.albumImageURL"/>
        </v-flex>
    </v-layout>
</panel>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props: ['song'],
    computed:{
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    methods:{
        bookmark(){
          console.log("Bookmarked")  
        },
        unbookmark(){
            console.log("Unbookmakerd")
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
