<template>
  <main id="profile" class="relative w-full">
    <div class="relative container mx-auto px-4">
      <div class="relative flex flex-wrap">
        <div class="relative mx-auto mt-6 w-full md:w-4/5">
          <component :is="profileComponent"></component>
        </div>
      </div>
    </div>
    <!-- GUARDIAMO UNA COSA IN PIU', QUESTO è ACCETTABILE. COMMENTIAMO ANCHE CompanyProfile
    <company-profile v-if="userType === 'company'"></company-profile>
    <user-profile v-if="userType === 'user'"></user-profile>
    -->
    <!-- LA COSA IN PIU'  -->
  </main>
</template>

<script>
import CompanyProfile from '@/components/Profiles/CompanyProfile'
import UserProfile from '@/components/Profiles/UserProfile'
export default {
  name: 'Profile',
  components: {
      CompanyProfile,
      UserProfile
  },
  //per accedere ad un getter in vueJs devo usare delle proprietà computate
  computed: {
    userType(){
      // console.log(this.$store.getters.userType);
      return this.$store.getters.userType;
    },
    profileComponent(){
      // console.log(this.userType);
      // if( this.userType === 'user') {
        return 'UserProfile';
      // }else if(this.userType === 'company'){
        // return 'CompanyProfile';
      // }else{
        // return '';
      // }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>