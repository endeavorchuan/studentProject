export default {
    state: {
        classInfo: null
    },
    getters: {
  
    },
    mutations: {
        addClassInfo(state, option) {
            state.classInfo = option
        }
    },
    actions: {
        addClassInfoActions({commit}, option) {
            commit('addClassInfo', option)
        }
    }
  }