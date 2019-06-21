import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/index'inApplyfor
import LoanApplication from '@/views/loanApplication/index' // 首次贷款实名身份验证
import Lication from '@/views/lication/index' // 贷款申请
import InApplyfor from '@/views/inApplyfor/index' // 贷款申请中
import Approved from '@/views/approved/index' // 申请通过
import LimitAndResidue from '@/views/limitAndResidue/index' // 贷款进度与剩余额度查询
import RefundDetail from '@/views/refundDetail/index' // 贷款详情（贷款批次）
import IntegralMall from '@/views/IntegralMall/index' // 积分商城
import MyPrize from '@/views/myPrize/index' // 积分商城
import PersonalCenter from '@/views/personalCenter/index' // 个人中心
import PersonalData from '@/views/personalCenter/personalData/index' // 个人资料
import Coupons from '@/views/personalCenter/coupons/index' // 个人优惠劵
import AboutUs from '@/views/personalCenter/aboutUs/index' // 关于我们
import HistorRecord from '@/views/historRecord/index' // 贷款历史记录
import HistorRecordDetail from '@/views/historRecord/detail' // 贷款历史记录详情
import Agreement from '@/views/agreementAndProblem/agreement' // 协议及声明
import Problem from '@/views/agreementAndProblem/problem' // 常见问题
import SignIn from '@/views/signIn/index' // 签到

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'LoanApplication'
    },
    {
      path: '/LoanApplication',
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
    },
    {
      path: '/MyPrize',
      name: 'MyPrize',
      component: MyPrize
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/PersonalData',
      name: 'PersonalData',
      component: PersonalData
    },
    {
      path: '/Coupons',
      name: 'Coupons',
      component: Coupons
    },
    {
      path: '/HistorRecord',
      name: 'HistorRecord',
      component: HistorRecord
    },
    {
      path: '/HistorRecordDetail',
      name: 'HistorRecordDetail',
      component: HistorRecordDetail
    },
    {
      path: '/Agreement',
      name: 'Agreement',
      component: Agreement
    },
    {
      path: '/Problem',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
