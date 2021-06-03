import axios from 'axios'

const state = {
   skills: null,
   jobOffers: [],
   jobOffersMaxPages: 1,
   jobOffersCurrentPage: 1
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
   },
   searchJobOffers: ({commit}, payload) => {
      axios
         .post('job-offers-by-skill', payload.skills)
         .then( (res) =>{
            // console.log(res);
            commit('setJobOffers', res);
         })
         .catch( (err) =>{
            console.log(err)
         });
   }
};

export default{
   state,
   getters,
   mutations,
   actions
}