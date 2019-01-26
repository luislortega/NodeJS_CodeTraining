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
            <v-btn dark class="orange darken-2" @click="navigateTo({name: 'edit-song', params:{songID:song.id}})">
                Edit song
            </v-btn>
        </v-flex>
        <v-flex xs6>
            <img class="song-imageURL" :src="song.albumImageURL"/>
        </v-flex>
    </v-layout>
</panel>
</template>

<script>
export default {
    props: ['song'],
    methods:{
        navigateTo(route){
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
