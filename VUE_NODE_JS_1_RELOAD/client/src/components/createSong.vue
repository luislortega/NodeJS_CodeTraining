<template>
<v-container fluid>
    <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
            <panel title="Metadata songs">
                <v-text-field label="title"></v-text-field>

                <v-text-field label="artist"></v-text-field>

                <v-text-field label="genre"></v-text-field>

                <v-text-field label="album"></v-text-field>

                <v-text-field label="almbumImageUrl"></v-text-field>

                <v-text-field label="youtubeId"></v-text-field>
            </panel>
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
            <panel title="Metadata songs">
                <v-text-field label="title" multi-line></v-text-field>
                    <br/> <br/> <br/> <br/>
                <v-text-field label="tab" multi-line></v-text-field>
                
                <v-btn dark class="cyan">CREATE</v-btn>
            </panel>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
// title, artist, genre, album, albumImageUrl, youtubeId, lyrics, tab
import panel from '@/components/panel'
export default {
    data() {
        return {
            title: null,
            artist: null,
            genre: null,
            album: null,
            almbumImageUrl: null,
            youtubeId: null,
            lyrics: null,
            tab: null
        }
    },
    components: {
        panel
    }
}
</script>

<style scoped>

</style>
