<template>
<panel title="Youtube Viewer">
    <youtube :video-id="youtubeId" :player-width="800" :player-height="400">
    </youtube>
</panel>
</template>

<script>
export default {
    props:['youtubeId']
}
</script>

<style scoped>

</style>

