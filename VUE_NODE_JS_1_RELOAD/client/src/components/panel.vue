<template>
<v-container>
    <v-layout column class="elevation-2">
        <v-flex xs6>
        <v-toolbar flat dense class="orange darken-2" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action" />
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
                No slot content yet 
            </slot>
        </div>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    props:[
        'title'
    ]
}
</script>

<style scoped>
</style>
