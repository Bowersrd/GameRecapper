<template>
    <v-app>
    <v-content class="ma-0 pa-0">
      <v-container grid-list-xl class="ma-0 pa-0" fluid>
        <v-layout class="mb-2" justify-center>
          <v-flex id="wrapper" text-xs-center>
              <v-btn class="white indigo--text bannerButton" :to="links[1].route" large>Create Recap</v-btn>
              <v-btn outline class="white--text bannerButton" large @click.stop="dialog = true">Learn More</v-btn>
              <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card>
        <v-card-title class="headline">Excited to see more?</v-card-title>

        <v-card-text>
          While MLB is the only recap avaliable, the plan is to offer more sports soon as we can! Stay tuned for updates throughout the year. New ideas are always happening so that means more content for YOU.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            flat="flat"
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mx-4 my-3" justify-center>
          <v-flex xs12 md6 lg4 fill-height v-for="image in images" :key="image.source">
            <v-card flat>
              <v-img :src="image.source" aspect-ratio="1.7"></v-img>
              <v-subheader> {{ image.sub }} </v-subheader>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-app>    
</template>

<script>

  export default {
    data() {
      return {
        links: this.$store.state.links,
        images: [
          {source: require('../assets/img/preview1.jpg'), sub: 'Simple. Quick. Efficent.' },
          {source: require('../assets/img/standingspreview.jpg'), sub: 'More than just recaps!' },
          {source: require('../assets/img/preview3.jpg'), sub: 'New Content Always in Progress.' }
        ],
        dialog: false
      }
    }
  }
</script>

<style>
#wrapper{
  width: 100%;
  height: 700px;
  background: url('../assets/img/background.jpg');
  background-position: center;
  background-size: cover;
  margin-bottom: 25px;
}

.bannerButton{
  position: relative;
  top: 600px;
}

/* Media */
@media only screen and (max-width: 600px){
  #wrapper{
    height: 400px;
  }

  .bannerButton{
    top: 300px;
  }
}

</style>

