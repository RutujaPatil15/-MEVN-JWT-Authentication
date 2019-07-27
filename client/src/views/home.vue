<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">Home</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  color="blue"  @click="logout()"><span class="caption text-lowercase">Logout</span></v-btn>
    </v-app-bar>

    <v-content>
    <h1 style="text-align:center;">Welcome Home !!</h1>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
       errors: []
    }
  },
  created () {
   axios.defaults.headers.common['Authorization'] ='JWT'+' '+localStorage.getItem('jwtToken')
   axios.get('http://localhost:3000/getData').then(response => {
    // console.log(response.data);
    }).catch(e => {
     this.errors.push(e)
     if(e.response.status === 401) {
     localStorage.removeItem('jwtToken')
     this.$router.push({name: 'login'})
    }
   })
 },
  methods: {
    logout:function() {
      localStorage.removeItem('jwtToken')
      this.$router.push({name: 'login'})
  }
  }
};
</script>
