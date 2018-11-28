<template>
<v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
        VueApp
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn 
        flat 
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
