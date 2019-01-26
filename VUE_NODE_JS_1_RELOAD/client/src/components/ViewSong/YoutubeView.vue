<template>
<panel title="Youtube Viewer">
    <youtube :video-id="youtubeId" :player-width="800" :player-height="400">
    </youtube>
</panel>
</template>

<script>
import panel from '@/components/panel'
export default {
    props:['youtubeId'],
    components:{
        panel
    }
}
</script>

<style scoped>

</style>

