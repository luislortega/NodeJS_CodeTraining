<template>
  <div class="hello">
    <v-container fluid>
      <v-layout column class="elevation-2">
        <v-flex xs12>
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <h1>REGISTER</h1>
            <input type="email" name="email" placeholder="email" v-model="email" />
            <input type="password" name="password" placeholder="password" v-model="password" />
            <br/>
            <div class="error" v-html="error" />
            <br/>
            <button @click="register">Send</button>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import AuthService from "@/services/AuthService";
  export default {
    name: "register",
      data() {
      return {  
        email: "",  
        password: "",  
        error: null  
      };  
    },  
    watch: {  
      email(value) {  
        console.log("email changed");  
      } 
    },  
    methods: {
      async register() {  
        try {  
          const response = await AuthService.register({  
            email: this.email,  
            password: this.password  
          });  
          console.log(response);  
        } catch (error) {
          this.error = error.response.data.error;  
        }
      }  
    }  
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
