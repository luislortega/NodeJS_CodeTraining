<template>
    <v-container fluid>
      <v-layout column class="elevation-2">
        <v-flex xs12>
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <h1>REGISTER</h1>

            <form name="tab-tracker-form" autocomplete="off">
                <v-text-field label="email" v-model="email"></v-text-field>
                <br>
                <v-text-field label="password" type="password" v-model="password" autocomplete="new-password"></v-text-field>
            </form>    
            <br/>
            <div v-html="error" />
            <br/>
            <v-btn dark class="cyan" @click="register">register</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
  import AuthService from "@/services/AuthService";
  export default {
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

          this.error = "The user was register :)"

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
