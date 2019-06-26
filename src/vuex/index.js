import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    signature: null,
    nonceStr: null,
    timestamp: null
  },
  mutations: {
    signature (state, signature) {
      state.signature = signature
    },
    nonceStr (state, nonceStr) {
      state.nonceStr = nonceStr
    },
    timestamp (state, timestamp) {
      state.timestamp = timestamp
    }
  }
})
export default store
