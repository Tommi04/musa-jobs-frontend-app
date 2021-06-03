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