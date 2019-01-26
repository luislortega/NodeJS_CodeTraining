<template>
</template>

<script>
export default {
    async mounted() {
        const songID = this.$store.state.route.params.songID
        console.log(songID)
    }
}
</script>

<style scoped>

</style>

