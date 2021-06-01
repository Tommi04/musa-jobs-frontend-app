import axios from 'axios'

const state = {
   allSkills: null
};

const getters = {
   allSkills: state => {
      return state.allSkills;
   }
};

const mutations = {
   setAllSkills: (state, payload) => {
      state.allSkills = payload;
   }
};

const actions = {
   fetchAllSkills: ({commit}) => {
      axios
         .get('all-skills')
         .then(res => {
            commit('setAllSkills', res.data.result.skills);
         })
         .catch( err=> {
            console.log(err);
         })
   },
};

export default{
   state,
   getters,
   mutations,
   actions
}