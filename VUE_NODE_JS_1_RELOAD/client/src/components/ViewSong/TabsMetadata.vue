<template>
<panel title="Tabs">
    <textarea readonly v-model="tab"></textarea>
</panel>
</template>

<script>
import panel from '@/components/panel'
export default {
    props: [
        'tab'
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
