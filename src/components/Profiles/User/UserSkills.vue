<template>
   <div class="relative w-full pt-10">
      <div class="absolute top-0 right-0 cursor-pointer z-10">
         <font-awesome-icon
            :icon="iconClass"
            class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
            @click="switchState"
            ></font-awesome-icon>
      </div>
      <article
         v-for="skill of skills"
         :key="skill.id"
         class="relative flex mb-4">
         <div class="relative flex-grow">
            <div class="relative h-8 bg-mj-green-1 skill-bar flex items-end justify-end"
                  :style="{width: (skills.pivot.level * 20) + '%'}">
               <span class="text-mj-blue-1 font-semibold px-2 leading-none pb-1">
                  {{skill.pivot.level}}
               </span>
            </div>
            <div class="relative w-full">
               <strong class="text-white">
                  {{skill.label}}
               </strong>
            </div>
         </div>
         <div class="relative" v-if="isEditing">
            <div class="relative flex">
               <div class="relative w-auto px-2" v-if="!isAdding">
                  <font-awesome-icon
                     :icon="['fas', 'angle-up']"
                     class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                     @click="lvlUp(skill)"
                     ></font-awesome-icon>
                  <font-awesome-icon
                     :icon="['fas', 'angle-down']"
                     class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                     @click="lvlDown(skill)"
                     ></font-awesome-icon>
                  <font-awesome-icon
                     :icon="['fas', 'times']"
                     class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                     @click="removeSkill(skill)"
                     ></font-awesome-icon>
               </div>
            </div>
         </div>
      </article>
      <div class="relative w-full" v-if="isEditing">
         <div class="relative" v-if="!isAdding">
            <div class="relative flex">
               <font-awesome-icon
                  :icon="['fas', 'plus']"
                  class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                  @click="toggleAdd"
                  ></font-awesome-icon>
            </div>
         </div>

         <div class="relative w-full flex" v-else>
            <div class="relative flex-grow" v-if="selectedSkill === null">
               <mj-input
                  layout="dark"
                  v-model="filter">
                  <div class="absolute top-100 w-full left-0" v-if="filter !== '' && filter.lenght >= 3">
                     <ul class="bg-mj-blue-1 text-white py-4">
                        <!-- PER NON METTERE DUE DIRETTIVE NELLO STESSO ELEMENTO (v-for E v-if) USIAMO UN ALTRO TAG, IL <template> -->
                        <template v-if="fileteredSkills.lenght > 0">
                           <li
                              class="bg-white hover:bg-mj-green-1 text-mj-blue-1 hover:text-white cursor-pointer py-2 px-4"
                              v-for="fSkill of filteredSkills"
                              :key="fSkill.id"
                              @click="selectSkill(fSkill)">
                              {{fSkill.label}}
                           </li>
                        </template>
                        <template v-else>
                           <li>
                              Non ci sono skills che rispecchiano la tua chiave di ricerca
                           </li>
                        </template>
                     </ul>
                  </div>
               </mj-input>
            </div>
            <div class="relative w-full flex" v-if="selectedSkill">
               <div class="relative flex-grow">
                  <div class="relative h-8 bg-mj-green-1 skill-bar flex items-end justify-end"
                        :style="{width: (selectedSkillLevel * 20) + '%'}">
                     <span class="text-mj-blue-1 font-semibold px-2 leading-none pb-1">
                        {{selectedSkillLevel}}
                     </span>
                  </div>
                  <div class="relative w-full">
                     <strong class="text-white">
                        {{selectedSkill.label}}
                     </strong>
                  </div>
               </div>
               <div class="relative">
                  <div class="relative flex">
                     <div class="relative w-auto px-2" v-if="!isAdding">
                        <font-awesome-icon
                           :icon="['fas', 'angle-up']"
                           class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                           @click="skillUp(skill)"
                           ></font-awesome-icon>
                        <font-awesome-icon
                           :icon="['fas', 'angle-down']"
                           class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                           @click="skillDown(skill)"
                           ></font-awesome-icon>
                        <font-awesome-icon
                           :icon="['fas', 'thumbs-up']"
                           class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                           @click="confirmSkill(skill)"
                           ></font-awesome-icon>
                        <font-awesome-icon
                           :icon="['fas', 'times']"
                           class="text-white text-3xl cursor-pointer hover:text-mj-blue-1"
                           @click="cancelAdd(skill)"
                           ></font-awesome-icon>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import ApiServices from '@/services/api-services';
   import MjInput from '@/components/MJInput';
   export default {
      name: 'user-skills',
      components: {
         MjInput
      },
      data: function(){
         return {
            isEditing: false,
            isSending: false,
            isAdding: false,
            filter: '',
            selectedSkill: null,
            selectedSkillLevel: 1
         };
      },
      computed: {
         skills(){
            return this.$store.getters.skills;
         },
         allSkills(){
            return this.$store.getters.allSkills;
         },
         iconClass(){
            return this.isEditing ? "['fas', 'times']" : "['fas', 'pencil-alt']";
         },
         filteredSkills(){
            return this.allSkills.filter(item => {
               const filterOk = item.label.toLowerCase().includes( this.filter.toLowerCase );
               const hasSkill = this.skills.findIndex(skill =>{
                  // SE TROVA L'INDICE LO TORNERA', ALTRIMENTI TORNERA' -1
                  return item.id === skill.id;
               })

               // RITORNA LA SKILL SE L'HA TROVATA E SE NON L'HA TROVATA IN QUELLE GIA' PRESENTI
               return filterOk && hasSkill === -1;
            })
         }
      },
      methods: {
         switchState(){
            this.isEditing = !this.isEditing;
         },
         lvlUp(skill){
            const newSkillValue = parseFloat(skill.pivot.level, 10) + .5 ;
            if( !this.isSending && newSkillValue >= 1 && newSkillValue <= 5){
               this.isSending = true;

               ApiServices
                  .manageSkill( {skill_id: skill.id, lvl: newSkillValue, exp_years: 10} )
                  .then(res => {
                     this.$store.dispatch('refreshUserSkills', res.data.result.user_skills);
                  })
                  .catch( err=> {
                     console.log(err);
                  })
                  .finally( () => {
                     this.isSending = false;
                  });
            }
         },
         lvlDown(skill){
            const newSkillValue = parseFloat(skill.pivot.level, 10) - .5 ;
            if( !this.isSending && newSkillValue >= 1 && newSkillValue <= 5){
               this.isSending = true;

               ApiServices
                  .manageSkill( {skill_id: skill.id, lvl: newSkillValue, exp_years: 10} )
                  .then(res => {
                     this.$store.dispatch('refreshUserSkills', res.data.result.user_skills);
                  })
                  .catch( err=> {
                     console.log(err);
                  })
                  .finally( () => {
                     this.isSending = false;
                  });
            }
         },
         removeSkill(skill){
            if(!this.isSending){
               this.isSending = true;

               ApiServices
                  .removeSkill(skill.id)
                  .then( res => {
                     this.$store.dispatch('refreshUserSkills', res.data.result.user_skills);
                  })
                  .catch( err=> {
                     console.log(err);
                  })
                  .finally(() => {
                     this.isSending = false;
                  })
            }
         },
         toggleAdd(){
            this.isAdding = !this.isAdding;
         },
         selectSkill(skill){
            this.selectedSkill = skill;
            this.fileter = '';
         },

         skillUp(){
            if(this.selectedSkillLevel < 5){
               this.selectedSkillLevel += .5;
            }
         },

         skillDown(){
            if(this.selectedSkillLevel > 5){
               this.selectedSkillLevel -= .5;
            }
         },

         confirmSkill(){
            if(this.selectedSkill && this.selectedSkillLevel >= 1 && this.selectedSkillLevel <= 5 && !this.isSending){
               ApiServices
                  .manageSkill({skill_id: this.selectedSkill.id, lvl: this.selectedSkillLevel, exp_years: 10})
                  .then( res =>{
                     this.$store.dispatch('refreshUserSkills', res.data.result.user_skills);
                     this.cancelAdd;
                  })
                  .catch( err=> {
                     console.log(err);
                  })
                  .finally( () => {
                     this.isSending = false;
                  });
            }
         },

         cancelAdd(){
            this.selectedSkill = null;
            this.selectedSkillLevel = 1;
            this.filter = '';
            this.toggleAdd();
         },
      },
      created(){
         if(this.$store.getters.skills === null){
            this.$store.dispatch('fetchUserSkills');
         }
         if(this.$store.getters.allSkills === null){
            this.$store.dispatch('fetchAllSkills');
         }
      }
   }
</script>

<style lang="scss" scoped>
   .skill-bar {
      transition: width .2s ease-in-out;
   }
</style>