<template>
<v-toolbar fixed class="orange darken-2" dark>
    <v-toolbar-title>
        <v-btn flat dark :to="{name:'HelloWorld'}">
            VueApp
        </v-btn>
    </v-toolbar-title>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
        <v-btn flat dark :to="{name: 'songs'}">
            Browse
        </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
        <v-btn flat dark :to="{name: 'login'}">
            Login
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
        <v-btn flat dark :to="{ name: 'register'}">
            Sign Up
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
        <v-btn flat dark @click="logout">
            Log Out
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            //TODO: redirect to homepage
            this.$router.push({
                name:'HelloWorld'
            })
        }
    }
}
</script>

<style scoped>

</style>
