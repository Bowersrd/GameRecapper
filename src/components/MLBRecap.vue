<template>
  <v-app>
    <div class="baseballrecap">
        <div id="recap-container" v-bind:class="{ 'notActive' : notCreated, 'Active' : isCreated }" :style=" [ isCustomHome ? { backgroundImage: `url('${getBackground('field_gen')}')`} : { backgroundImage: `url('${getBackground(teams[selectedHome].abbrev)}')` }] ">
          <div id="gradLeft"></div>
          <div id="gradRight"></div>
          <div id="recap-body">
            <div id="title">
              <h1> {{ leagueName }} </h1>
              <h2> {{ park }} </h2>
            </div>
            <div id="scoreboard">
              <div id="teams">
                <div class="team">
                  <div v-if="!isCustom && !isCustomHome" class="logo">
                    <img :src="getImgUrl(teams[selectedAway].abbrev)" v-bind:alt="teams[selectedAway].abbrev"/>
                  </div>
                  <div v-if="!isCustom" v-bind:class="{ 'customTeamName': isCustom || isCustomHome, 'teamName': isReal }" v-bind:style="{ backgroundColor: 'rgba(' + teams[selectedAway].primary + ',0.8)', borderBottom: '4px solid' + teams[selectedAway].secondary }">
                    <h1> {{ teams[selectedAway].mascot }} </h1>
                    <p class="record"> {{ awayRecord }} </p>
                  </div>
                   <div v-if="isCustom" class="customTeamName" v-bind:style="{ backgroundColor: customAwayPrimary, borderBottom: '4px solid' + customAwaySecondary }">
                    <h1> {{ customAwayMascot }} </h1>
                    <p class="record"> {{ awayRecord }} </p>
                  </div>
                  <div class="rhe">
                    <div class="runs">
                      <h3> {{ awayRuns }} </h3>
                    </div>
                    <div class="hits">
                      <h3> {{ awayHits }} </h3>
                      </div>
                    <div class="errors">
                      <h3> {{ awayErrors }} </h3>
                      </div>
                  </div>
                </div>
                <div class="team">
                  <div v-if="!isCustom && !isCustomHome" class="logo">
                    <img :src="getImgUrl(teams[selectedHome].abbrev)" v-bind:alt="teams[selectedAway].abbrev"/>
                  </div>
                  <div v-if="!isCustomHome" v-bind:class="{ 'customTeamName': isCustom || isCustomHome, 'teamName': isReal }" v-bind:style="{ backgroundColor: 'rgba(' + teams[selectedHome].primary + ',0.8)', borderBottom: '4px solid' + teams[selectedHome].secondary }">
                    <h1> {{ teams[selectedHome].mascot }} </h1>
                    <p class="record"> {{ homeRecord }} </p>
                  </div>
                  <div v-if="isCustomHome" class="customTeamName" v-bind:style="{ backgroundColor: customHomePrimary, borderBottom: '4px solid' + customHomeSecondary }">
                    <h1> {{ customHomeMascot }} </h1>
                    <p class="record"> {{ homeRecord }} </p>
                  </div>
                  <div class="rhe">
                    <div class="runs">
                      <h3> {{ homeRuns }} </h3>
                    </div>
                    <div class="hits">
                      <h3> {{ homeHits }} </h3>
                    </div>
                    <div class="errors">
                      <h3> {{ homeErrors }} </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div id="decisions">
                <div class="decision">
                  <div class="result">
                    <h2>W</h2>
                  </div>
                  <div class="pitcher">
                    <h2> {{ WP }} </h2>
                    <p> {{ wpStats }} </p>
                  </div>
                </div>
                <div class="decision">
                  <div class="result">
                    <h2>L</h2>
                  </div>
                  <div class="pitcher">
                    <h2> {{ LP }} </h2>
                    <p> {{ lpStats }} </p>
                  </div>
                </div>
                <div class="decision" v-if="this.SV != ''">
                  <div class="result">
                    <h2>S</h2>
                  </div>
                  <div class="pitcher">
                    <h2> {{ SV }} </h2>
                    <p>  {{ svTotal }} </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="stats">
              <div v-if="!isCustom" id="away-stats" v-bind:style="{ backgroundColor: 'rgba(' + teams[selectedAway].primary + ',0.8)', borderBottom: '4px solid' + teams[selectedAway].secondary }">
                <div class="team-bar" v-bind:style="{ borderBottom: '4px solid' + teams[selectedAway].secondary }"> {{ teams[selectedAway].city }} {{ teams[selectedAway].mascot }} </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer1 }} </div>
                  <div class="stat-line"> {{ awayStatLine1 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer2 }} </div>
                  <div class="stat-line"> {{ awayStatLine2 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer3 }} </div>
                  <div class="stat-line"> {{ awayStatLine3 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer4 }} </div>
                  <div class="stat-line"> {{ awayStatLine4 }} </div>
                </div>
              </div>
              <div v-if="isCustom" id="away-stats" v-bind:style="{ backgroundColor: customAwayPrimary, borderBottom: '4px solid' + customAwaySecondary }">
                <div class="team-bar" v-bind:style="{ borderBottom: '4px solid' + customAwaySecondary }"> {{ customAwayCity }} {{ customAwayMascot }} </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer1 }} </div>
                  <div class="stat-line"> {{ awayStatLine1 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer2 }} </div>
                  <div class="stat-line"> {{ awayStatLine2 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer3 }} </div>
                  <div class="stat-line"> {{ awayStatLine3 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ awayStatPlayer4 }} </div>
                  <div class="stat-line"> {{ awayStatLine4 }} </div>
                </div>
              </div>
              <div v-if="!isCustomHome" id="home-stats" v-bind:style="{ backgroundColor: 'rgba(' + teams[selectedHome].primary + ',0.8)', borderBottom: '4px solid' + teams[selectedHome].secondary }">
                <div class="team-bar" v-bind:style="{ borderBottom: '4px solid' + teams[selectedHome].secondary }"> {{ teams[selectedHome].city }} {{ teams[selectedHome].mascot }} </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer1 }} </div>
                  <div class="stat-line"> {{ homeStatLine1 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer2 }} </div>
                  <div class="stat-line"> {{ homeStatLine2 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer3 }} </div>
                  <div class="stat-line"> {{ homeStatLine3 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer4 }} </div>
                  <div class="stat-line"> {{ homeStatLine4 }} </div>
                </div>
              </div>
              <div v-if="isCustomHome" id="home-stats" v-bind:style="{ backgroundColor: customHomePrimary, borderBottom: '4px solid' + customHomeSecondary }">
                <div class="team-bar" v-bind:style="{ borderBottom: '4px solid' + customHomeSecondary }"> {{ customHomeCity }} {{ customHomeMascot }} </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer1 }} </div>
                  <div class="stat-line"> {{ homeStatLine1 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer2 }} </div>
                  <div class="stat-line"> {{ homeStatLine2 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer3 }} </div>
                  <div class="stat-line"> {{ homeStatLine3 }} </div>
                </div>
                <div class="player-stat">
                  <div class="player"> {{ homeStatPlayer4 }} </div>
                  <div class="stat-line"> {{ homeStatLine4 }} </div>
                </div>
              </div>
            </div>
            <div id="headline">
              <p> {{ tagLine }} </p>
            </div>
          </div>
        </div>
      <div id="expansion" v-if="notCreated">
        <v-expansion-panel value="1">
          <v-expansion-panel-content>
            <template v-slot:actions>
              <v-icon color="primary">$vuetify.icons.expand</v-icon>
            </template>
            <template v-slot:header>
              <div>League Info</div>
            </template>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3 mt-2" xs12 sm5>
                <v-text-field
                  label="League Name"
                  hint="Ex. Major League Baseball"
                  persistent-hint
                  outline
                  v-model="leagueName"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3 mt-2" xs12 sm5>
                <v-text-field
                  label="Ballpark (or Location)"
                  hint="Ex. Fenway Park, Boston, MA"
                  persistent-hint
                  outline
                  v-model="park"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Winning Pitcher"
                  hint="Ex. Smoltz"
                  persistent-hint
                  outline
                  v-model="WP"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Winning Pitcher Stats"
                  hint="Ex. (4-1, 2.15 ERA)"
                  persistent-hint
                  outline
                  v-model="wpStats"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Losing Pitcher"
                  hint="Ex. Young"
                  persistent-hint
                  outline
                  v-model="LP"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Losing Pitcher Stats"
                  hint="Ex. (4-7, 3.75 ERA)"
                  persistent-hint
                  outline
                  v-model="lpStats"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Save (If applicable)"
                  hint="Ex. Rivera"
                  persistent-hint
                  outline
                  v-model="SV"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Save Total for Season"
                  hint="Ex. (24)"
                  persistent-hint
                  outline
                  v-model="svTotal"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-flex xs12 sm10 class="mx-2 mb-3">
                <v-text-field
                  label="Tag Line"
                  hint="Ex. Hamels (TEX) gets first opening day win of career (3 Starts)"
                  persistent-hint
                  outline
                  v-model="tagLine"
                ></v-text-field>
              </v-flex>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <template v-slot:actions>
              <v-icon color="primary">$vuetify.icons.expand</v-icon>
            </template>
            <template v-slot:header>
              <div>Away Team</div>
            </template>
              <v-layout row wrap>
              <v-flex class="mx-2 mb-3 mt-2" xs12 sm5 d-flex>
                <v-select
                  :disabled="isCustom"
                  :items="teams"   
                  :item-text="text"
                  item-value="id"           
                  label="Select Team"
                  hint="Check the box for Custom Teams!"
                  persistent-hint
                  outline
                  v-model="selectedAway"
                >
                </v-select>
              </v-flex>
              <v-flex class="mx-2 mb-3 mt-2" xs12 sm3>
                <v-text-field
                  label="Team Record"
                  hint="Ex. 17-12"
                  persistent-hint
                  outline
                  v-model="awayRecord"
                ></v-text-field>
              </v-flex>
              <v-checkbox class="ml-2" label="Custom Team" v-model="isCustom"></v-checkbox>
              </v-layout>
              <v-layout row wrap v-if="isCustom">
                <v-flex class="mx-2 mb-3 mt-2" xs12 sm3 d-flex>
                  <v-text-field
                  label="Custom City"
                  hint="Ex. Boston"
                  persistent-hint
                  outline
                  v-model="customAwayCity"
                ></v-text-field>
                </v-flex>
                <v-flex class="mx-2 mb-3 mt-2" xs12 sm3 d-flex>
                  <v-text-field
                  label="Custom Mascot"
                  hint="Ex. Patriots"
                  persistent-hint
                  outline
                  v-model="customAwayMascot"
                ></v-text-field>
                </v-flex>
                <v-flex xs12 sm1 class="teamColors mt-2 mb-3">
                  <input type="color" name="favcolor" v-model="customAwayPrimary">
                </v-flex>
                <v-flex xs12 sm1 class="teamColors mt-2 mb-3">
                  <input type="color" name="favcolor" v-model="customAwaySecondary">
                </v-flex>
              </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm3>
                <v-text-field
                  label="Runs"
                  hint="Ex. 3"
                  persistent-hint
                  outline
                  v-model="awayRuns"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm3>
                <v-text-field
                  label="Hits"
                  hint="Ex. 8"
                  persistent-hint
                  outline
                  v-model="awayHits"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm3>
                <v-text-field
                  label="Errors"
                  hint="Ex. 2"
                  persistent-hint
                  outline
                  v-model="awayErrors"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. Jon Lester"
                  persistent-hint
                  outline
                  v-model="awayStatPlayer1"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 6.0IP, 4H, 2ER, 7K"
                  persistent-hint
                  outline
                  v-model="awayStatLine1"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. David Ortiz"
                  persistent-hint
                  outline
                  v-model="awayStatPlayer2"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 3-4, 2B, HR (3)"
                  persistent-hint
                  outline
                  v-model="awayStatLine2"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. Babe Ruth"
                  persistent-hint
                  outline
                  v-model="awayStatPlayer3"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 2-3, BB, HR (12), K"
                  persistent-hint
                  outline
                  v-model="awayStatLine3"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. Chipper Jones"
                  persistent-hint
                  outline
                  v-model="awayStatPlayer4"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 1-4, 2K"
                  persistent-hint
                  outline
                  v-model="awayStatLine4"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <template v-slot:actions>
              <v-icon color="primary">$vuetify.icons.expand</v-icon>
            </template>      
            <template v-slot:header>
              <div>Home Team</div>
            </template>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3 mt-2" xs12 sm5 d-flex>
                <v-select
                  :disabled="isCustomHome"
                  :items="teams"   
                  :item-text="text"
                  item-value="id"           
                  label="Select Team"
                  hint="Check the box for Custom Teams!"
                  persistent-hint
                  outline
                  v-model="selectedHome"
                >
                </v-select>
              </v-flex>
              <v-flex class="mx-2 mb-3 mt-2" xs12 sm3>
                <v-text-field
                  label="Team Record"
                  hint="Ex. 17-12"
                  persistent-hint
                  outline
                  v-model="homeRecord"
                >
                </v-text-field>
              </v-flex>
              <v-checkbox class="ml-2" label="Custom Team" v-model="isCustomHome"></v-checkbox>
              </v-layout>
              <v-layout row wrap v-if="isCustomHome">
                <v-flex class="mx-2 mb-3 mt-2" xs12 sm3 d-flex>
                  <v-text-field
                  label="Custom City"
                  hint="Ex. Boston"
                  persistent-hint
                  outline
                  v-model="customHomeCity"
                ></v-text-field>
                </v-flex>
                <v-flex class="mx-2 mb-3 mt-2" xs12 sm3 d-flex>
                  <v-text-field
                  label="Custom Mascot"
                  hint="Ex. Patriots"
                  persistent-hint
                  outline
                  v-model="customHomeMascot"
                ></v-text-field>
                </v-flex>
                <v-flex xs12 sm1 class="teamColors mt-2 mb-3">
                  <input type="color" name="favcolor" v-model="customHomePrimary">
                </v-flex>
                <v-flex xs12 sm1 class="teamColors mt-2 mb-3">
                  <input type="color" name="favcolor" v-model="customHomeSecondary">
                </v-flex>
              </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm3>
                <v-text-field
                  label="Runs"
                  hint="Ex. 3"
                  persistent-hint
                  outline
                  v-model="homeRuns"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm3>
                <v-text-field
                  label="Hits"
                  hint="Ex. 8"
                  persistent-hint
                  outline
                  v-model="homeHits"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm3>
                <v-text-field
                  label="Errors"
                  hint="Ex. 2"
                  persistent-hint
                  outline
                  v-model="homeErrors"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. Jon Lester"
                  persistent-hint
                  outline
                  v-model="homeStatPlayer1"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 6.0IP, 4H, 2ER, 7K"
                  persistent-hint
                  outline
                  v-model="homeStatLine1"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. David Ortiz"
                  persistent-hint
                  outline
                  v-model="homeStatPlayer2"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 3-4, 2B, HR (3)"
                  persistent-hint
                  outline
                  v-model="homeStatLine2"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. Babe Ruth"
                  persistent-hint
                  outline
                  v-model="homeStatPlayer3"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 2-3, BB, HR (12), K"
                  persistent-hint
                  outline
                  v-model="homeStatLine3"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Name"
                  hint="Ex. Chipper Jones"
                  persistent-hint
                  outline
                  v-model="homeStatPlayer4"
                ></v-text-field>
              </v-flex>
              <v-flex class="mx-2 mb-3" xs12 sm5>
                <v-text-field
                  label="Player Stats"
                  hint="Ex. 1-4, 2K"
                  persistent-hint
                  outline
                  v-model="homeStatLine4"
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
    </div>
  </v-app>
</template>

<script>
import html2canvas from '../../node_modules/html2canvas/'
import { saveAs } from 'file-saver';

export default {
  name: 'baseballrecap',
  data() {
    return {
      loader: null,
      loading: false,
      isCustom: false,
      isCustomHome: false,
      isReal: true,
      notCreated: true,
      leagueName: '',
      park: '',
      WP: '',
      wpStats: '',
      LP: '',
      lpStats: '',
      SV: '',
      svTotal: '',
      tagLine: '',
      selectedAway: '0',
      awayRecord: '',
      awayRuns: '',
      awayHits: '',
      awayErrors: '',
      awayStatPlayer1: '',
      awayStatLine1: '',
      awayStatPlayer2: '',
      awayStatLine2: '',
      awayStatPlayer3: '',
      awayStatLine3: '',
      awayStatPlayer4: '',
      awayStatLine4: '',
      awayStatPlayer5: '',
      awayStatLine5: '',
      selectedHome: '0',
      homeRecord: '',
      homeRuns: '',
      homeHits: '',
      homeErrors: '',
      homeStatPlayer1: '',
      homeStatLine1: '',
      homeStatPlayer2: '',
      homeStatLine2: '',
      homeStatPlayer3: '',
      homeStatLine3: '',
      homeStatPlayer4: '',
      homeStatLine4: '',
      homeStatPlayer5: '',
      homeStatLine5: '',
      customAwayCity: '',
      customAwayMascot: '',
      customAwayPrimary: '',
      customAwaySecondary: '',
      customhomeCity: '',
      customhomeMascot: '',
      customhomePrimary: '',
      customhomeSecondary: '',
      teams: this.$store.state.teams,
      teamList: []
    }
  },
  methods: {
    saveCanvas() {
      html2canvas(document.querySelector("#recap-container")).then(canvas => {
      canvas.toBlob(function(blob){
        saveAs(blob, 'GameRecap.png');}, 'image/png', 1);
      });
    },
    getImgUrl(pic) {
    return require('../assets/img/mlb/'+pic+'.png')
    },
    getBackground(bg) {
    return require('../assets/img/backgrounds/'+bg+'.jpg')
    },
    text: item => `${item.city} ${item.mascot}`
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false, this.notCreated = false), 2000)

        this.loader = null
      }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Teko:500');

h1, h2 {
  color: #fff;
}

h3 {
  color: #343434;
  font-size: 3.2rem;
  font-family: 'Teko', sans-serif;
  font-weight: 500;
}

.baseballrecap {
  margin-top: 25px;
}

.notActive {
  display: none;
}

#recap-container {
    width: 1280px;
    height: 720px;  
    background-size: cover;
    margin: 0 auto;
    position: relative;
}

#recap-body {
  width: 924px;
  height: 550px;
  margin: 0 auto;
  position: relative;
  top: 60px;
  background: rgba(0,0,0,0.8);
  border: 3px solid #444;
}

#title {
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(40,40,40,0.8));
  border-bottom: 2px solid #444;
  text-transform: uppercase;
  & h1,h2 {
    margin-left: 25px;
  };
  & h1 {
    font-size: 2.4rem;
  }
  & h2 {
    font-size: 1.4rem;
  }
}

#scoreboard {
  width: 100%;
  height: 140px;
  display: flex;
}

#teams {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
}

#decisions {
  width: 30%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(40,40,40,0.8));
}

.team {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
}

.logo {
  overflow: hidden;
  height: 100%;
  width: 13%;
  & img {
    height: 100%;
  }
}

.teamName {
  height: 100%;
  min-width: 52%;
  display: flex;
  align-items: center;
  & p {
    color: #fff;
    font-size: 1rem;
    margin: 19px 0 0 10px;
  }
  & h1 {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 1.8rem;
  }
}

.customTeamName {
  height: 100%;
  min-width: 65%;
  display: flex;
  align-items: center;
  & p {
    color: #fff;
    font-size: 1rem;
    margin: 19px 0 0 10px;
  }
  & h1 {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 1.8rem;
  }
}

.rhe {
  background: url('../assets/img/test.png');
  background-size: cover;
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
}

.runs {
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  position: relative;
  top:-2px;
}

.hits {
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  position: relative;
  top:-2px;
}

.errors {
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  position: relative;
  top:-2px;
}

.decisions {
  display: flex;
  flex-direction: column;
}

.decision {
  display: flex;
  height: 33.33%;
  margin-left: 5px;
}

.result {
  width: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 0.85rem;
  }
}

.pitcher {
  width: 90%;
  display: flex;
  margin-left: 5px;
  align-items: center;
  text-transform: uppercase;
  & h2 {
    font-size: 0.95rem;
  }
  & p {
    color: #fff;
    margin-left: 5px;
    margin-bottom: 0px;
    font-size: 0.85rem;
  }
}

#stats {
  width: 100%;
  height: 275px;
  display: flex;
}

#headline {
  width: 100%;
  height: 38px;
  position: relative;
  top: 12px;
  left: 15px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  & p {
    color: #FFD700;
    font-weight: bold;
    font-size: 1.1rem;
  }
}

#away-stats {
  width: 50%;
  height: 275px;
}

#home-stats {
  width: 50%;
  height: 275px;
}

.team-bar {
  width: 100%;
  height: 25px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.player-stat {
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 10px 15px;
  & .player {
    font-size: 1.5rem;
  }
}

#titleForm input, .awayStatBox input, .homeStatBox input, .team-box input, select {
  width: 45%;
  border: 2px solid #ccc;
  padding: 10px 15px;
  margin: 10px;
}

.rhe-box input {
  width: 30%;
  border: 2px solid #ccc;
  padding: 10px 15px;
  margin: 10px;
}

.tagLine input {
  width: 90%;
  border: 2px solid #ccc;
  padding: 10px 15px;
  margin: 10px 10px 25px;
}

#expansion {
  width: 60%;
  margin: 25px auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
}

#buttonGroup {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

#gradLeft {
  height: 720px;
  width: 400px;
  background: linear-gradient(to right,rgba(0,0,0,0.2), rgba(0,0,0,0));
  position: absolute;
}

#gradRight {
  height: 720px;
  width: 400px;
  background: linear-gradient(to left,rgba(0,0,0,0.2), rgba(0,0,0,0));
  position: absolute;
  right: 0;
}

.teamColors input {
  width: 100%;
  height: 50px;
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
