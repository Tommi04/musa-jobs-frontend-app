<template>
  <main id="home" class="relative w-full flex flex-col justify-center">
    <!-- la classe container in vue setta la larghezza quanto il breakpoint inferiore e non ha il padding ed è allineato a sinistra di base -->
    <!-- mx-auto centra in orizzontale -->
    <div class="container mx-auto mt-6 mb-12 lg:mb-24 px-4">
      <!-- flex-col sopra flex-col sotto per mandarli a capo -->
      <div class="relative flex flex-col w-full items-center"> <!-- con items-center il bordo si centra -->
        <h1 class="relative text-center text-3xl lg:text-5xl text-white uppercase font-bold border-b leading-light">
          Musa Job Opportunities
        </h1>
        <!-- font-light possiamo dargliela perche in app.scss abbiamo importato la font 300 -->
        <h2 class="relative text-center text-lg lg:text-2xl text-white font-light mt-3 leading-light">
          il punto di incontro tra chi cerca e offre lavoro
        </h2>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="relative flex flex-wrap">
        <div class="relative flex flex-col w-full lg:w-1/2 mx-auto items-center lg:flex-row lg:justify-between">
          <div class="relative flex text-center flex-col mb-5 lg:mb-0">
            <div>
              <!-- le icone vanno importate in main.js -->
              <font-awesome-icon 
                    :icon="['fas', 'briefcase']"
                    class="text-white text-6xl">
              </font-awesome-icon>
            </div>
            <div>
              <h3 class="text-white text-xl font-bold mb-4">
                sei un'azienda
              </h3>
            </div>
            <div>
              <router-link 
                to="/RegisterCompany"
                class="relative inline-block bg-transparent hover:bg-white text-white hover:text-mj-blue-1 px-12 py-2 border border-white rounded-full text-bold font-semibold">
                Registrati
              </router-link>
            </div>
          </div>
          <div class="relative w-full h-full hidden lg:flex justify-center">
            <div class="relative w-1 bg-white h-full"></div>
          </div>
          <div class="relative flex text-center flex-col">
            <div>
              <!-- le icone vanno importate in main.js -->
              <font-awesome-icon :icon="['far', 'user']"
                    class="text-white text-6xl">
              </font-awesome-icon>
            </div>
            <div>
              <h3 class="text-white text-xl font-bold mb-4">
                sei un candidato
              </h3>
            </div>
            <div>
              <router-link 
                to="/Register"
                class="relative inline-block bg-transparent hover:bg-white text-white hover:text-mj-blue-1 px-12 py-2 border border-white rounded-full text-bold font-semibold"
                >
                Registrati
              </router-link>
            </div>
          </div>
          <div class="relative hidden lg:block">
          </div>
        </div>
        <div class="relative flex w-full mt-6">
          <div class="relative flex w-full lg:w-1/2 mx-auto justify-center">
            <p class="text-mj-blue-1 text-base font-semibold">
              <sup>*</sup> Footer
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <title>Homepage</title> -->
    <!-- <img alt="Vue logo" src="../assets/images/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
    // HelloWorld
  // }
}
</script>

<style lang="scss" scoped> //scoped vale solo per questo componente
</style>