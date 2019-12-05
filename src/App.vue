<template>
  <v-app>
    <v-toolbar color="primary white--text" app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="hidden-xs-only">Game Recapper </span>
        <span class="font-weight-light hidden-xs-only">Sports Game Recaps</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="link in links" :key="link.text" router :to="link.route" color="white" flat>
        <span> {{ link.text }} </span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <routerView/>
    </v-content>
    <v-footer color="primary white--text pl-3">Game Recapper &copy; 2019</v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      links: this.$store.state.links.slice(0,2)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
@font-face {
  font-family: "EndzoneMed";
  src: url("@/../assets/fonts/EndzoneMed.woff") format("woff");
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, h1, h2, p, ul, ol {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}
</style>