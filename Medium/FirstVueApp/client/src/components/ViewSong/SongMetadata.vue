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
            <v-btn v-if="isUserLoggedIn && !bookmark" dark class="orange darken-2" @click="setAsBookmark">
                Set as bookmark
            </v-btn>
            <v-btn v-if="isUserLoggedIn && bookmark" dark class="orange darken-2" @click="unsetAsBookmark">
                Unset as bookmark
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
            bookmark: null
        }
    },
    props: ['song'],
    computed:{
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    watch: {
        async song(){
            if(!this.isUserLoggedIn){
                return
            }
            try{
                const bookmarks = (await BookmarkService.getBookmark({
                    songId: this.$store.state.route.params.songID
                })).data
                // work thank u eyder xDD.
                if (bookmarks.length) {
                    this.bookmark = bookmarks[0]
                }
            }catch (err){
                console.log(err)
            }
        }
    },
    methods:{
        async setAsBookmark(){
            try{
                this.bookmark = (await BookmarkService.setBookmark({
                    songId: this.$store.state.route.params.songID
                })).data
            }catch(err){
                console.log(err)
            }
        },
        async unsetAsBookmark(){
            try{
                await BookmarkService.deleteBookmark(this.bookmark.id)
                this.bookmark = null
            }catch(err){
                console.log(err)
            }
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
