<template>
  <div class="hello">
    <h1>REGISTER</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <br/>
      <div class="error" v-html="error"/>
    <br/>
    <button @click="register">Send</button>
  </div>
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error {
  color: red;
}
</style>
