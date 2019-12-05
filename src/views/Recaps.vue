<template>
  <v-app>
    <v-content>
      <v-layout row wrap class="justify-center">
        <v-flex xs12 lg5 class="mx-3"> 
            <img class="mb-2" src="../assets/img/preview3.jpg"/>
            <v-btn :style="{left: '50%', transform:'translateX(-50%)'}" :to="links[2].route" color="primary" class="mb-3">Create Recap</v-btn>
        </v-flex>
        <v-flex xs12 lg5 class="mx-3">
            <img class="mb-2" src="../assets/img/standingspreview.jpg"/>
            <v-btn :style="{left: '50%', transform:'translateX(-50%)'}" :to="links[3].route" color="primary" class="mb-3">Create Recap</v-btn>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'recaps',
  data() {
    return {
      links: this.$store.state.links
    }
  }
}
</script>

<style scoped lang="scss">

img {
  width: 100%;
}

</style>
