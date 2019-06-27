import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { getUserInfo } from '../api/servers.js'
Vue.use(Vuex)
// 调试,开发模式开启严格模式，修改state必须使用mutations提交的方式
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  state: {
    signature: null,
    nonceStr: null,
    timestamp: null,
    userInfo: null,
    token: null
  },
  getters: {
    userInfo: state => state.userInfo
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
    },
    setUserInfo (state, info) {
      state.userInfo = info
    },
    token (state, token) {
      state.token = token
    }
  },
  actions: {
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo().then(res => {
            const data = res.data
            commit('setUserInfo', data)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store
