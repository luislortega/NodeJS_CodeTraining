<template>
<v-container fluid>
    <panel title="Login">
        <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="email" v-model="email"></v-text-field>
            <br>
            <v-text-field label="password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
        </form>
        <br/>
        <div class="danger-alert" v-html="error"/>
        <br/>
        <v-btn dark class="cyan" @click="login">Login</v-btn>
    </panel>
</v-container>
</template>

<script>
import AuthService from "@/services/AuthService"
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },
    watch: {
        email(value) {
            console.log("email changed")
        }
    },
    methods: {
        async login() {
            try {
                const response = await AuthService.login({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                //TODO: redirect to homepage
                this.$router.push({
                    name: 'songs'
                })
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
