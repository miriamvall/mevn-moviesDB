import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateMovie from "../components/CreateMovie"
import EditMovie from "../components/EditMovie"
import ListMovies from "../components/ListMovies"
import MovieDetails from "../components/MovieDetails"
import HomePage from "../components/HomePage"

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'create',
    component: CreateMovie
  },
  {
    path: '/view',
    name: 'view',
    component: ListMovies
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditMovie
  },
  {
    path: '/details/:id',
    name: 'details',
    component: MovieDetails
  },
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
