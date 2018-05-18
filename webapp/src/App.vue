<template>
<v-app id="rpapoc">
    <v-toolbar app dark color="primary">
      <v-toolbar-title>
        rpapoc
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat to="/about">About</v-btn>-->
     </v-toolbar>
      <v-content ref="content">
        <div>&nbsp;</div>
        <router-view></router-view>
         <v-footer class="pa-3">
          <div>Tom Utley</div>
          <v-spacer></v-spacer>
        </v-footer>
      </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  computed: {
    userIsAuthenticated() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    jump(loc) {
      this.$router.push(loc)
    },
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  beforeMount() {
    // This removes the spinner once the app is loaded
    let pwadiv = document.getElementById('pwaloader')
    if (pwadiv) {
      pwadiv.remove()
    }
  }
}
</script>

<style lang="stylus">
$color-pack = false;

@import '~vuetify/src/stylus/main';
</style>
