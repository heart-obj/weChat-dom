<template>
  <div class="box">
    <div class="row" v-for="(item, i) in detailList" :key="i">
      <div class="row-h">
        <span>{{ item.day }}</span>
        <span :style="{'color': textColor[item.state]}">{{ item.state | auditObjFunc }}</span>
      </div>
      <div class="row-content">
        <div class="content-col">
          <span>贷款</span>
          <span style="color: #ffb933;">{{ item.sum }}</span>
        </div>
        <div class="content-col">
          <span>还款期限</span>
          <span>{{ item.deadline }}</span>
        </div>
        <div class="content-col">
          <span>到期应还金额</span>
          <span>{{ item.refundSum }}</span>
        </div>
        <div class="content-btn">
          <span class="btn">提前还款</span>
          <span class="btn2" :class="!queryClick || 'clickbtn2'" @click="queryDetail">
            还款情况
          </span>
        </div>
        <div class="refundDetail-list" v-show="queryClick">
          <div class="detail-row" v-for="(itemDetail, n) in item.refundDetail" :key="n">
            <div class="detail-day">{{ itemDetail.nper }}</div>
            <div class="detail-content">
              <span>￥{{ itemDetail.sum }}</span>
              <span :style="{'color': textColor[itemDetail.state]}">{{ itemDetail.state | auditObjFunc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RefundDetail', // 还款计划查询
  data () {
    return {
      queryClick: false,
      textColor: {
        1: '#ffb933',
        2: '#ff3333',
        3: '#339dff',
        4: '#20d65c'
      },
      detailList: [
        {
          day: '2019-05-27',
          state: 3,
          sum: 5000,
          deadline: '2个月',
          refundSum: 5150,
          discounts: '',
          refundDetail: [
            {
              nper: '第4期  2019.04.15~2019.05.15',
              sum: 1060,
              state: 3
            },
            {
              nper: '第3期  2019.04.15~2019.05.15',
              sum: 1060,
              state: 4
            },
            {
              nper: '第2期  2019.04.15~2019.05.15',
              sum: 1060,
              state: 4
            },
            {
              nper: '第1期  2019.04.15~2019.05.15',
              sum: 1060,
              state: 4
            }
          ]
        }
      ]
    }
  },
  filters: {
    auditObjFunc (value) {
      const auditObj = {
        1: '审批中',
        2: '未通过',
        3: '还款中',
        4: '已还清'
      }
      return auditObj[value]
    }
  },
  methods: {
    queryDetail () {
      this.queryClick = !this.queryClick
    }
  }
}
</script>
<style scoped>
.box {
  padding: 0.667rem 0;
  background: #f1f1f1;
  font-size: 0.373rem;
  min-height: 100%;
  box-sizing: border-box;
}
.row {
  display: inline-block;
  width: 9.36rem;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  padding-bottom: 0.346rem;
  background: #ffffff;
}
.row .row-h {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.267rem 0.4rem;
  border-bottom: 1px solid #dddddd;
  color: #333333;
  font-size: 0.373rem;
}
.row .content-col {
  width: 100%;
  font-size: 0.373rem;
  display: flex;
  justify-content: space-between;
}
.content-col>span {
  display: inline-block;
  width: 48%;
  padding: 0.187rem 0;
}
.content-col span:nth-child(1) {
  text-align: right;
  font-size: 0.373rem;
  color: #999999;
}
.content-col span:nth-child(2) {
  text-align: left;
  color: #333333;
}
.row .content-btn {
  width: 100%;
  padding:  0.187rem 0;
  position: relative;
}
.content-btn .btn {
  display: inline-block;
  width: 2.133rem;
  height: 0.693rem;
  font-size: 0.373rem;
  line-height: 0.693rem;
  color: #ffffff;
  background: #ffb933;
  border-radius: 7px;
}
.content-btn .btn2 {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0.17rem;
  transform: translate(-50%, -50%);
  color: #999999;
}
.content-btn .btn2::after {
  content: '';
  display: inline-block;
  width: 0.173rem;
  height: 0.32rem;
  position: absolute;
  right: -0.35rem;
  top: 0;
  bottom: 0;
  margin: auto;
  background: url('./img/detail-icon.png') no-repeat center;
  background-size: 100% 100%;
  transform: rotate(0)
}
.content-btn .clickbtn2::after {
  transform: rotate(90deg)
}
.refundDetail-list {
  width: 100%;
  box-sizing: border-box;
  padding:  0 0.4rem;
  border-top: 1px solid #dddddd;
}
.detail-row {
  border-bottom: 1px solid #dddddd;
  padding: 0.24rem 0;
}
.detail-row:nth-last-child(1) {
  border: none;
}
.detail-row .detail-day {
  color: #999999;
  text-align: left;
}
.detail-row .detail-content {
  display: flex;
  justify-content: space-between;
  padding-top: 0.2rem;
}
.detail-row .detail-content>span:nth-child(1) {
  color: #ffb933;
}

</style>
