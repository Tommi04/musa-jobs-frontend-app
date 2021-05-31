import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Vuelidate from 'vuelidate'

import '@/assets/scss/tailwind.scss'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch, faBriefcase, faAngleLeft, faAngleDown, faPencilAlt} from '@fortawesome/free-solid-svg-icons' //per importare soltanto il search
import {faUser} from '@fortawesome/free-regular-svg-icons' //per importare soltanto il search
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

//definiamo variabili globali axios
axios.defaults.baseURL = "http://localhost:8000/api/"  
// axios.defaults.baseURL = "https://reqres.in/api/"
//così in list.vue possiamo mettere solo la parte finale
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['CampoCustom'] = '12345678901234567890';

//request. La request va ritornata altrimenti la response va in errore
axios.interceptors.request.use(config => {
  console.log('req', config);
  // if (true === true){
    axios.defaults.headers.common['CampoCustomHeader'] = 'asdkfqiuefnnnvo';

    const storeToken = store.getters.token;

    if(storeToken){
      config.headers.Authorization = `Bearer ${storeToken}`;
      // config.headers.Authorization = 'Bearer ' + ${storeToken};
    }
  // }
  return config;
});
//response. Va ritornata altrimenti va in errore
axios.interceptors.response.use(config => {
  console.log('res', config);
  return config;
});

Vue.use(Vuelidate); 

library. add(faSearch, faBriefcase, faUser, faAngleLeft, faAngleDown, faPencilAlt); //per usare la lentina search
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
