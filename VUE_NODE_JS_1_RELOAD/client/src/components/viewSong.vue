<template>
<v-container fluid>
    <v-layout>
        <v-flex xs6>
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
                    </v-flex>
                    <v-flex xs6>
                        <img class="song-imageURL" :src="song.albumImageURL"/>
                </v-flex>
                </v-layout>
            </panel>
        </v-flex>
        <v-flex xs6>
            <panel title="View tab">
              
              
            </panel>
        </v-flex>
    </v-layout>

</v-container>
</template>

<script>
import SongService from '@/services/SongService'
import panel from '@/components/panel'

export default {
    data() {
        return {
            song: {}
        }
    },
    async mounted() {
        const songID = this.$store.state.route.params.songID
        this.song = (await SongService.getSong(songID)).data
    },
    components: {
        panel
    }
}
</script>

<style scoped>
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
