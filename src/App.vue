<template>
  <div id="app">
    <div id="wrapper">
      <mj-header></mj-header>
      <!-- messo come componente in components>MJHeader.vue -->
      <!-- <header class="flex justify-between px-4 py-2 lg:py-4"> <!- per attivare la flexbox dentro tailwind ->
        <div class="logo">
          <img src="@/assets/images/musa_logo_bianco_web.png" alt="">
        </div>
        <!- position:relative border-bottom color-border-bottom-white ->
        <div id="menu" class="hidden md:flex relative flex-grow justify-between h-full border-b border-white ml-64">
          <nav class="relative h-full flex items-end"> <!- classe per dare position:relative, alla fine align-items-en ->
              <router-link to="/">
                Home
                <div class="marker"></div>
                </router-link>  
              <a href="">
                Annunci
                <div class="marker"></div>
                </a>
              <a href="http=//musaformazione.it" target="_blank">
                Corsi
                <div class="marker"></div>
                </a>
          </nav>
          <div class="relative flex h-full items-end pb-3">
            <div class="relative mr-4">
              <router-link 
                to="/"
                class="bg-white rounded-full uppercase text-blue-600 py-2 px-10 text-base font-bold shadow hover:shadow-none">
                accedi
              </router-link>
            </div>
            <div id="#header-search" class="relative">
              <input 
                type="text" 
                class="bg-transparent rounded-md border-2 border-white text-white py-1 pl-4 pr-8 placeholder-white"
                placeholder="search"
                id="">
                <button class="absolute top-0 right-0 h-full w-8 bg-red-500 p-1 flex justify-center items-center">
                  <!- importando fontawesome con vuejs, le icone si usano così ->
                  <font-awesome-icon :icon="['fas', 'search']"
                      class="text-white text-xl"></font-awesome-icon>
                </button>
            </div>
          </div>
        </div>
        <!- <div>
          <nav>
            <ul>
              <router-link to="/">Home</router-link>
              <li>Annunci</li>
              <li>
                <a href="http=//musaformazione.it" target="_blank">Corsi</a>
              </li>
            </ul>
          </nav>
        </div> ->
      </header> -->

      <!-- una classe per il colore (border-red-300) ed una classe per i bordi (border) -->
      <!-- <div class="p-6 bg-white sm:bg-gray-100 lg:bg-black text-mj-green-1 border-red-300 border">test</div> -->
      
      <router-view/>
      
      <footer>
        <!-- Footer -->
      </footer>
    </div>
  </div>
</template>

<script>
import MjHeader from '@/components/MJHeader.vue';
export default {
  components:{
    MjHeader
  } ,
  computed:{
    user(){
      console.log(this.$store.getters.user);
      return this.$store.getters.user;
    }
  },
}
</script>

<style lang="scss">
//@import '@/assets/scsss/variables'; //ma andrebbe compilato. Ho creato il file vue.config.js invece.
                                      //stoppare e riavviare server

//primo modo, funziona perchè app è la base del progetto
// @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');

// body{
  // font-family: 'Raleway', sans-serif;
// }
//il secondo modo è includerlo in un scss, app.scss


#wrapper{
  position: relative;
  width: 100%;
  min-height: 100vh;/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,7db9e8+100 */
  background: rgb(26,104,179); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(26,104,179,1) 0%, rgba(123,202,85,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(26,104,179,1) 0%,rgba(123,202,85,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(26,104,179,1) 0%,rgba(123,202,85,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7bca55',GradientType=0 ); /* IE6-9 */
}


main{
  min-height: auto;
  @media(min-width: 1024px){
    min-height: calc(100vh - 100px);
  };
}

//è tutto in scss ma non ho bisogno di compilarlo, fa da solo
/* MESSO COME COMPONENT IN components > MJHeader
header{
  height: map-get($header-heights, 'sm');
  // i breakpoint sono modificabili in tailwind.config.js
  @media (min-width: 1024px){
    height: map-get($header-heights, 'lg');
  }

  .logo{
    position: relative;
    height: 100%;
    img {
      height: 100%;
      width: auto;
    }
  }

  #menu{
       nav{
            a{
              position: relative;
              font-weight: bold;
              text-transform: uppercase;
              @apply mr-12; //ci appiccichiamo la classe mr-12 margin right 12
              @apply text-lg;
              @apply pb-3;
      
              @media (min-width: 1024px){
                @apply mr-24;
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
}
*/

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
