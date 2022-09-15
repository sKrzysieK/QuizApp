import { createStore } from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state: {
    appName: 'Quiz App',
    quiz: {
      settings: {},
      questions: [],
      currQuestionIndex: 0,
      cardColors: ['red','green','blue','yellow'],
      score: 0,
      isFinished: false
    }
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
