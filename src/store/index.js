import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import constants from '../constants'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  home: {
    groups: [],
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    login({ commit }, user){
      var postBody = {   // пример данных для отправки(позже они преобразуются в json)
        email: user.user.mail,
        pass: user.user.pass
      };
      postBody = JSON.stringify(postBody);
      let formData = new FormData();
      formData.append('user', postBody);
      return new Promise((resolve, reject)=> {
        commit('auth_request')
        axios.post(constants.BACKEND_URL + 'auth/login', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(resp=> {
          if (resp.data.ok == 1) {
            const token = resp.data.data.token
            const user = {email: resp.data.data.email, role: resp.data.data.role, id: resp.data.data.id}
            localStorage.setItem('token', token)
            localStorage.setItem('capa_user', JSON.stringify(user));
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          } else {
            user.obj.message = resp.data.message;
          }
        }).catch(err=> {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({ commit }, user){
      return new Promise((resolve, reject)=> {
        commit('auth_request')
        axios({
          url: constants.BACKEND_URL + 'authorisation/register/?email=' + user.email + '&name=' + user.name + '&last_name=' + user.last_name +
          '&company=' + user.company + '&password=' + user.password, method: 'GET'
        }).then(resp=> {
          /* const token = resp.data.token
           const user = resp.data.user
           localStorage.setItem('token', token)
           axios.defaults.headers.common['Authorization'] = token
           commit('auth_success', token, user)
           resolve(resp)*/
          if (resp.data.ok == 1) {
            window.location.href = "/login/?message=" + resp.data.message;
          } else {
            alert(resp.data.error);
          }

        }).catch(err=> {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({ commit }){
      return new Promise((resolve, reject)=> {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('capa_user')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state=>!!state.token,
    authStatus: state=>state.status,
  },

})