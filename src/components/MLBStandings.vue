<template>
  <v-app>
      <v-container>
        <div id="wrapper" v-if="!notCreated">
            <div id="recapContainer">
                <v-layout row>
                    <v-flex>
                        <v-card color="white--text" style="background: linear-gradient(rgba(25,25,25,0.8),rgba(1,1,1,0.8)" flat tile height="70px">
                            <v-card-text class="display-1 text-uppercase font-weight-black"> {{ standingsTitle }} </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-spacer></v-spacer>
                    <v-flex xs1>
                        <v-card flat tile color="transparent white--text" class="title text-uppercase font-weight-medium text-xs-center">
                            <v-card-text>W</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card flat tile color="transparent white--text" class="title text-uppercase font-weight-medium text-xs-center">
                            <v-card-text>L</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card flat tile color="transparent white--text" class="title text-uppercase font-weight-medium text-xs-center">
                            <v-card-text>GB</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-2">
                    <v-flex xs1>
                        <v-img :src="require('../assets/img/mlb/'+ teams[team1].abbrev +'.png')"></v-img>
                    </v-flex>
                    <v-flex xs8>
                        <v-card color="white--text" :style=" { background: `rgba(${teams[team1].primary},0.8)`, borderBottom: `4px solid ${teams[team1].secondary}` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-medium"> {{ teams[team1].city }} {{ teams[team1].mascot }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ win1 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ loss1 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box" color="#333--text" :style=" { background: `rgba(255,223,0,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ gb1 }} </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-2">
                    <v-flex xs1>
                        <v-img :src="require('../assets/img/mlb/'+ teams[team2].abbrev +'.png')"></v-img>
                    </v-flex>
                    <v-flex xs8>
                        <v-card color="white--text" :style=" { background: `rgba(${teams[team2].primary},0.8)`, borderBottom: `4px solid ${teams[team2].secondary}` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-medium"> {{ teams[team2].city }} {{ teams[team2].mascot }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ win2 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ loss2 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box" color="#333--text" :style=" { background: `rgba(255,223,0,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ gb2 }} </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-2">
                    <v-flex xs1>
                        <v-img :src="require('../assets/img/mlb/'+ teams[team3].abbrev +'.png')"></v-img>
                    </v-flex>
                    <v-flex xs8>
                        <v-card color="white--text" :style=" { background: `rgba(${teams[team3].primary},0.8)`, borderBottom: `4px solid ${teams[team3].secondary}` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-medium"> {{ teams[team3].city }} {{ teams[team3].mascot }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ win3 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ loss3 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box" color="#333--text" :style=" { background: `rgba(255,223,0,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ gb3 }} </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-2">
                    <v-flex xs1>
                        <v-img :src="require('../assets/img/mlb/'+ teams[team4].abbrev +'.png')"></v-img>
                    </v-flex>
                    <v-flex xs8>
                        <v-card color="white--text" :style=" { background: `rgba(${teams[team4].primary},0.8)`, borderBottom: `4px solid ${teams[team4].secondary}` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-medium"> {{ teams[team4].city }} {{ teams[team4].mascot }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ win4 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ loss4 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box" color="#333--text" :style=" { background: `rgba(255,223,0,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ gb4 }} </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-2">
                    <v-flex xs1>
                        <v-img :src="require('../assets/img/mlb/'+ teams[team5].abbrev +'.png')"></v-img>
                    </v-flex>
                    <v-flex xs8>
                        <v-card color="white--text" :style=" { background: `rgba(${teams[team5].primary},0.8)`, borderBottom: `4px solid ${teams[team5].secondary}` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-medium"> {{ teams[team5].city }} {{ teams[team5].mascot }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ win5 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box bRight" color="#333--text" :style=" { background: `rgba(255,255,255,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ loss5 }} </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs1>
                        <v-card class="box" color="#333--text" :style=" { background: `rgba(255,223,0,0.9)`, borderBottom: `4px solid rgba(200,200,200,1)` } " flat tile height="63px">
                            <v-card-text class="display-1 text-uppercase font-weight-black text-xs-center"> {{ gb5 }} </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>
        </div>
        <div id="expansion" v-if="notCreated">
        <v-expansion-panel value="1">
          <v-expansion-panel-content>
            <template v-slot:actions>
              <v-icon color="primary">$vuetify.icons.expand</v-icon>
            </template>
            <template v-slot:header>
              <div>Standings Information</div>
            </template>
            <v-layout row wrap>
                <v-flex xs12 md8 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="Standings Header"
                    hint="Ex. National League West Standings"
                    persistent-hint
                    outline
                    v-model="standingsTitle"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md5 class="mt-1 mx-2 mb-2">
                    <v-select
                    :items="teams"   
                    :item-text="text"
                    item-value="id"           
                    label="Select Team"
                    outline
                    v-model="team1"
                    >
                    </v-select>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="W"
                    hint="Ex. 98"
                    persistent-hint
                    outline
                    v-model="win1"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="L"
                    hint="Ex. 64"
                    persistent-hint
                    outline
                    v-model="loss1"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="GB"
                    hint="Ex. --"
                    persistent-hint
                    outline
                    v-model="gb1"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md5 class="mt-1 mx-2 mb-2">
                    <v-select
                    :items="teams"   
                    :item-text="text"
                    item-value="id"           
                    label="Select Team"
                    outline
                    v-model="team2"
                    >
                    </v-select>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="W"
                    hint="Ex. 86"
                    persistent-hint
                    outline
                    v-model="win2"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="L"
                    hint="Ex. 76"
                    persistent-hint
                    outline
                    v-model="loss2"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="GB"
                    hint="Ex. 12"
                    persistent-hint
                    outline
                    v-model="gb2"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md5 class="mt-1 mx-2 mb-2">
                    <v-select
                    :items="teams"   
                    :item-text="text"
                    item-value="id"           
                    label="Select Team"
                    outline
                    v-model="team3"
                    >
                    </v-select>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="W"
                    hint="Ex. 78"
                    persistent-hint
                    outline
                    v-model="win3"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="L"
                    hint="Ex. 84"
                    persistent-hint
                    outline
                    v-model="loss3"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="GB"
                    hint="Ex. 20"
                    persistent-hint
                    outline
                    v-model="gb3"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md5 class="mt-1 mx-2 mb-2">
                    <v-select
                    :items="teams"   
                    :item-text="text"
                    item-value="id"           
                    label="Select Team"
                    outline
                    v-model="team4"
                    >
                    </v-select>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="W"
                    hint="Ex. 76"
                    persistent-hint
                    outline
                    v-model="win4"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="L"
                    hint="Ex. 86"
                    persistent-hint
                    outline
                    v-model="loss4"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="GB"
                    hint="Ex. 22"
                    persistent-hint
                    outline
                    v-model="gb4"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md5 class="mt-1 mx-2 mb-2">
                    <v-select
                    :items="teams"   
                    :item-text="text"
                    item-value="id"           
                    label="Select Team"
                    outline
                    v-model="team5"
                    >
                    </v-select>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="W"
                    hint="Ex. 70"
                    persistent-hint
                    outline
                    v-model="win5"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="L"
                    hint="Ex. 92"
                    persistent-hint
                    outline
                    v-model="loss5"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 md1 class="mt-1 mx-2 mb-2">
                    <v-text-field
                    label="GB"
                    hint="Ex. 28"
                    persistent-hint
                    outline
                    v-model="gb5"
                    ></v-text-field>
                </v-flex>
            </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
    <v-layout xs12 class="justify-center mt-2">
      <v-btn color="primary" @click="loader = 'loading'" v-if="notCreated == true" :loading="loading" :disabled="loading">Create<template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>cached</v-icon>
          </span>
        </template></v-btn>
      <v-btn color="primary" @click="notCreated = !notCreated" v-if="notCreated == false">Edit</v-btn>
      <v-btn color="primary" @click="saveCanvas()" v-if="notCreated == false">Download</v-btn>
    </v-layout>
      </v-container>
  </v-app>
</template>

<script>
import html2canvas from '../../node_modules/html2canvas/'
import { saveAs } from 'file-saver';

export default {
   
  data() {
    return {
      teams: this.$store.state.teams,
      loader: null,
      loading: false,
      notCreated: true,
      team1: '',
      team2: '',
      team3: '',
      team4: '',
      team5: '',
      win1: '',
      win2: '',
      win3: '',
      win4: '',
      win5: '',
      loss1: '',
      loss2: '',
      loss3: '',
      loss4: '',
      loss5: '',
      gb1: '--',
      gb2: '',
      gb3: '',
      gb4: '',
      gb5: ''
    }
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false, this.notCreated = false), 2000)

        this.loader = null
      }
    },
  methods: {
    saveCanvas() {
      html2canvas(document.querySelector("#wrapper")).then(canvas => {
      canvas.toBlob(function(blob){
        saveAs(blob, 'Standings.png');}, 'image/png', 1);
      });
    },
    text: item => `${item.city} ${item.mascot}`
  }
}
</script>

<style scoped lang="scss">

#wrapper {
    width: 1280px;
    height: 720px;
    background: url('../assets/img/backgrounds/generic.png');
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

#recapContainer {
    width: 924px;
    height: 520px;
    background: rgba(0,0,0,0.6);
    border: 2px solid #333;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.bRight {
    border-right: 2px solid #bbb;
}


#expansion {
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
      width: 90%;
  }
}

//LOADER

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }


</style>
