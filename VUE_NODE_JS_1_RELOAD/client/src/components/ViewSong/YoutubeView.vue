<template>
<panel title="Youtube Viewer">
    <youtube :video-id="youtubeId" :player-width="500" :player-height="500">
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

