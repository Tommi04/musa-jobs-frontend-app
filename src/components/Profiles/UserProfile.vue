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
                <mj-user-avatar></mj-user-avatar>
                <div class="relative w-5/6 px-3">
                    DX
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ApiServices from '@services/api-services';
export default {
    name: 'mj-user-profile',
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
    }
}
</script>

<style lang="scss" scoped>

</style>