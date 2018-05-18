<template>
<v-container fluid>
  <v-layout row>
    <v-flex xs10 offset-xs1>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-1">Welcome to RPAPOC</h3>
              <span class="subheading"></span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">Sign in, Sign out, Test API calls, whatever!</div>
              <v-btn v-if="!isLoggedIn" large color="primary" class="mx-0" to="/signin">Sign In</v-btn>
              <v-btn v-if="isLoggedIn" large color="primary" class="mx-0" @click="logout">Sign Out</v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn color="warning" class="mx-0" @click="hitService(1)">Hit Service 1</v-btn>
              <v-btn color="warning" class="mx-0" @click="hitService(2)">Hit Service 2</v-btn>
              <v-btn color="warning" class="mx-0" @click="hitService(3)">Hit Service 3</v-btn>
              <BR/>
              <span v-if="result.user" class="body-2">
                Hello {{ result.user.Name }}! You sucessfully reached {{ result.serviceName }} by passing your username ({{ result.username }})
                to this microservice, which checked in the database to find that your email is {{ result.user.Email }}!
              </span>
              <span v-if="error!==''" class="body-2">
                You can't do that!<BR/>
                The server says: <BR/>
                {{ error }}
              </span>
              <BR/>
              <BR/>
              <BR/>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { HTTP } from '../api'

export default {
  name: 'hello',
  data() {
    return {
      result: {},
      error: '',
      msg: 'This is where you would put view data normally'
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    hitService(num) {
      let path = ''
      switch (num) {
        case 1:
          path = 'one'
          break
        case 2:
          path = 'two'
          break
        case 3:
          path = 'three'
          break
        default:
          path = '404'
      }
      HTTP.get(path)
        .then(response => {
          console.log(response)
          this.result = response.data
          this.error = ''
        })
        .catch(e => {
          this.result = {}
          this.error = e
        })
    }
  }
}
</script>

<style>
.container {
  padding: 0px;
}
.hello {
  padding: 12px;
}
</style>
