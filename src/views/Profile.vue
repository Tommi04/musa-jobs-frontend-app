<template>
  <div class="list">
    <!-- GUARDIAMO UNA COSA IN PIU', QUESTO è ACCETTABILE. COMMENTIAMO ANCHE CompanyProfile
    <company-profile v-if="userType === 'company'"></company-profile>
    <user-profile v-if="userType === 'user'"></user-profile>
    -->
    <!-- LA COSA IN PIU'  -->
    <component :is="profileComponent"></component>
  </div>
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
      console.log(this.userType);
      if( this.userType === 'user') {
        return 'UserProfile';
      }else if(this.userType === 'company'){
        return 'CompanyProfile';
      }else{
        return '';
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>