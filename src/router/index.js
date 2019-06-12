import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/index'inApplyfor
import LoanApplication from '@/views/loanApplication/index'
import Lication from '@/views/lication/index'
import LnApplyfor from '@/views/inApplyfor/index'
import Approved from '@/views/approved/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoanApplication',
      component: LoanApplication
    },
    {
      path: '/Lication',
      name: 'Lication',
      component: Lication
    },
    {
      path: '/LnApplyfor',
      name: 'LnApplyfor',
      component: LnApplyfor
    },
    {
      path: '/Approved',
      name: 'Approved',
      component: Approved
    }
  ]
})
