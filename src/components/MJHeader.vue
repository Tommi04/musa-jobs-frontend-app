<template>
    <div>
        <!-- preso da app.vue -->
      <header class="flex justify-between px-4 py-2 lg:py-4 flex-wrap"> <!-- per attivare la flexbox dentro tailwind. Con flex-wrap possiamo dimensionare i nostri componenti -->
        <div class="flex items-center lg:hidden w-1/3" order-1> <!-- w-1/3 è per il flex wrap -->
            <router-link to="/" class="relative h-8 w-8 p-1 flex items-center justify-center">
                  <font-awesome-icon :icon="['fas', 'search']"
                        class="text-white text-xl">
                  </font-awesome-icon>
            </router-link>
        </div>
        <div class="logo flex w-1/3 lg:w-auto order-2 lg:order-1">
          <img src="@/assets/images/musa_logo_bianco_web.png" alt="">
        </div>
        <!-- position:relative border-bottom color-border-bottom-white -->
        <div id="menu" 
             class="relative flex w-auto flex-grow-0 lg:flex-grow justify-between h-full border-b border-white mx-auto lg:ml-24 xl:ml-64 mt-6 lg:mt-0 order-4 lg:order-2">
          <nav class="relative h-full flex items-end"> <!-- classe per dare position:relative, alla fine align-items-en  -->
              <router-link to="/">
                Home
                <div class="marker"></div>
                </router-link>  
              <router-link to="/list">
                Annunci
                <div class="marker"></div>
              </router-link>
              <router-link to="/profile">
                Profilo
                <div class="marker"></div>
              </router-link>
              <a href="http=//musaformazione.it" target="_blank">
                Corsi
                <div class="marker"></div>
              </a>
          </nav>
          <div class="relative hidden lg:flex h-full items-end pb-3">
            <div class="relative mr-4">
              <div class="relative hidden lg:flex w-1/3 order-3 justify-end items-center">
                <router-link 
                  v-if="!isAuth"
                  to="/login"
                  class="relative inline-block bg-white rounded-full uppercase text-blue-600 py-1 px-5 lg:px-10 text-sm lg:text-base font-bold shadow hover:shadow-none">
                  {{ headerButtonLabel }}
                </router-link>

                <button
                  v-if="isAuth"
                  @click="onLogout"
                  class="relative inline-block bg-white rounded-full uppercase text-blue-600 py-1 px-5 lg:px-10 text-sm lg:text-base font-bold shadow hover:shadow-none">
                  {{ headerButtonLabel }}  
                </button>
              </div>

                <!-- <nomeDaUsare>{{headerButtonLabel}}</nomeDaUsare> -->
                <!-- alternativa -->
                <!-- <nomeDaUsare :label="headerButtonLabel">{{headerButtonLabel}}</nomeDaUsare> -->
                <!-- MESSO NEL COMPONENTE components > MJHeaderButton.vue -->
              <!-- <router-link 
                to="/"
                class="bg-white rounded-full uppercase text-blue-600 py-2 px-10 text-base font-bold shadow hover:shadow-none">
                accedi
              </router-link> -->
            </div>
            <div id="#header-search" class="relative">
              <input 
                type="text" 
                class="bg-transparent rounded-md border-2 border-white text-white py-1 pl-4 pr-8 placeholder-white"
                placeholder="search"
                id="">
                <button class="absolute top-0 right-0 h-full w-8 bg-red-500 p-1 flex justify-center items-center">
                  <!-- importando fontawesome con vuejs, le icone si usano così -->
                  <font-awesome-icon :icon="['fas', 'search']"
                      class="text-white text-xl">
                  </font-awesome-icon>
                </button>
            </div>
          </div>
        </div>
        <!-- <div>
          <nav>
            <ul>
              <router-link to="/">Home</router-link>
              <li>Annunci</li>
              <li>
                <a href="http=//musaformazione.it" target="_blank">Corsi</a>
              </li>
            </ul>
          </nav>
        </div> -->
        <div class="relative flex lg:hidden w-1/3 order-3 justify-end items-center">
          <router-link 
            v-if="!isAuth"
            to="/login"
            class="relative inline-block bg-white rounded-full uppercase text-blue-600 py-1 px-5 lg:px-10 text-sm lg:text-base font-bold shadow hover:shadow-none">
            {{ headerButtonLabel }}
          </router-link>

          <button
            v-else
            @click="onLogout"
            class="relative inline-block bg-white rounded-full uppercase text-blue-600 py-1 px-5 lg:px-10 text-sm lg:text-base font-bold shadow hover:shadow-none">
            {{ headerButtonLabel }}  
          </button>
        </div>
      </header>
    </div>
</template>

<script>
//il button è linkato a /login
// import MjHeaderButton from '@/components/MJHeaderButton.vue'
export default {
    name: 'mj-header',
    props:{
        label: String
    },
    // components:{
        // senza il momedausare si chaima come il componente
        // 'nomeDaUsare': MjHeaderButton
    // },
    /* SE è LOGGATO LO RECUPERIAMO DAL localStorage
    data: function(){
        return{
            isLoggedIn: false
        }
    },
    */
    computed:{
        //invece che in data ho messo il recupero se è loggato o no qua
        isAuth: function(){
          //richiamo isAuth nello store di auth.js per sapere se sono autenticato o meno
          console.log(this.$store.getters.isAuth);
          return this.$store.getters.isAuth;
        },
        headerButtonLabel: function(){
            //cambio perchè ho preso la proprità isAuth dallo store
            return this.isAuth ? 'Logout': 'Accedi';
            // return this.isLoggedIn ? 'Logout': 'Accedi';
        },
    },
    methods: {
      onLogout(){
        // console.log('sono qua');
        this.$store.dispatch('doLogout');
      }
    }
}
</script>

<style lang="scss" scoped>
header{
  height: map-get($header-heights, 'sm');
  // i breakpoint sono modificabili in tailwind.config.js
  @media (min-width: 1024px){
    height: map-get($header-heights, 'lg');
  }

  .logo{
    position: relative;
    height: auto;
    @media (min-width: 1024px){
          height: 100%;
          width: auto;
    }

    img {
      height: 100%;
      width: auto;
      @media (min-width: 1024px){
          height: 100%;
          width: auto;
      }
    }
  }

  #menu{
       nav{
            a{
              position: relative;
              font-weight: bold;
              text-transform: uppercase;
              @apply mr-10; //ci appiccichiamo la classe mr-12 margin right 12
              @apply text-lg;
              @apply pb-3;
      
              @media (min-width: 1024px){
                @apply mr-12;
              }
      
              @media (min-width: 1280px){
                @apply mr-16;
              }
      
              .marker{
                display: none;
                position: absolute;
                width: 100%;
                height: 4px;
                left: 0;
                background-color: map-get($colors, 'green-1');
                bottom: 0;
              }
        
              &:hover,
              &.router-link-exact-active{
                .marker{
                  display: block;
                }
              }
      
              &:last-child{
                @apply mr-0;
              }
            }
       }
  }

  #header-search{
      input{
          max-width: 200px;
      }
  }
}
</style>