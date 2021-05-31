import axios from 'axios'
import router from '../../router'
const state = {
    // l'app tiene il token finchè non ricarico la pagina.
    //Per mantenere il token sempre dobbiamo usare il localstore che è un piccolo database locale in internet
    // token: localStorage.getItem('token') ? localStorage.getItem('token') : null, //ES5
    token: localStorage.getItem('token') || null, //ES6
    //da fare in laravel per certificare se il token è valido
    userData: localStorage.getItem('userData') || {},
    //da laravel torna un oggetto injection quindi dovr� metterli in un oggetto
    //errors:{}
};
const getters = {
    token: state => {
        return state.token;
    },
    user: state => {
        return state.userData;
    },
    isAuth: state => {
        let stato = state.token !== null;
        return stato;
    },
    // usersList: state => {
    //   return state.users;
    // }
    errors: state => {
        return state.errors;
    },
    userType: state => {
        switch(state.userData.role_id){
            case 2:
                return 'user';
            case 3:
                return 'company';
            default:
                return 'none';
        }
    },
    isUser: state => {
        return state.userData.role_id === 2;
    },
    isCompany: state => {
        return state.userData.role_id === 3;
    }
};
const mutations = {
    login: (state, payload) => {
        state.token = payload.token;
        state.userData = payload.userData;
        // commit('setUserData'); // si può fare dalla ultime versioni di vue ma non è una cosa buona da fare
        localStorage.setItem('token', payload.token);
        //da fare in laravel per certificare se il token è valido
        localStorage.setItem('userData', payload.userData);
        //sintassi per mandarmi su un'altra rotta
        router.push('/list');
    },
    logout: (state) => {
        state.token = null;
        state.userData = {};
        localStorage.removeItem('token');
        console.log('token rimosso ' + state);
        router.push('/');
    },
    setUserData: (state, payload) => {
        state.userData = payload;
    },
    setErrors:(state, payload) => {
        state.errors = payload;
    },
    resetErrors:(state) => {
        state.errors = {};
    },
    setUserAvatar:(state, payload) => {
        state.userData.details.photo = payload;
        state.userData.details.photo_full_path = payload;
    }
    // setUsers: (state, payload) =>{
    //   state.users = payload;
    // }
};
const actions = {
    doLogin: ({ commit }, payload) => {
        axios
            .post('user-login', payload)
            .then( res => {
                // console.log(res.data.result)
                commit('login', res.data.result);
            })
            .catch( err => {
                console.log('error', err)
            });
    },
    doCompanyLogin: ({commit}, payload) => {
        console.log(payload);
        axios
            .post('company-login', payload)
            .then( res => {
                // console.log(res.data.result)
                commit('login', res.data.result);
            })
            .catch( err => {
                console.log('error', err)
            });
    },
    doLogout: ( {commit} ) => {
        if(state.token){
            axios
            //serve il token, lo abbiamo messo nel main.js in
            //axios.interceptors.request.use(config => {...}
            .post('logout')
            .then((res) => {
                if (res.status === 200){
                    // console.log(res);
                    commit('logout');
                }else{
                    throw new Error('errore di logout');
                }
            })
            .catch(err =>{
                console.log(err);
            });
        }
    },
    checkLogin:({commit}) => {
        if(state.token){
            axios
            .get('my-profile')
            .then(res => {
                if(res.status === 200){
                    commit('setUserData', res.data.result.userData);
                }
                console.log(res);
            })
            .catch(err => {
                //così quando cerchiamo di fare il login, se qualcosa non va a buon fine, mi sloggo
                commit('logout');
                console.log(err);
            });
        }
    },
    registerCompany: ({commit}, payload) => { //NON ANCORA OPERATIVO
        //per rimappare i nomi delle proprietà dello userData in RegisterCompany
        const postBody = {
            first_name: payload.firstName,
            last_name: payload.lastName,
            email: payload.email,
            company_name: payload.company_name,
            category: payload.category,
            password: payload.password,
            confirmPassword: payload.passwordConfirm,
            privacy: payload.privacy
        };
        commit('resetErrors');
        axios
            //endpoint da creare in laravel. Manca che l'API ritorni il token
            .post('register-company', postBody)
            .then( res => {
                console.log(res);
                commit('login', res.data.result);
            })
            .catch(err => {
                commit('setErrors', err.response.data.message)
                console.log(err);
                console.log(err.response);
                console.log(err.request); //request che abbiamo mandato
                console.log(err.message); //messaggio dello status code su back-end
                console.log(err.config);  //
            })
    },
    setErrors: ({commit}, payload) => {
        commit('setErrors', payload.response.data.message);
    },
    resetErrors: ({commit}) => {
        commit('resetErrors');
    },
    registerUser: ({commit}, payload) => { //NON ANCORA OPERATIVO
        //per rimappare i nomi delle proprietà dello userData in RegisterCompany
        const postBody = {
            first_name: payload.firstName,
            last_name: payload.lastName,
            email: payload.email,
            password: payload.password,
            confirmPassword: payload.passwordConfirm,
            privacy: payload.privacy
        };
        axios
            //endpoint da creare in laravel. Manca che l'API ritorni il token
            .post('register', postBody)
            .then( res => {
                console.log(res);
                commit('login', {});
            })
            .catch(err => {
                console.log(err);
            })
    },
    setUserAvatar({commit}, payload){
        commit('setUserAvatar', payload)
    }
//     fetchUsers: ({commit, state}) => {
//       Axios
//         .get('https://reqres.in/api/users?page=2')
//         .then((res) => {
//           console.log(res);
//           console.log(state);
//           commit('setUsers', res.data.data);
//         })
//         .catch( err =>{
//           console.log(err);
//         });
//     },
};


export default {
    state,
    getters,
    mutations,
    actions,
}