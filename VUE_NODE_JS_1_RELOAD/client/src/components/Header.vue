<template>
<v-toolbar fixed class="orange darken-2" dark>
    <v-toolbar-title>
        <v-btn flat dark :to="{name:'HelloWorld'}">
            VueApp
        </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn flat dark :to="{name: 'login'}">
            Login
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn flat dark :to="{ name: 'register'}">
            Sign Up
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
