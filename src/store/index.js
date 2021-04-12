import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  user: {
    id: '',
    roles: [],
    username: ''
  },
  screenHeight: document.documentElement.clientHeight || document.body.clientHeight,
  screenWidth: document.documentElement.clientWidth || document.body.clientWidth,
  headHeight: 50,
  loading: false
}

const store = new Vuex.Store({
  actions,
  state,
  getters,
  mutations
})

export default store