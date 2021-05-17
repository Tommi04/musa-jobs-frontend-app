<template>
    <main id="register" class="relative w-full">
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
                            <div class="relative flex w-full justify-center">
                                <!-- niente action perchè non stiamo lavorando in backend, faremo una chiamata API -->
                                <form class="relative w-full md:3/5 lg:w-1/2 h-full my-6">
                                <mj-input   
                                    class="mb-4"
                                    layout="dark"
                                    id="first-name"
                                    type="text"
                                    placeholder="Nome"
                                    :has-error="$v.userData.firstName.$error"
                                    v-model="userData.firstName"
                                    @input="$v.userData.firstName.$touch()">
                                    <p class="text-red-500" v-if="$v.userData.firstName.$dirty && $v.userData.firstName.$error">
                                        Campo non valido
                                    </p>
                                </mj-input>
                                <mj-input   
                                    class="mb-4"
                                    layout="dark"
                                    id="last-name"
                                    type="text"
                                    placeholder="Cognome"
                                    :has-error="$v.userData.lastName.$error"
                                    v-model="userData.lastName"
                                    @input="$v.userData.lastName.$touch()">
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
                                    @input="$v.userData.email.$touch()">
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
                                    @input="$v.userData.password.$touch()">
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
                                    @input="$v.userData.passwordConfirm.$touch()">
                                    <p class="text-red-500" v-if="$v.userData.passwordConfirm.$dirty && $v.userData.passwordConfirm.$error">
                                        Le password devono essre uguali
                                    </p>
                                </mj-input>
                                <!-- questi sopra sono fatti meglio perchè componentizzati da MJInput
                                    <div class="mb-4">
                                        <input 
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white leading-tight focus:outline-none" 
                                                :class="{'bg-red-500 border-red-600': $v.userData.firstName.$error, ' bg-mj-blue-1': !$v.userData.firstName.$error }"
                                                id="first-name" 
                                                type="text" 
                                                placeholder="Nome"
                                                required
                                                v-model="userData.firstName"
                                                @input="$v.userData.firstName.$touch()"
                                                lazy>
                                                <p class="text-red-500" v-if="$v.userData.firstName.$dirty && $v.userData.firstName.$error">Campo non valido</p>
                                                <-- @input o v.on:input è per validare il campo, se fosse stata una select non sarebbe 
                                                     stato @input ma @change che è l'evento di change sulla select
                                                <-- se va in errore lo sappiamo da $v.userData.firstName.$error e possiamo testarlo come if
                                                     Al posta di $error abbiamo anche $invalid, quest'ultimo scatta sempre appena scriviamo,
                                                     $error scatta invece quando va in errore, quando c'è invio o un evento
                                                <-- lazy è un modificatore pigro, il v-model si attiva solo quando c'è 
                                                un evento esterno che modifica lo stato di quel componente, premo invio ad esempio
                                                <-- {{ userData.firstName.toUpperCase() }}
                                    </div>
                                    <div class="mb-4">
                                        <input 
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none" 
                                                id="last-name" 
                                                type="text" 
                                                placeholder="Cognome"
                                                required
                                                v-model="userData.lastName"
                                                @input="$v.userData.firstName.$touch()">
                                                <p v-if="$v.userData.lastName.$dirty && $v.userData.lastName.$error">Campo non valido</p>
                                    </div>
                                    <div class="mb-4">
                                        <input 
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none" 
                                                id="email" 
                                                type="email" 
                                                placeholder="Email"
                                                required
                                                v-model="userData.email"
                                                @input="$v.userData.firstName.$touch()">
                                                <p v-if="$v.userData.lastName.$error">Campo non valido</p>
                                    </div>
                                    <div class="mb-4">
                                        <input 
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none" 
                                                id="password" 
                                                type="password" 
                                                placeholder="Password"
                                                required
                                                v-model="userData.password"
                                                @input="$v.userData.password.$touch()">
                                                <p v-if="$v.userData.password.$error">
                                                    Campo non valido, la password deve essere lunga almeno {{ $v.userData.password.$minLen }}
                                                </p>
                                    </div>
                                    <div class="mb-4">
                                        <input 
                                                class="appearance-none borer rounded w-full py-2 px-3 text-white bg-mj-blue-1 leading-tight focus:outline-none" 
                                                id="confirmation-password" 
                                                type="password" 
                                                placeholder="Conferma Password"
                                                required
                                                v-model="userData.passwordConfirm"
                                                @input="$v.userData.passwordConfirm.$touch()">
                                                <p v-if="$v.userData.passwordConfirm.$error">
                                                    Campo non valido
                                                </p>
                                    </div>
                                    -->
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
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
import MjInput from '@/components/MJInput'
// le graffe vanno tolte, perchè questo export è standart, di default
export default {
    name: 'Register',
    components:{
        'mj-input': MjInput
        // oppure 
        // MjInput
    },
    data: function(){
        return {
            userData:{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: '',
                privacy: false,
            }
        }
    },
    // i validations sono validazioni sulle proprietà. Vanno importate in cima allo script
    validations:{
        userData:{
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
        checkForm: function(){
            return true
            //controlla form
            //torna true o false
            //se true manda la chiamata API 
            //se false traccia gli errori e presentali nel form
        },
        submitForm: function(){
            this.$store.dispatch('registerUser', this.userData);
        }
    }
}
</script>

<style>

</style>