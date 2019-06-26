// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible/index.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from './vuex/index'
Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
