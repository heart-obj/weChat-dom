<template>
  <div class="box">
    <header class="header-tab">
      <div :class="selectedTba === 1 ? 'select-tab' : ''" @click="headerTab(1)">未使用</div>
      <div :class="selectedTba === 2 ? 'select-tab' : ''" @click="headerTab(2)">已失效</div>
    </header>
    <div class="rows-box">
      <div class="row-item" v-for="(item, i) in couponData" :key="i">
        <div class="col-item">
          <div class="col-item-c">
            <div style="color: #ffac1b;font-size: 0.8rem;">{{ item.price }}<span style="font-size: 0.48rem;">￥</span></div>
            <div style="color: #ff3838;font-size: 0.267rem;margin-top: 0.133rem;">{{ item.discounts }}</div>
          </div>
          <div class="col-item-c">
            <div style="color: #333333;font-size: 0.373rem;text-align: left;">{{ item.discountsTiltle }}</div>
            <div style="color: #999999;font-size: 0.267rem;text-align: left;margin-top: 0.133rem;">使用日期:{{ item.startDay }}至{{ item.endDay }}</div>
            <div class="rule-box">
              <div class="rule-btn" :class="item.ruleClick ? 'select-rule-btn' : ''" @click="ruleClickFunc(item)">使用规则</div>
            </div>
          </div>
          <div class="coupons-btn-box" v-show="selectedTba === 1"><div class="coupons-btn">使用</div></div>
          <div class="coupons-btn-box" v-show="selectedTba === 2"><div class="coupons-btn off-coupons-btn">已过期</div></div>
        </div>
        <div class="col-item2" v-show="item.ruleClick">{{ item.ruleText }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Coupons', // 优惠劵
  data () {
    return {
      couponData: [
        {
          price: 2000,
          discounts: '新手注册专享优惠',
          discountsTiltle: '首次贷款减满2000减20',
          startDay: '2019.5.11',
          endDay: '2019.6.18',
          ruleText: '新注册用户首次贷款满2000元可在我的-优惠券里使用优惠，还款时自动 减少20元。',
          ruleClick: false
        },
        {
          price: 2000,
          discounts: '新手注册专享优惠',
          discountsTiltle: '首次贷款减满2000减20',
          startDay: '2019.5.11',
          endDay: '2019.6.18',
          ruleText: '新注册用户首次贷款满2000元可在我的-优惠券里使用优惠，还款时自动 减少20元。',
          ruleClick: false
        },
        {
          price: 2000,
          discounts: '新手注册专享优惠',
          discountsTiltle: '首次贷款减满2000减20',
          startDay: '2019.5.11',
          endDay: '2019.6.18',
          ruleText: '新注册用户首次贷款满2000元可在我的-优惠券里使用优惠，还款时自动 减少20元。',
          ruleClick: false
        }
      ],
      selectedTba: 1
    }
  },
  methods: {
    headerTab (selectedNum) {
      this.selectedTba = selectedNum
    },
    ruleClickFunc (item) {
      item.ruleClick = !item.ruleClick
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  background: #f4f4f4;
}
.box .header-tab {
  width: 100%;
  height: 1.187rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}
.header-tab>div {
  display: inline-block;
  width: 50%;
  height: 1.2rem;
  line-height: 1.187rem;
  font-size: 0.373rem;
  color: #595959;
}
.header-tab .select-tab {
  color: #333333;
  position: relative;
}
.header-tab .select-tab::after {
  display: inline-block;
  content: '';
  width: 40%;
  height: 0.067rem;
  background: #ffb933;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.box .rows-box {
  width: 100%;
  box-sizing: border-box;
  padding: 0.32rem;
}
.rows-box .row-item {
  width: 100%;
  margin-bottom: 0.2rem;
}
.row-item .col-item {
  width: 100%;
  height: 2.587rem;
  background: url('./img/model_bg.png') no-repeat center;
  background-size: 101% 100%;
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.5rem;
}
.row-item .col-item2 {
  display: inline-block;
  background: #ffffff;
  width: 99%;
  box-sizing: border-box;
  padding: 0.433rem;
  margin-top: -0.23rem;
  position: relative;
  color: #999999;
  font-size: 0.26rem;
}
.row-item .col-item2::after {
  display: inline-block;
  content: '';
  width: 0.133rem;
  height: 0.133rem;
  background: #ff4747;
  border-radius: 50%;
  position: absolute;
  left: 0.3rem;
  top: 0.563rem;
}
.col-item>div {
  display: inline-block;
}
.col-item .col-item-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.col-item-c .rule-box {
  margin-top: 0.133rem;
  display: flex;
  justify-content: start;
}
.col-item-c .rule-btn {
  color: #999999;
  font-size: 0.267rem;
  text-align: left;
  position: relative;
  display: inline-block;
  padding-right: 0.363rem;
}
.rule-btn::after {
  display: inline-block;
  content: '';
  height: 0.253rem;
  width: 0.133rem;
  background: url('./img/detail-icon.png') no-repeat center;
  background-size: 100% 100%;
  transform: rotate(-90deg);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.select-rule-btn::after {
  transform: rotate(90deg);
}
.coupons-btn-box {
  width: 1.547rem;
  position: relative;
}
.coupons-btn {
  width: 1.547rem;
  height: 0.5rem;
  background: #ffb933;
  color: #ffffff;
  font-size: 0.32rem;
  line-height: 0.5rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.off-coupons-btn {
  background: #999999;
}
</style>
