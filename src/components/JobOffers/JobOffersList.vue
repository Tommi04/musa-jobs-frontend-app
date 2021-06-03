<template>
    <div class="relative w-full flex flex-col items-center mb-3">
        <h1 class="relative text-center text-2xl xl:text-4xl text-white font-semibold uppercase">
            Lista annunci di lavoro
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
                        FILTRI
                    </div>
                </div>
                <div class="relative w-5/6 px-3">
                    <div class="relative w-full">
                        <template
                            v-if="jobOffers.lenght > 0">
                            <div class="relative flex justify-between">
                                <div>
                                    Annunci di lavoro: {{ jobOffers.length }}
                                </div>
                                <div>
                                    {{ CurrentPage }} / {{ MaxPages }}
                                </div>
                            </div>
                            <ul>
                                <li
                                    v-for="jobOffer of jobOffers"
                                    :key="jobOffer.id"
                                    class="mb-6">
                                    <div class="relative w-full">
                                        <div class="relative w-full text-white">
                                            <h3 class="font-semibold mb-1 text-2xl">
                                                {{ jobOffer.company.name }}
                                            </h3>
                                        </div>
                                        <div class="relative w-full text-white">
                                            <h4 class="font-normal mb-1 text-xl">
                                                {{ jobOffer.role }}
                                            </h4>
                                        </div>
                                        <div class="relative w-full text-white">
                                            <!-- direttiva html per dirgli che la descrizione del lavoro � un html -->
                                            <p v-html="jobOffer.description"> </p>
                                        </div>
                                    </div>
                                    <div class="relative flex flex-wrap -mx-3">
                                        <div
                                            v-for="jobOfferSkill of jobOffer.skills"
                                            :key="jobOfferSkill.id"
                                            class="col-auto p-3">
                                                <div class="relative w-full bg-mj-blue1-text-white p-2 hover:shadow-2xl cursor-pointer">
                                                    <div class="relative w-full-text-center">
                                                        <strong>{{jobofferSkell.label }}</strong>
                                                    </div>
                                                    <div class="relative flex flex-wrap justify-between">
                                                        <div class="relative col-auto text-center p-2 text-xs">
                                                            <strong>Min</strong>
                                                            <br>
                                                            {{ jobOfferSkillpivot.min_level }}
                                                        </div>
                                                    </div>
                                                    <div class="relative flex flex-wrap justify-between">
                                                        <div class="relative col-auto text-center p-2 text-xs">
                                                            <strong>Max</strong>
                                                            <br>
                                                            {{ jobOfferSkillpivot.max_level }}
                                                        </div>
                                                    </div>
                                                    <div class="relative flex flex-wrap justify-between">
                                                        <div class="relative col-auto text-center p-2 text-xs">
                                                            <strong>Exp</strong>
                                                            <br>
                                                            {{ jobOfferSkill.pivot.min_experience_years }}
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <template
                                v-if="canLoadMo > 1 && canLoadMore">
                                <div class="relative w-full flex justify-center">
                                    <button
                                        class="relative py-2 px-8 bg-transparent hover:bg-mj-blue-1 text-white border border-white hover:border-mj-blue-1 text-sm font-bold tracking-wider"
                                        @onClick="loadMore">
                                        Carica altri
                                    </button>
                                </div>
                            </template>
                        </template>
                        <template v-else>
                            <div>
                                Nessun annuncio per la tua ricerca
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'mj-job-offers-list',
    data: function(){
        return {
            filters: []
        };
    },
    computed: {
        user(){
            return this.$store.getters.user;
        },
        skills(){
            return this.$store.getters.skills;
        },
        jobOffers(){
            return this.$store.getters.jobOffers;
        },
        maxPages(){
            return this.$store.getters.jobOffersMaxPages;
        },
        currentPage(){
            return this.$store.getters.jobOffersCurrentPages;
        },
        canLoadMore(){
            return this.maxPages > 1 && this.currentPage < this.maxPages;
        }
    },

    methods: {
        searchJobOffers(){
            if(this.filters.length === 0){
                // const skills = this.skills.map( (item, index, items) )
                //rimappo le skills con la struttura dentro il .map
                const skills = this.skills.map( (skill => {
                    return {id: skill.id, min_lvl: 1, max_lvl: parseFloat(skill.pivot.level, 10), min_exp: 10 }
                }) )
                // console.log(skills);
                const skillsToSend = {};
                //sto dando a skillsToSend una proprietà skills che contiene le skills
                skillsToSend.skills = skills;
            }else{
                //altro
            }


            this.$store.dispatch( 'searchJobOffers', {skills: this.skillsToSend, page: this.currentPage} );
        },
        loadMore(){

        }
    },

    created(){
         if(this.$store.getters.skills === null){
            this.$store.dispatch('fetchUserSkills');
         }

        setTimeout(() => {
            this.searchJobOffers();
        }, 1500);
    }
}
</script>