// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Vuetify |+
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//Vuex
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
//Youtube
import VueYoutubeEmbed from 'vue-youtube-embed'
//Global panel
import panel from '@/components/Globals/panel'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYoutubeEmbed)

Vue.component('panel', panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
