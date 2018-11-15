<template>
  <div>
    <h1>My Vue.Js Login</h1>
    <br>
    <input type="email" name="email" placeholder="insert email here" v-model="email"/><br><br>
    <input type="password" name="pass" placeholder="insert password here" v-model="pass"/>
    <br>
    <br>
    <button @click="register">REGISTER</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
        email: '',
        pass: ''
    }
  },
  methods:{
      async register(){
          const response = await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
        //   console.log(`im trying to register ${this.email} with ${this.pass}`)
        console.log(response.data)
      }
  }
}
// export default {
//   data () {
//     return {
//         email:'abc',
//         password:'123'
//     }
//   },
//   watch:{
//       email (value){
//           console.log(`email has changed ${value}`)
//       }
//   },
//   mounted(){
//       setTimeout(() => {
//           this.email = "Hello world"
//       }, 2000);
//   }
// }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
