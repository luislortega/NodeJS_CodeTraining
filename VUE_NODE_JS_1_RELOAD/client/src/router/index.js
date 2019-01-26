import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
import songs from '@/components/songs'
import createSong from '@/components/createSong'
import viewSong from '@/components/ViewSong/viewSong'
import editSong from '@/components/editSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/songs',
      name: 'songs',
      component: songs
    },
    {
      path: '/songs/create',
      name: 'create-song',
      component: createSong
    },
    {
      path: '/songs/:songID',
      name: 'song',
      component: viewSong
    },
    {
      path: '/song/edit/:songID',
      name: 'edit-song',
      component: editSong
    }
  ]
})
