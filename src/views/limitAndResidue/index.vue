<template>
  <div class="box">
    <header class="header-box">
      <div class="header-text">
        <div>可用额度(元)</div>
        <div class="remai-lines">￥<span>13000</span></div>
        <div>总额度：20000元</div>
      </div>
    </header>
    <div class="rows-box">
      <div class="row">
        <div class="row-h">
          <span class="row-h-title">贷款历史记录</span>
          <span>查看更多》</span>
        </div>
        <table class="row-table">
          <tr v-for="(item, i) in tableData" :key="i">
            <td>{{ item.day }}</td>
            <td>贷款 <span style="color: #ffbf12;">{{ item.sum }}</span> 元</td>
            <td v-if="item.auditType === 1" style="color: #ffb933">{{ item.auditType | auditObjFunc }} <span class="detail-icon"></span></td>
            <td v-if="item.auditType === 2" style="color: #ff3333">{{ item.auditType | auditObjFunc }} <span class="detail-icon"></span></td>
            <td v-if="item.auditType === 3" style="color: #339dff">{{ item.auditType | auditObjFunc }} <span class="detail-icon"></span></td>
            <td v-if="item.auditType === 4" style="color: #20d65c">{{ item.auditType | auditObjFunc }} <span class="detail-icon"></span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LimitAndResidue', // 贷款进度与剩余额度查询
  data () {
    return {
      tableData: [
        {
          day: '2019-05-27',
          sum: '5000',
          auditType: 1
        },
        {
          day: '2019-05-25',
          sum: '5000',
          auditType: 2
        },
        {
          day: '2019-05-01',
          sum: '5000',
          auditType: 3
        },
        {
          day: '2019-04-27',
          sum: '5000',
          auditType: 4
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
  methods: {}
}
</script>
<style scoped>
.box {
  width: 100%;
}
.header-box {
  width: 9.6rem;
  height: 4.4rem;
  background: url('./img/header_bg.png') no-repeat center;
  background-size: 100% 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  border-radius: 9px;
  display: inline-block;
  margin-top: 0.667rem;
  position: relative;
}
.header-text {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 0.4rem;
  color: #ffffff;
  text-shadow: 0px 0.08rem 0.067rem rgba(0, 0, 0, .5);
}
.header-text .remai-lines {
  padding: 0.3rem 0;
}
.header-text .remai-lines span {
  font-size: 1.2rem;
  text-shadow: 0px 0.09rem 0.067rem rgba(0, 0, 0, .5);
}
.rows-box {
  padding: 0 0.32rem;
}
.rows-box .row-h {
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
  width: 0.31rem;
  height: 0.4rem;
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
  padding: 0.15rem 0;
  display: inline-block;
  width: 32%;
  position: relative;
}
.row-table>tr {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #dddddd;
}
.detail-icon {
  width: 0.173rem;
  height: 0.32rem;
  display: inline-block;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: url('./img/detail-icon.png') no-repeat center;
  background-size: 100% 100%;

}
</style>
