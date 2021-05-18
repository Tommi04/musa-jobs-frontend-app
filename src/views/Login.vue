<template>
    <main id="login">
        <div class="relative container mx-auto mt-10 lg:mt-10 px-4">
            <div class="relative flex w-full">
                <div class="relative w-1/6 flex justify-center">
                    <router-link to="/" class="relative h-8 w-8 p-1 flex justify-center">
                        <font-awesome-icon
                            :icon="['fas', 'angle-left']"
                            class="text-white text-5xl"></font-awesome-icon>
                    </router-link>
                </div>
                <div class="relative w-4/6">
                    <div class="relative w-full flex flex-col bg-white p-6 rounded-md bg-opacity-25">
                        <div class="relative w-full">
                            <div class="relative flex justify-center">
                                <img src="@/assets/images/musa_logo_bianco_web.png" alt="Musa formazione" class="w-2/3 md:w-1/3 lg:w-1/5">
                            </div>
                            <div class="relative flex justify-center my-4">
                                <router-link 
                                    to="/login"
                                    class="route-class">
                                    Utente
                                </router-link>
                                <router-link 
                                    to="/login/company"
                                    class="route-class">
                                    Azienda
                                </router-link>
                            </div>
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style lang="scss" scoped>
    // alla rotta attuale vuejs applica questa classe
    .route-class{
        @apply relative; 
        @apply py-2;
        @apply px-6;
        @apply bg-mj-blue-1;
        @apply text-white;
    }
    .router-link-exact-active {
        @apply bg-white;
        @apply text-mj-blue-1;
    }
</style>