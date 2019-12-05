import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recaps from './views/Recaps.vue'
import MLBRecap from './components/MLBRecap.vue'
import MLBStandings from './components/MLBStandings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gamerecaps',
      name: 'recaps',
      component: Recaps
    },
    {
      path: '/baseballrecap',
      name: 'baseballrecap',
      component: MLBRecap
    },
    {
      path: '/baseballstandings',
      name: 'baseballstandings',
      component: MLBStandings
    }
  ]
})
