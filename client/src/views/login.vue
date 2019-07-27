<template>
  <div id="app">
   <v-app>
     <main>
       <v-container fluid fill-height class="loginOverlay" style="margin-top:10%;">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="blue">
                <v-toolbar-title class="white--text"><h4>Login</h4></v-toolbar-title>
                </v-toolbar-items>
              </v-toolbar>
              <v-card flat>
                <v-card-text class="pt-4">
                  <div>
                      <v-form @submit="loginSubmit">
                        <v-text-field label="e-mail" v-model="input.email" :rules="emailRules" required></v-text-field>
                        <v-text-field label="password" v-model="input.password" :type="show1 ? 'text' : 'password'" required></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn type="submit">Login</v-btn>
                             Create New Account:<router-link to="/app/signup" class="md-primary">signup</router-link>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>

     </main>
   </v-app>
 </div>
</template>
<style>

#app {
  background-color:white;
  background-size: cover;
  overflow:hidden;
}
</style>
<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {

    return {
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        show1: false,
       password: 'Password',
       rules: {
         required: value => !!value || 'Required.',
         emailMatch: () => ('The email and password you entered don\'t match'),
       },
      input :{
        email: "",
        password: ""
      },
      errors: []

    }
  },
  methods: {
 loginSubmit (evt) {
      evt.preventDefault()
      axios.post('http://localhost:3000/login',this.input).then(response => {
        localStorage.setItem('jwtToken', response.data.token)
        this.$router.push({name: 'home'})
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
        alert("enter valid email and password")
      })
    }
  }
}
</script>
