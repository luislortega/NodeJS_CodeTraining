<template>
<v-container fluid>
    <v-btn slot="action" class="white accent-2 mr-5" light absolute right fab :to="{name:'create-song'}">
        <v-icon>add</v-icon>
    </v-btn>
    <panel title="Songs">
        <div v-for="song in songs" :key="song.id">
            {{song.title}}
        </div>
    </panel>
</v-container>
</template>

<script>
import panel from '@/components/panel'
//SongService
import SongService from '@/services/SongService'
export default {
    data() {
        return {
            songs: {}
        }
    },
    async mounted() {
        //Do a request to backend for all the songs
        this.songs = (await SongService.getAllSongs()).data
    },
    created() {
        //Redirect :)
        if (!this.$store.state.isUserLoggedIn) this.$router.push({
            name: 'HelloWorld'
        })
    },
    components: {
        panel
    }
}
</script>

<style scoped>

</style>
