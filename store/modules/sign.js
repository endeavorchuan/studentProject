export default {
    state: {
        signInfo: null
    },
    getters: {
  
    },
    mutations: {
        addSignInfo (state, option) {
            state.signInfo = option
        }
    },
    actions: {
        addSignInfoActions({commit}, option) {
            commit('addSignInfo', option)
        }
    }
  }