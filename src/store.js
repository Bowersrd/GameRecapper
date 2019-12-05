import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      {text: 'Home', route: '/'}, 
      {text: 'Game Recaps', route: '/gamerecaps'},
      {text: 'Baseball Recap', route: '/baseballrecap'},
      {text: 'Baseball Standings', route: '/baseballstandings'}
    ],
    teams: [
      {
        id: 0,
        city: 'Arizona', 
        mascot: 'Diamondbacks',
        primary: '167,25,48',
        secondary: '#E3D4AD',
        abbrev: 'ARI'
      }, 
      {
        id: 1,
        city: 'Atlanta', 
        mascot: 'Braves',
        primary: '19, 39, 79',
        secondary: '#CE1141',
        abbrev: 'ATL'
      },
      {
        id: 2,
        city: 'Baltimore', 
        mascot: 'Orioles',
        primary: '223,70,1',
        secondary: '#000000',
        abbrev: 'BAL'
      }, 
      {
        id: 3,
        city: 'Boston', 
        mascot: 'Red Sox',
        primary: '189, 48, 57',
        secondary: '#0C2340',
        abbrev: 'BOS'
      },
      {
        id: 4,
        city: 'Chicago', 
        mascot: 'Cubs',
        primary: '14,51,134',
        secondary: '#CC3433',
        abbrev: 'CHC'
      }, 
      {
        id: 5,
        city: 'Chicago', 
        mascot: 'White Sox',
        primary: '39,37,31',
        secondary: '#C4CED4',
        abbrev: 'CWS'
      },
      {
        id: 6,
        city: 'Cincinnati', 
        mascot: 'Reds',
        primary: '198,1,31',
        secondary: '#000000',
        abbrev: 'CIN'
      }, 
      {
        id: 7,
        city: 'Cleveland', 
        mascot: 'Indians',
        primary: '12,35,64',
        secondary: '#E31937',
        abbrev: 'CLE'
      },
      {
        id: 8,
        city: 'Colorado', 
        mascot: 'Rockies',
        primary: '51,0,111',
        secondary: '#C4CED4',
        abbrev: 'COL'
      }, 
      {
        id: 9,
        city: 'Detroit', 
        mascot: 'Tigers',
        primary: '12,35,64',
        secondary: '#FA4616',
        abbrev: 'DET'
      },
      {
        id: 10,
        city: 'Houston', 
        mascot: 'Astros',
        primary: '0,45,98',
        secondary: '#EB6E1F',
        abbrev: 'HOU'
      }, 
      {
        id: 11,
        city: 'Kansas City', 
        mascot: 'Royals',
        primary: '0,70,135',
        secondary: '#BD9B60',
        abbrev: 'KC'
      },
      {
        id: 12,
        city: 'Los Angeles', 
        mascot: 'Angels',
        primary: '0,50,99',
        secondary: '#BA0021',
        abbrev: 'LAA'
      }, 
      {
        id: 13,
        city: 'Los Angeles', 
        mascot: 'Dodgers',
        primary: '0,90,156',
        secondary: '#FFFFFF',
        abbrev: 'LAD'
      },
      {
        id: 14,
        city: 'Miami', 
        mascot: 'Marlins',
        primary: '0,163,224',
        secondary: '#EF3340',
        abbrev: 'MIA'
      },
      {
        id: 15,
        city: 'Milwaukee', 
        mascot: 'Brewers',
        primary: '19,41,75',
        secondary: '#B6922E',
        abbrev: 'MIL'
      }, 
      {
        id: 16,
        city: 'Minnesota', 
        mascot: 'Twins',
        primary: '0,43,92',
        secondary: '#D31145',
        abbrev: 'MIN'
      },
      {
        id: 17,
        city: 'New York', 
        mascot: 'Mets',
        primary: '0,45, 114',
        secondary: '#FF5910',
        abbrev: 'NYM'
      }, 
      {
        id: 18,
        city: 'New York', 
        mascot: 'Yankees',
        primary: '12,35,64',
        secondary: '#FFFFFF',
        abbrev: 'NYY'
      },
      {
        id: 19,
        city: 'Oakland', 
        mascot: 'Athletics',
        primary: '0,56,49',
        secondary: '#EFB21E',
        abbrev: 'OAK'
      }, 
      {
        id: 20,
        city: 'Philadelphia', 
        mascot: 'Phillies',
        primary: '232,24,40',
        secondary: '#002D72',
        abbrev: 'PHI'
      },
      {
        id: 21,
        city: 'Pittsburgh', 
        mascot: 'Pirates',
        primary: '39,37,31',
        secondary: '#FDB827',
        abbrev: 'PIT'
      }, 
      {
        id: 22,
        city: 'St. Louis', 
        mascot: 'Cardinals',
        primary: '196,30,58',
        secondary: '#0C2340',
        abbrev: 'STL'
      },
      {
        id: 23,
        city: 'San Diego', 
        mascot: 'Padres',
        primary: '0,45,98',
        secondary: '#A2AAAD',
        abbrev: 'SD'
      }, 
      {
        id: 24,
        city: 'San Francisco', 
        mascot: 'Giants',
        primary: '253,90,30',
        secondary: '#27251F',
        abbrev: 'SF'
      },
      {
        id: 25,
        city: 'Seattle', 
        mascot: 'Mariners',
        primary: '12,44,86',
        secondary: '#005C5C',
        abbrev: 'SEA'
      }, 
      {
        id: 26,
        city: 'Tampa Bay', 
        mascot: 'Rays',
        primary: '9,44,92',
        secondary: '#8FBCE6',
        abbrev: 'TB'
      },
      {
        id: 27,
        city: 'Texas', 
        mascot: 'Rangers',
        primary: '0,50,120',
        secondary: '#C0111F',
        abbrev: 'TEX'
      }, 
      {
        id: 28,
        city: 'Toronto', 
        mascot: 'Blue Jays',
        primary: '19,74,142',
        secondary: '#E8291C',
        abbrev: 'TOR'
      }, 
      {
        id: 29,
        city: 'Washington', 
        mascot: 'Nationals',
        primary: '171,0,3',
        secondary: '#14225A',
        abbrev: 'WAS'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
