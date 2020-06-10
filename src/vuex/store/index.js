import Vue from 'vue'
import Vuex from 'vuex'

import getters from '../getters'
import mutations from '../mutations'

// have vuex involved
Vue.use(Vuex)

const state = {
  nickname: "",
  id: "",
  hasName: false,
  isNameValid: false,
  players:[],
  isJoinedRoom: false,
  state:"WAITING",
  status: "",
  time: "",
  categories:[],
  question: {},
  otherQuestion: "",
  answer:"",
  answers:[],
  choices:[],
  tempScore:[],
  total:[],
  answerMatrix:[],
  currentPlayerId:"",
  ticks:0
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
