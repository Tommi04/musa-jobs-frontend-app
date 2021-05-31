<template>
    <div class="relative flex justify-center">
        <!-- niente action perchè non stiamo lavorando in backend, faremo una chiamata API -->
        <form class="relative w-full md:3/5 lg:w-1/2 h-full my-6">
            <mj-input
                class="mb-4"
                layout="dark"
                id="email"
                type="email"
                placeholder="Email"
                :has-error="$v.email.$error"
                v-model="email"
                @input="$v.email.$touch()">
                <p class="text-red-500" v-if="$v.email.$dirty && $v.email.$error">
                    Campo non valido
                </p>
            </mj-input>
            <mj-input
                class="mb-4"
                layout="dark"
                id="password"
                type="password"
                placeholder="password"
                :has-error="$v.password.$error"
                v-model="password"
                @input="$v.password.$touch()">
                <p class="text-red-500" v-if="$v.password.$dirty && $v.password.$error">
                    Campo non valido
                </p>
            </mj-input>
            <div>
                <div class="flex justify-center">
                    <!-- il tracking-wide è il letter-spacing -->
                    <button
                        type="submit"
                        class="px-10 lg:px-16 py-2 lg:py-3 rounded-full bg-mj-blue-1 text-white disabled:bg-opacity-50 font-bold text-lg uppercase tracking-widest shadow-md"
                        :class="[!$v.$invalid ? 'hover:bg-mj-green-1' : 'hover:none' ]"
                        @click.prevent="submitForm"
                        :disabled="$v.$invalid"
                        >
                        <!-- qua sopra gli dico, disabilita il campo se $invalid è true, quindi se c'è qualche campo invalido -->
                        <!-- posso toglierlo una volta che ho validato tutti i campi
                                @click.prevent="checkForm" -->
                        <!-- @click.prevent per non far funzionare il click -->
                        Invia
                    </button>
                </div>
                <!-- <div>
                    ci mostra se $invalid è true o false.
                    Possiamo usarlo per abilitare o disabilitare l'invio dal form
                    {{ $v.$invalid }}
                </div> -->
            </div>
        </form>
    </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
import MjInput from '@/components/MJInput'
// import axios from 'axios'
export default {
    name: 'UserLogin',
    data:function(){
        return{
            email: '',
            password: ''
        }
    },
    components:{
        MjInput
    },
    validations: {
        email: {
            required,
            email
        },
        password:{
            required
        }
    },
    methods:{
        submitForm(){
            const postBody = {
                email: this.email,
                password: this.password
            };
            //spostiamolo nello store
            /*
            axios
                .post('user-login', postBody)
                .then( res => {
                    // console.log(res.data.result)
                    this.$store.commit('login', res.data.result);
                    //sintassi per mandarmi su un'altra rotta
                    this.$router.push('/list')
                })
                .catch( err => {
                    console.log('error', err)
                });
                */
            // console.log(postBody);
            this.$store.dispatch('doLogin', postBody);
        },
    }
}
</script>

<style>

</style>