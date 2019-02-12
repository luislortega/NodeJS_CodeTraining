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
    async mounted(){
        if(!this.isUserLoggedIn){
            return
        }
        try{
            console.log(` envio userid: ${this.$store.state.user.id} y el songId: ${this.$store.state.route.params.songID}`)
            this.bookmark = (await BookmarkService.getBookmark({
                userId: this.$store.state.user.id,
                songId: this.$store.state.route.params.songID
            })).data
            // work thank u eyder xDD.
            if(Object.keys(this.bookmark).length == 0){
                this.bookmark = null
            }
        }catch (err){
            console.log(err)
        }
    },
    methods:{
        async setAsBookmark(){
            try{
                this.bookmark = (await BookmarkService.setBookmark({
                    userId: this.$store.state.user.id,
                    songId: this.$store.state.route.params.songID
                })).data
            }catch(err){
                console.log(err)
            }
        },
        async unsetAsBookmark(){
            try{
                await BookmarkService.deleteBookmark(this.$store.state.route.params.songID)
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
