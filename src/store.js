import { createStore  } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const selected = {
  state: 'selected',
  backgroundColor: 'bg-selected',
  arrowBody: 'ab-selected'
}

const notSelected = {
  state: 'not-selected',
  backgroundColor: 'bg-not-selected',
  arrowBody: 'ab-not-selected'
}

export default new createStore({
  state: {
    count: 0,
    details: {
      state: 'selected',
      backgroundColor: 'bg-selected',
      arrowBody: 'ab-selected'
    }
  },
  plugins: [createPersistedState()],
  mutations: {
    setCount(state) {
      state.count++
	  },
    setState(state, value) {
      state.details = value
	  },
  },
  actions: {
    increment({ commit }) {
      commit('setCount')
    },
    changeState({ commit }) {
      if (this.state.details.state === 'selected') {
          commit('setState', notSelected)
      } else {
          commit('setState', selected)
      }
    }
  }
});