<template>
<panel title="Lyrics">
    <textarea readonly v-model="lyrics"></textarea>
</panel>
</template>

<script>
import panel from '@/components/panel'
export default {
    props: [
        'lyrics'
    ],
    components: {
        panel
    }
}
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
}
</style>
