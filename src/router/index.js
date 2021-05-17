import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      //mi torna il token, se il token esiste (sei loggato) vai su list, altrimenti vai prosegui
      if(store.getters.isAuth){
        next('/list');
      }else{
        next()
      }
    }
  },
  {
    path: '/registercompany',
    name: 'RegisterCompany',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterCompany.vue'),
    beforeEnter: (to, from, next) => {
      //mi torna il token, se il token esiste (sei loggato) vai su list, altrimenti vai prosegui
      if(store.getters.isAuth){
        next('/list');
      }else{
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      //mi torna il token, se il token esiste (sei loggato) vai su list, altrimenti vai prosegui
      if(store.getters.isAuth){
        next('/list');
      }else{
        next()
      }
    }
  },
  {
    path: '/inputs',
    name: 'Inputs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inputs.vue')
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
    //per proteggere la rotta usiamo beforeEnter che è un hoock
    //prende da dove veniamo, dove andiamo, cosa deve fare
    beforeEnter: (to, from, next) => {
      //mi torna il token, se il token esiste (sei loggato) prosegui sulla rotta, altrimenti vai a login
      if(store.getters.isAuth){
        next();
      }else{
        next('/login')
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
