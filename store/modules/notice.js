export default {
    state: {
        noticeInfo: null
    },
    getters: {
  
    },
    mutations: {
        addnoticeInfo (state, option) {
            state.noticeInfo = option
        }
    },
    actions: {
        addnoticeInfoActions({commit}, option) {
            commit('addnoticeInfo', option)
        }
    }
  }