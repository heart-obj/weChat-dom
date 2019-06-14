import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/index'inApplyfor
import LoanApplication from '@/views/loanApplication/index'
import Lication from '@/views/lication/index'
import InApplyfor from '@/views/inApplyfor/index'
import Approved from '@/views/approved/index'
import LimitAndResidue from '@/views/limitAndResidue/index'
import RefundDetail from '@/views/refundDetail/index'
import IntegralMall from '@/views/IntegralMall/index' // 积分商城

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
      path: '/InApplyfor',
      name: 'InApplyfor',
      component: InApplyfor
    },
    {
      path: '/Approved',
      name: 'Approved',
      component: Approved
    },
    {
      path: '/LimitAndResidue',
      name: 'LimitAndResidue',
      component: LimitAndResidue
    },
    {
      path: '/RefundDetail',
      name: 'RefundDetail',
      component: RefundDetail
    },
    {
      path: '/IntegralMall',
      name: 'IntegralMall',
      component: IntegralMall
    }
  ]
})
