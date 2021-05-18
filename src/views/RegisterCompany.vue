<template>
    <main id="register-company" class="relative w-full">
        <div class="relative container mx-auto mt-10 lg:mt-10 px-4">
            <div class="relative flex w-full">
                <div class="relative w-1/6 flex justify-center">
                    <router-link to="/" class="relative h-8 w-8 p-1 flex justify-center">
                      <!-- importando fontawesome con vuejs, le icone si usano così -->
                      <font-awesome-icon :icon="['fas', 'angle-left']"
                          class="text-white text-5xl">
                      </font-awesome-icon>
                    </router-link>
                </div>
                <div class="relative w-4/6">
                    <div class="relative w-full flex flex-col bg-white p-6 rounded-md bg-opacity-25">
                        <div class="relative w-full">
                            <div class="relative flex justify-center">
                                <img src="@/assets/images/musa_logo_bianco_web.png" alt="Musa formazione" class="w-2/3 md:w-1/3 lg:w-1/5">
                            </div>
                                <!-- {{ userData }} -->

                            <!-- Object.keys() restituisce un array delle chiavi dell'oggetto -->
                            <div
                                v-if="Object.keys(registrationErrors).length"
                                class="relative p-4 bg-red-400 border-red-600 border">
                                <button
                                    class="absolute top-0 right-0"
                                    @click="dismissAlert()">
                                    X
                                </button>
                                <ul>
                                    <li v-for="(error, key, index) of registrationErrors" :key="key">
                                        {{ index }} - {{key}} - {{error}}
                                        <div>
                                            <strong>{{key}}</strong>
                                            <p v-for="(errorMsg, index) of error" :key="index">{{errorMsg}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="relative flex w-full justify-center">
                                <!-- niente action perchè non stiamo lavorando in backend, faremo una chiamata API -->
                                <form class="relative w-full md:3/5 lg:w-1/2 h-full my-6">
                                    <mj-input
                                        class="mb-4"
                                        layout="dark"
                                        id="company-name"
                                        type="text"
                                        placeholder="Ragione Sociale"
                                        :has-error="$v.userData.companyName.$error"
                                        v-model="userData.companyName"
                                        @blur="$v.userData.companyName.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.companyName.$dirty && $v.userData.companyName.$error">
                                            {{ $v.userData.companyName.$error }}
                                            Campo non valido
                                        </p>
                                    </mj-input>

                                    <mj-select
                                        class="mb-4"
                                        layout="dark"
                                        id="company-category"
                                        empty-option-label="Seleziona una categoria"
                                        :options="categories"
                                        :has-error="$v.userData.category.$error"
                                        v-model="userData.category"
                                        @blur="$v.userData.category.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.category.$dirty && $v.userData.category.$error">
                                            Campo non valido
                                        </p>
                                    </mj-select>

                                    <mj-input
                                        class="mb-4"
                                        layout="dark"
                                        id="company-name"
                                        type="text"
                                        placeholder="Nome referente"
                                        :has-error="$v.userData.firstName.$error"
                                        v-model="userData.firstName"
                                        @blur="$v.userData.firstName.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.firstName.$dirty && $v.userData.firstName.$error">
                                            Campo non valido
                                        </p>
                                    </mj-input>
                                    <mj-input
                                        class="mb-4"
                                        layout="dark"
                                        id="last-name"
                                        type="text"
                                        placeholder="Cognome referente"
                                        :has-error="$v.userData.lastName.$error"
                                        v-model="userData.lastName"
                                        @blur="$v.userData.lastName.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.lastName.$dirty && $v.userData.lastName.$error">
                                            Campo non valido
                                        </p>
                                    </mj-input>
                                    <mj-input
                                        class="mb-4"
                                        layout="dark"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        :has-error="$v.userData.email.$error"
                                        v-model="userData.email"
                                        @blur="$v.userData.email.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.email.$dirty && $v.userData.email.$error">
                                            Campo non valido
                                        </p>
                                    </mj-input>
                                    <mj-input
                                        class="mb-4"
                                        layout="dark"
                                        id="password"
                                        type="password"
                                        placeholder="password"
                                        :has-error="$v.userData.password.$error"
                                        v-model="userData.password"
                                        @blur="$v.userData.password.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.password.$dirty && $v.userData.password.$error">
                                            Campo non valido, la password deve essere lunga almeno {{ $v.userData.password.$minLen }}
                                        </p>
                                    </mj-input>
                                    <mj-input
                                        class="mb-4"
                                        layout="dark"
                                        id="passwordConfirm"
                                        type="passwordConfirm"
                                        placeholder="Conferma password "
                                        :has-error="$v.userData.passwordConfirm.$error"
                                        v-model="userData.passwordConfirm"
                                        @blur="$v.userData.passwordConfirm.$touch()">
                                        <p class="text-red-500" v-if="$v.userData.passwordConfirm.$dirty && $v.userData.passwordConfirm.$error">
                                            Le password devono essre uguali
                                        </p>
                                    </mj-input>
                                    <div class="mb-6">
                                        <label class="w-full block text-gray-500 font-bold">
                                            <input class="mr-2 leading-tight" type="checkbox" required v-model="userData.privacy">
                                            <span
                                                class="text-sm"
                                                :class="[$v.userData.privacy.$invalid ? 'text-red-500' : 'text-mj-blue-1']">
                                                <!-- :class="{'text-red-500': $v.userData.privacy.$invalid, 'text-mj-blue-1':!$v.userData.privacy.$invalid}"> -->
                                                <!-- se privacy invalid fai :class -->
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <div class="flex justify-center">
                                            <!-- il tracking-wide è il letter-spacing -->
                                            <button
                                                type="submit"
                                                class="px-10 lg:px-16 py-2 lg:py-3 rounded-full bg-mj-blue-1 text-white disabled:bg-opacity-50 font-bold text-lg uppercase tracking-widest shadow-md"
                                                :class="[!$v.$invalid ? 'hover:bg-mj-green-1' : 'hover:none' ]"
                                                @click.prevent="submitForm"
                                                :disabled="$v.$invalid">
                                                Invia
                                            </button>
                                        </div>
                                    </div>

                                    <!--
                                    <div class="mb-4">
                                        <input
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none"
                                                id="company-name"
                                                type="text"
                                                placeholder="Ragione Sociale"
                                                required
                                                v-model="userData.companyName"
                                                lazy>
                                                <-- lazy è un modificatore pigro, il v-model si attiva solo quando c'è
                                                un evento esterno che modifica lo stato di quel componente, premo invio ad esempio --
                                                {{ firstName.toUpperCase() }}
                                    </div>
                                    <div class="mb-4">
                                        <input
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none"
                                                id="first-name"
                                                type="text"
                                                placeholder="Nome referente"
                                                required
                                                v-model="userData.firstName"
                                                lazy>
                                                <-- lazy è un modificatore pigro, il v-model si attiva solo quando c'è
                                                un evento esterno che modifica lo stato di quel componente, premo invio ad esempio --
                                                {{ firstName.toUpperCase() }}
                                    </div>
                                    <div class="mb-4">
                                        <input
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none"
                                                id="last-name"
                                                type="text"
                                                placeholder="Cognome referente"
                                                required
                                                v-model="userData.lastName">
                                    </div>
                                    <div class="mb-4">
                                        <input
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none"
                                                id="email"
                                                type="email"
                                                placeholder="Email referente"
                                                required
                                                v-model="userData.email">
                                    </div>
                                    <div class="mb-4">
                                        <input
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none"
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                required
                                                v-model="userData.password">
                                    </div>
                                    <div class="mb-4">
                                        <input
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none"
                                                id="confirmation-password"
                                                type="password"
                                                placeholder="Conferma Password"
                                                required
                                                v-model="userData.passwordConfirm">
                                    </div>
                                    <div class="mb-6">
                                        <label class="w-full block text-gray-500 font-bold">
                                            <input class="mr-2 leading-tight" type="checkbox" required v-model="userData.privacy">
                                            <span class="text-sm text-mj-blue-1">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <div class="flex justify-center">
                                            <-- il tracking-wide è il letter-spacing --
                                            <button
                                                type="submit"
                                                class="px-10 lg:px-16 py-2 lg:py-3 rounded-full bg-mj-blue-1 text-white font-bold text-lg uppercase tracking-widest shadow-md"
                                                @click.prevent="checkForm">
                                                <-- @click.prevent per non far funzionare il click --
                                                Invia
                                            </button>
                                        </div>
                                    </div>
                                    -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative w-1/6">
                    input
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import {required, email, minLength, sameAs, integer, minValue} from 'vuelidate/lib/validators'
import MjInput from '@/components/MJInput'
import MjSelect from '@/components/MJSelect'
export default {
    name: 'RegisterCompany',
    components:{
        'mj-input': MjInput,
        'mj-select': MjSelect
        // oppure
        // MjInput
    },
    data: function(){
        return {
            userData:{
                companyName: '',
                category: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
                privacy: false,
            },
            categories: [],
        }
    },
    // i validations sono validazioni sulle proprietà. Vanno importate in cima allo script
    validations:{
        userData:{
            companyName:{
                required
            },

            category:{ //come nell'endpoint di registrazione
                required,
                integer,
                minVal: minValue(1)
            },

            firstName:{
                required
            },
            lastName:{
                required
            },
            email:{
                required,
                email
            },
            password:{
                required,
                minLen: minLength(8)
            },
            passwordConfirm:{
                required,
                // così si usa il sameAs
                sameAs: sameAs('password')
            },
            privacy:{
                // required,
                // gli stiamo dicendo di essere uguale al valore che ci ritorna la funzione, true
                // questo è uno strano metodo di validazione delle checkbox ma è così
                sameAs: sameAs(()=>{
                    return true;
                })
            }
        }
    },
    methods:{
        // guarda vuelidator magari
        submitForm: function(){
            // return true

            //da fare l'endpoint in laravel. dispatch prende dalle actions in auth.js
            // const asyncReg = this.$store.dispatch('registerCompany', this.userData); // torna una promise
            // asyncReg
                // .then()


            //controlla form
            //torna true o false
            //se true manda la chiamata API
            //se false traccia gli errori e presentali nel form
        },
        fetchCategories(){
            axios
                //endpoint in laravel
                .get( 'company-categories')
                .then(res => {
                    console.log(res);

                        // qua verrà valorizzato l'array qualora la risposta dovesse essere positiva
                    // if(res.status === 200){
                    //     this.categories = res.data.result.categories;
                    // }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        dismissAlert(){
            this.$store.dispatch('resetErrors');
        }

    },
    created(){
        console.log('sono in created');
        //da creare l'endpoint in laravel
        // this.fetchCategories();
        //chiamata API per recuperare le categorie e poi lo metto dentro this.categories
        this.categories = [{id: 1, label: "categoria 1"}];
    },
    destroyed(){
        //cos� se usciamo e rientriamo svuotiamo gli errori
        this.$store.dispatch('resetErrors');
    },
    computed:{
        registrationErrors(){
            return this.$store.getters.errors;
        }
    }
}
</script>

<style>

</style>