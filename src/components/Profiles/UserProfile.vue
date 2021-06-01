<template>
    <div class="relative w-full flex flex-col items-center mb-3">
        <h1 class="relative text-center text-2xl xl:text-4xl text-white font-semibold uppercase">
            Profilo Candidato
        </h1>
        <div class="relative w-full flex justify-center">
            <font-awesome-icon
                :icon="['fas', 'angle-down']"
                class="text-white text-5xl"></font-awesome-icon>
        </div>
        <div class="relative w-full px-3 ">
            <!-- -mx-3 è un margine x negativo di 3 -->
            <div class="relative w-full flex -mx-3">
                <div class="relative w-1/6 border-r-2 border-white px-3">
                    <div class="relative w-full">
                        <div class="absolute top-0 right-0 z-10">
                            <label for="photo">
                                <input
                                    type="file"
                                    id="photo"
                                    class="hidden"
                                    ref="file"
                                    @change="onFileSelected"/>
                                <font-awesome-icon
                                    :icon="['fas', 'pencil-alt']"
                                    class="text-white text-2xl cursor-pointer hover:text-mj-blue-1"></font-awesome-icon>
                            </label>
                        </div>
                        <div class="relative w-full">
                            <img :src="userAvater" alt="user Avatar">
                            <div
                                v-if="photo"
                                class="absolute bottom-0 left-0 bg-mj-blue-1 h2"
                                :style="{width:progress + '%' }">
                            </div>
                        </div>
                        <div class="relative w-full" v-if="errors.lenght > 0">
                            <p
                                v-for="(error, index) of errors"
                                :key="index"
                                class="text-xs text-red-700">
                                {{error}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="relative w-5/6 px-3">
                    {{user}}
                </div>
            </div>


            <div class="relative w-full flex -mx-3">
                <div class="relative w-1/6 border-r-2 border-white px-3 pt-4">
                </div>
                <div class="relative w-5/6 px-3 pt-4">
                    <user-skills></user-skills>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ApiServices from '@services/api-services';
import UserSkills from '@/components/Profiles/User/UserSkills'
export default {
    name: 'mj-user-profile',
    components:{
        UserSkills
    },
    data: function() {
        return {
            photo: undefined,
            errors: [],
            progress: 0
        };
    },
    computed: {
        user(){
            return this.$store.getters.user;
        },
        userAvater() {
            // se c'è qualcosa in this.user.photo tornalo.url altrimenti l'immagine di default
            //con require() prende l'url corretto
            return this.user.photo ? this.user.photo.url : require("@/assets/images/img_prof.png");
        },
        skills() {
            return this.$store.getters.skills;
        }
    },
    methods: {
        // PRIMA POSSIBILITA'
        onFileSelected(event){
            // wrappa tutto in un array
            console.log(event.target.files[0]);
            this.photo = event.target.files[0];
            this.errors = [];

            // torno la promise in api-services classe ApiServices
            //   ApiServices
            // passiamo una funzione ad uploadUserPhoto
            //     .uploadUserPhoto(this.photo, event => {
            //          this.progress = Math.round((100 * event.loaded) / event.total);
            //      })
            //     .then((response) => {
            //         console.log(response);
            //         this.$store.dispatch('setUserAvatar', response.data.result.photo_url);
            //     }).catch((err) => {
            //         this.errors = err.response.data.errors.photo;
            //         console.log(err.response.data.errors);
            //     }).
            //     .finally( () => {
            //          this.progress = 0;
            //          this.photo = undefined;
            //     })


            // console.log('quando viene selezionato un file');


        }
       /*SECONDA POSSIBILITA'
       onFileSelected(){
        //    $('#photo'); //rappresentazione oggetto jquery del dom

            //accediamo alla versione virtualDOM di vue, la sua cache
            //mettiamo il ref nell'input
            console.log(this.$refs.file.files.item[0]);
       }
       */
    },
    created() {
        if( this.$store.getters.skills === null){
            this.$store.dispatch('fetchUserSkills');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>