<template>
<panel title="View song">
    <v-layout>
        <v-flex xs6>
            <div class="song-title">
                {{song.title}} {{song.id}}
            </div>
            <div class="song-artist">
                {{song.artist}}
            </div>
            <div class="song-genre">
                {{song.genre}}
            </div>
            <v-btn dark class="orange darken-2" :to="{name: 'edit-song', params:{songID:$store.state.route.params.songID}}">
                Edit song
            </v-btn>
            <v-btn v-if="isUserLoggedIn && !isBookmaked" dark class="orange darken-2" @click="bookmark">
                Bookmark
            </v-btn>
            <v-btn v-if="isUserLoggedIn && isBookmaked" dark class="orange darken-2" @click="unbookmark">
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
import BookmarkService from '@/services/BookmarkService'

export default {
    data(){
        return{
            isBookmaked: false
        }
    },
    props: ['song'],
    computed:{
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    async mounted(){
        const bookmark = (await BookmarkService.getAllBookmarks({
            userId: this.$store.state.user.id,
            songId: this.$store.state.route.params.songID
        })).data
        this.isBookmaked = !!bookmark
        console.log(bookmark)
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
