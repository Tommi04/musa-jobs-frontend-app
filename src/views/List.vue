<template>
  <div class="list">
    <div class="container mx-auto">
      <ul id="userList">
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data:function(){
    return {
      users:[]
    }
  },
  methods:{
    onClick: function(){
      axios
        // .get('https://reqres.in/api/users?page=2')
        // possiamo mettere solo la parte finale perchè in main.js abbiamo messo la radice come variabile globale
        .get('users?page=2')
        .then((res) => {
          this.users = res.data.data
          console.log(res.data.data);
        })
        .catch((error) =>{
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  h1{
    color: red;
  }
</style>