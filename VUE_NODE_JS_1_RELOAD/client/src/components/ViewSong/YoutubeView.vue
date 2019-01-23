<template>
<panel title="Youtube Viewer">
    {{youtubeId}}
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

