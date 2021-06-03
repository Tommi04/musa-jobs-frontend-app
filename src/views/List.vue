<template>
  <div id="list" class="relative w-full">
    <div class="container mx-auto px-4">
      <div class="relative flex flex-wrap">
        <div class="relative w-full lg:w-4/5 mx-auto mt-6">
          <component :is="listType"></component>
        </div>
      </div>
    </div>
      <!-- <ul id="userList">
        <li v-for="user of users" :key="user.id">
          {{ user }}
        </li>
      </ul>
      <div>
        <button 
            @click.prevent="onClick"
            class="px-10 lg:px-16 py-2 lg:py-3 rounded-full bg-mj-blue-1 text-white disabled:bg-opacity-50 font-bold text-lg uppercase tracking-widest shadow-md">
        fetch
        </button>
      </div> -->
  </div>
</template>

<script>
import JobOffersList from '@/components/JobOffers/JobOffersList'
import UsersList from '@/components/Users/UsersList'

// import axios from 'axios'
export default {
  // data:function(){
  //   return {
  //     users:[]
  //   }
  // },
  components: {
    JobOffersList,
    UsersList
  },
  computed: {
    listType() {
      if(this.$store.getters.userType === 'user'){
        return 'JobOffersList';
      }else if( this.$store.getters.userType === 'company'){
        return 'UsersList';
      }else{
        return '';
      }
    }
  },
  
}
</script>

// <style lang="scss" scoped>
//   h1{
//     color: red;
//   }
// </style>