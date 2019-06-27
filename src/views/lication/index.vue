<template>
  <div>
    <header class="header"></header>
    <div class="row-box">
      <div class="row">
        <div class="basic-row">
          <span class="basic-row-title">申请条件</span>
          <span class="drop-icon"></span>
        </div>
        <div class="conditions-text">
          <span>1、身体健康，具备劳动生产经营能力、能恪守信用的农户或农村个体经营户。</span>
          <span>2、从事农业相关经营活动，拥有稳定经营场所的城镇个人。</span>
          <span>3、申请人必须已婚。</span>
          <span>4、农户贷款最高5万元 (部分地区额度更高，详情请咨询当地邮储银行分支机构)。单笔贷款最低限额为1000元，以10</span>
          <span>5、贷款期限：1个月至12个月，以月为单位，您可以根据生产经营周期、还款能力等情况自主选择贷款期限。</span>
          <span>6、贷款期限：1个月至12个月，以月为单位，您可以根据生产经营周期、还款能力等情况自主选择贷款期限。</span>
        </div>
      </div>
      <div class="row">
        <div class="basic-row">
          <span class="basic-row-title">申请登记</span>
        </div>
        <div class="mint-cell-box" @click="loanType">
          <mt-field label="贷款类型" placeholder="请选择" v-model="fromData.loanType" :readonly="true"></mt-field>
        </div>
        <div class="mint-cell-box">
          <mt-field label="贷款金额" placeholder="请输入" ></mt-field>
        </div>
        <div class="mint-cell-box">
          <mt-field label="还款期限" placeholder="请输入" ></mt-field>
        </div>
        <div class="mint-cell-box">
          <mt-field label="到期还款金额" placeholder="根据银行规定为准" ></mt-field>
        </div>
      </div>
      <footer class="footer">
        <label for="weuiAgree" class="weui-agree" >
            <span class="check_btn" :class="checkType ? 'check_btn_true' : 'check_btn_false'" @click="checkedFunc"></span>
            <span class="weui-agree__text">
                我已阅读并同意<a href="javascript:void(0);">《贷款用户协议》</a>和<a href="javascript:void(0);">《隐私声明》</a>
            </span>
        </label>
        <div class="submit-btn" :class="checkType ? 'submit-btn-success' : ''" @click="submitFrom">
          提交申请
        </div>
      </footer>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" :closeOnClickModal="false"></mt-actionsheet>
  </div>
</template>
<script>
export default {
  name: 'Lication', // 贷款申请
  data () {
    return {
      actions: [
        {
          name: '房贷',
          method: () => {
            this.fromData.loanType = '房贷'
          }
        },
        {
          name: '车贷',
          method: () => {
            this.fromData.loanType = '车贷'
          }
        },
        {
          name: '个人生产经营贷款',
          method: () => {
            this.fromData.loanType = '个人生产经营贷款'
          }
        },
        {
          name: '小额贷款',
          method: () => {
            this.fromData.loanType = '小额贷款'
          }
        },
        {
          name: '林权抵押贷款',
          method: () => {
            this.fromData.loanType = '林权抵押贷款'
          }
        },
        {
          name: '土地抵押贷款',
          method: () => {
            this.fromData.loanType = '土地抵押贷款'
          }
        }
      ],
      fromData: {
        loanType: null
      },
      sheetVisible: false,
      checkType: false
    }
  },
  methods: {
    /**
     * 控制贷款类型弹窗
     */
    loanType () {
      this.sheetVisible = true
    },
    checkedFunc () {
      this.checkType = !this.checkType
    },
    /**
     * 提交贷款申请
     */
    submitFrom () {
      if (this.checkType) {
        console.log('提交！！')
        this.$router.push({
          name: 'InApplyfor',
          query: ''
        })
      }
    }
  }
}
</script>
<style scoped>

.header {
  width: 100%;
  height: 2.773rem;
  background: url('./img/banner@2x.png') no-repeat center;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, .3);
}
.box .row-box {
  width: 100%;
  box-sizing: border-box;
}
.box .row {
  width: 100%;
  height: auto;
}
.row-box .basic-row {
  width: 100%;
  height: 1.147rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
  line-height: 1.147rem;
  text-align: left;
  padding: 0 0.32rem;
  position: relative;
}
.basic-row .basic-row-title {
  display: inline-block;
  padding-left: 0.56rem;
  position: relative;
  font-size: 0.427rem;
  color: #ffb933;
}
.basic-row .basic-row-title::before {
  display: inline-block;
  content: '';
  width: 0.347rem;
  height: 0.4rem;
  background: url('./img/basic_icon.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.basic-row .drop-icon {
  display: inline-block;
  width: 0.453rem;
  height: 0.253rem;
  background: url('./img/drop_icon.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  right: 0.15rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
.conditions-text {
  padding: 0.4rem 0.32rem;
  width: 100%;
  box-sizing: border-box;
}
.conditions-text span {
  display: inline-block;
  width: 100%;
  text-align: left;
  color: #999999;
  font-size: 0.2667rem;
  line-height: 0.5rem;
}
.row .mint-cell-box {
  padding: 0.3rem 0.32rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
}
.mint-cell-box>>>.mint-cell-title {
  font-size: 0.373rem;
  color: #000;
  font-weight: 500;
  width: auto;
}
.mint-cell-box>>>.mint-field-core {
  font-size: 0.373rem;
  text-align: right;
  padding-right: 0.133rem;
  color: #000;
  box-sizing: border-box;
}
.footer {
  background: #f4f4f4;
  padding:0.2rem 0 1.8rem 0;
}
.footer .weui-agree {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.1rem;
  padding-left: 0.32rem;
  width: 100%;
  text-align: left;
  line-height: 0.4rem;
  font-size: 0.32rem;
}
.check_btn {
  width: 0.4rem;
  height: 0.4rem;
  display: inline-block;
  vertical-align:middle
}
.check_btn_true {
  background: url('./img/check_true.png') no-repeat center;
  background-size: 100% 100%;
}
.check_btn_false {
  background: url('./img/check_false.png') no-repeat center;
  background-size: 100% 100%;
}
.footer .submit-btn {
  width: 9.36rem;
  height: 1.1733rem;
  background: #d2d2d2;
  border-radius: 5px;
  line-height: 1.1733rem;
  display: inline-block;
  font-size: 0.5rem;
  color: #999999;
  margin-top: 0.667rem;
}
.footer .submit-btn-success {
  background: #00b7ee;
  color: #ffffff;
}
</style>
