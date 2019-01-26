<template>
<panel title="Search song">
    <v-text-field label="Search by song title, artist, album, or genre" v-model="search"></v-text-field>
</panel>
</template>

<script>
export default {
    data(){
        return{
            search: ''
        }
    },
    watch:{
        search(value){
            console.log(value)
        }
    }
}
</script>

<style scoped>

</style>

