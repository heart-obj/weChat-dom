import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/index'
import LoanApplication from '@/views/loanApplication/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoanApplication',
      component: LoanApplication
    }
  ]
})
