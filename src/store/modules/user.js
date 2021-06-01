import axios from 'axios'

const state = {
   skills: null
};

const getters = {
   skills: state => {
      return state.skills
   }
};

const mutations = {
   setSkills: (state, payload) => {
      state.skills = payload;
   }
};

const actions = {
   fetchUserSkills: ({commit}) => {
      axios
         .get('my-skills')
         .then(res => {
            commit('setSkills', res.data.result.skills);
         })
         .catch( err=> {
            console.log(err);
         })
   },
   refreshUserSkills: ({commit}, payload) => {
      commit('setSkills', payload);
   }
};

export default{
   state,
   getters,
   mutations,
   actions
}