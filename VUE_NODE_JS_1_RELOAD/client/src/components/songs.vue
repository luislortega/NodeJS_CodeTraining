<template>
<v-container fluid>
    <panel title="Songs">
        <div v-for="song in songs" :key="song.name">
            {{song.name}}
            {{song.artist}}
            {{song.year}}
        </div>
    </panel>
</v-container>
</template>
<script>
import panel from '@/components/panel'
//SongService
import SongService from '@/services/SongService'
export default {
    data(){
        return {
            songs: null
        }
    },
    async mounted(){
        //Do a request to backend for all the songs
        this.songs = await SongService.getAllSongs()
    },
    created(){
        //Redirect :)
        if(!this.$store.state.isUserLoggedIn) this.$router.push({name: 'HelloWorld'})
    },
    components: {
        panel
    }
}
</script>

<style scoped>

</style>
