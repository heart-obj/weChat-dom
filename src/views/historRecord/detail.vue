<template>
  <div>
    <div class="row-box">
      <div class="row" v-for="(item, i) in fromData" :key="i" :class="item.id === 1 ? 'lableFont' : ''">
        <div v-if="item.id === 4" class="row-col">
          <div><span>{{item.lable}}</span> <span class="hint">{{item.zheko}}</span></div>
          <div><span class="valHint">{{item.value2}}</span> <span>{{item.value}}</span></div>
        </div>
        <mt-cell v-if="item.id === 0" :title="item.lable"><span :style="{color:textColor[item.value-0]}">{{ item.value | auditObjFunc }}</span></mt-cell>
        <mt-cell v-if="item.id !== 4 && item.id !== 0" :title="item.lable" :value="item.value"></mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HistorRecordDetail', // 贷款记录详情
  data () {
    return {
      fromData: [
        {
          lable: '贷款状态',
          value: 3,
          id: 0
        },
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
      ],
      textColor: {
        1: '#ffb933',
        2: '#ff3333',
        3: '#339dff',
        4: '#20d65c'
      }
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
  methods: {}
}
</script>
<style scoped>

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
}
.row>>>.mint-cell-value {
  font-size: 0.373rem;
}
/* .lableFont>>>.mint-cell-text {
  font-weight: bold;
} */
.lableFont>>>.mint-cell-value {
  /* font-weight: bold; */
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
.row-table {
  width: 100%;
  font-size: 0.373rem;
  background: #ffffff;
}
.row-table>tr>td {
  padding: 0.4rem 0;
}
.row-table>tr {
  border-bottom: 1px solid #f4f4f4;
}
</style>
