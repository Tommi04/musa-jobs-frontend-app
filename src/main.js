import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'

import '@/assets/scss/tailwind.scss'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch, faBriefcase, faAngleLeft} from '@fortawesome/free-solid-svg-icons' //per importare soltanto il search
import {faUser} from '@fortawesome/free-regular-svg-icons' //per importare soltanto il search
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.use(Vuelidate); 

library. add(faSearch, faBriefcase, faUser, faAngleLeft); //per usare la lentina search
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
