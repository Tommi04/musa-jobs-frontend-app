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
   },
   jobOffers: state => {
      return state.jobOffers;
   },
   jobOffersMaxPages: state => {
      return state.jobOffersMaxPages;
   },
   jobOffersCurrentPage: state => {
      return state.jobOffersCurrentPage;
   }
};

const mutations = {
   setSkills: (state, payload) => {
      state.skills = payload;
   },
   setJobOffers: (state, payload) => {
      state.jobOffers = payload.data.result.data;
      state.jobOffersCurrentPage = payload.data.result.current_page;
      state.jobOffersMaxPages = payload.data.result.last_page;
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