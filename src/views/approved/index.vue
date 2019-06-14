<template>
  <div>
    <header class="header"></header>
    <div class="row-box">
      <div class="row" v-for="(item, i) in fromData" :key="i" :class="item.id === 1 ? 'lableFont' : ''">
        <div v-if="item.id === 4" class="row-col">
          <div><span>{{item.lable}}</span> <span class="hint">{{item.zheko}}</span></div>
          <div><span class="valHint">{{item.value2}}</span> <span>{{item.value}}</span></div>
        </div>
        <mt-cell v-if="item.id !== 4" :title="item.lable" :value="item.value"></mt-cell>
      </div>
      <div class="footer-btn">
        <div class="query-btn">还款计划查询</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Approved', // 审核通过
  data () {
    return {
      fromData: [
        {
          lable: '贷款金额',
          value: '￥5000',
          id: 1
        },
        {
          lable: '还款日期',
          value: '2019-07-27',
          id: 2
        },
        {
          lable: '贷款用途',
          value: '房贷',
          id: 3
        },
        {
          lable: '到期还款金额',
          value: '￥5150',
          value2: '￥5180',
          zheko: '(优惠券抵扣30)',
          id: 4
        },
        {
          lable: '贷款人姓名',
          value: '小明',
          id: 5
        },
        {
          lable: '性别',
          value: '男',
          id: 6
        },
        {
          lable: '所在城市（省市区）',
          value: '四川省成都市郫都区',
          id: 7
        },
        {
          lable: '贷款人身份证号',
          value: '513701********0125',
          id: 8
        },
        {
          lable: '收款银行卡号',
          value: '6217**********4223',
          id: 9
        },
        {
          lable: '还款银行卡号',
          value: '6217**********4223',
          id: 10
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped>

.header {
  width: 100%;
  height: 2.773rem;
  background: url('./img/pic_pass@2x.png') no-repeat center;
  background-size: 55% 100%;
  border-bottom: 1px solid #dddddd;
}
.row-box {
  width: 100%;
  box-sizing: border-box;
  padding-top: 0.1rem;
}
.row-box .row {
  width: 100%;
  padding: 0.15rem 0;
}
.row .mint-cell-title {
  text-align: left;
}
.row .row-col {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.row-col>div{
  padding: 0 0.32rem;
  display: inline-block;
  font-size: 0.373rem;
  color: #333333;
}
.row-col .hint {
  color: #999999;
  font-size: 0.24rem;
}
.row-col .valHint {
  color: #999999;
  text-decoration:line-through;
}
.row>>>.mint-cell-wrapper {
  padding: 0 0.32rem;
}
.row>>>.mint-cell-text {
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 0.373rem;
  color: #333333;
}
.row>>>.mint-cell-value {
  font-size: 0.373rem;
  color: #000;
}
.lableFont>>>.mint-cell-value {
  font-weight: bold;
  color: #ffbf12;
}
.rows-box2 {
  background: #f4f4f4;
  padding: 0 0.32rem 1.16rem 0.32rem;
}
.rows-box2 .row-h {
  width: 100%;
  padding: 0.453rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.373rem;
}
.row-h span {
  color: #999;
}
.row-h .row-h-title {
  color: #ffbf12;
  padding-left: 0.507rem;
  position: relative;
}
.row-h .row-h-title::after {
  content: '';
  display: inline-block;
  width: 0.373rem;
  height: 0.373rem;
  background: url('./img/title_icon.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto
}
.footer-btn {
  padding: 0.64rem 0.32rem;
  background: #f4f4f4;
}
.query-btn {
  width: 100%;
  height: 1.173rem;
  border-radius: 9px;
  background: #ffb933;
  line-height: 1.173rem;
  font-size: 0.48rem;
  color: #ffffff;
}
</style>
