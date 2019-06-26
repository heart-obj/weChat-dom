<template>
  <div class="box">
    <h1 class="box-h">贷款实名身份认证</h1>
    <span class="box-title">为保障资金安全，贷款需要验证你的个人身份信息，再次贷款无需验证。</span>
    <div class="row-box">
      <div class="basic-row">
        <span class="basic-row-title">基础信息</span>
      </div>
      <div class="mint-cells mint-cells_form">
        <div class="mint-cell-box" v-for="(item, key) in formDataArr" :key="key">
          <div @click="openPicker" v-if="item.prop === 'birthday'"><mt-field  :label="item.name" :placeholder="item.title" v-model="formData[item.prop]" :readonly="true"></mt-field></div>
          <div @click="genderActionsheet" v-if="item.prop === 'gender'"><mt-field  :label="item.name" :placeholder="item.title" v-model="formData[item.prop]" :readonly="true"></mt-field></div>
          <div @click="selectRegion(true)" v-if="item.prop === 'region'"><mt-field  :label="item.name" :placeholder="item.title" v-model="formData[item.prop]" :readonly="true"></mt-field></div>
          <mt-field v-if="ifType.indexOf(item.prop) < 0" :label="item.name" :placeholder="item.title" v-model="formData[item.prop]"></mt-field>
        </div>
      </div>
      <div class="basic-row" style="margin-top: 0.12rem;border: none;">
        <span class="basic-row-title">上传身份证正反面</span>
      </div>
      <div style="color: #999999;font-size: 0.32rem;text-align: left;box-sizing: border-box;padding: 0 0.32rem;">
        上传身份证要求：<span style="color: #ff4633">1、照片清晰   2、亮度均匀   3、四角完整</span>
      </div>
      <div class="idCard-row">
        <div class="idCard-img" @click="uploadIdCard"><img src="./img/idcards_heads.png" alt="" srcset=""></div>
        <div class="idCard-img" @click="uploadIdCard"><img src="./img/idcards_national.png" alt="" srcset=""></div>
      </div>
      <footer class="footer">
        <label for="weuiAgree" class="weui-agree" >
            <span class="check_btn" :class="checkType ? 'check_btn_true' : 'check_btn_false'" @click="checkedFunc"></span>
            <span class="weui-agree__text">
                我已阅读并同意<a href="javascript:void(0);">《贷款用户协议》</a>和<a href="javascript:void(0);">《隐私声明》</a>
            </span>
        </label>
        <div class="submit-btn" :class="checkType ? 'submit-btn-success' : ''" @click="submitFrom">
          提交身份验证
        </div>
      </footer>
    </div>
    <mt-datetime-picker
      class="datepicker-box"
      type="date"
      ref="picker"
      year-format="{value}"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" :closeOnClickModal="false"></mt-actionsheet>
    <mt-actionsheet :actions="idCardPng" v-model="idCardVisible" :closeOnClickModal="false"></mt-actionsheet>
    <div class="city-pupop-box" v-show="cityPupop">
      <div :class="cityPupop ? 'showCity-pupop' : 'city-pupop'">
        <div class="city-title">所在城市（省市区）<span class="close-btn" @click="selectRegion(false)"></span></div>
        <Citylist></Citylist>
      </div>
    </div>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk'
import Citylist from '@/components/cityPupop'
import { getConfigData } from '@/api/servers'
export default {
  name: 'LoanApplication', // 首次贷款实名身份验证
  components: {
    Citylist
  },
  data () {
    return {
      formDataArr: [
        {
          name: '真实姓名',
          title: '请输入真实姓名',
          type: 'text',
          prop: 'name',
          rule: null
        },
        {
          name: '性别',
          title: '请选择您的性别',
          type: 'text',
          prop: 'gender',
          rule: null
        },
        {
          name: '生日',
          title: '请输入您的生日',
          type: 'number',
          prop: 'birthday',
          rule: null
        },
        {
          name: '所在城市(省市区)',
          title: '请选择您的所在地',
          type: 'text',
          prop: 'region',
          rule: null
        },
        {
          name: '身份证号码',
          title: '请输入18位真实身份证号码',
          type: 'number',
          prop: 'idCard',
          rule: null
        },
        {
          name: '电话号码',
          title: '请输入您的联系方式',
          type: 'tel',
          prop: 'cellNumber',
          rule: null
        },
        {
          name: '发送验证码',
          title: '请输入验证码',
          type: 'verify',
          prop: 'verify',
          rule: null
        },
        {
          name: '收款银行卡号',
          title: '请输入您的收款银行卡号',
          type: 'number',
          prop: 'yhnumber',
          rule: null
        },
        {
          name: '还款银行卡号',
          title: '请输入您的还款银行卡号',
          type: 'number',
          prop: 'yhnumber2',
          rule: null
        }
      ],
      rules: {
        name: {
          reg: /\S/
        },
        yhnumber: {
          reg: /^[0-9]{18}$/
        },
        yhnumber2: {
          reg: /^[0-9]{18}$/
        }
      },
      formData: {
        name: null,
        gender: null,
        birthday: null,
        region: null,
        idCard: null,
        cellNumber: null,
        verify: null,
        yhnumber: null,
        yhnumber2: null
      },
      ifType: ['birthday', 'gender', 'region'],
      actions: [
        {
          name: '男',
          method: () => {
            this.formData.gender = '男'
          }
        },
        {
          name: '女',
          method: () => {
            this.formData.gender = '女'
          }
        }
      ],
      idCardPng: [
        {
          name: '相册',
          method: () => {
            this.wxConfig()
            // this.formData.gender = '男'
          }
        },
        {
          name: '拍摄',
          method: () => {
            // this.formData.gender = '女'
          }
        }
      ],
      idCardVisible: false,
      sheetVisible: false,
      cityPupop: false,
      datepicker: false,
      checkType: false,
      config: null
    }
  },
  created () {
    this.getConfig()
  },
  methods: {
    getConfig() {
      getConfigData().then(res => {
        console.log(res.data)
        this.config = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    wxConfig () {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx6a6d99dc83602162', // 必填，公众号的唯一标识
        timestamp: this.$store.state.timestamp, // 必填，生成签名的时间戳
        nonceStr: this.$store.state.nonceStr, // 必填，生成签名的随机串
        signature: this.$store.state.signature, // 必填，签名
        jsApiList: [
          'token'
        ] // 必填，需要使用的JS接口列表
      })
      wx.ready((res) => {
        console.log(res)
      })
      wx.error((err) => {
        console.log(err)
      })
    },
    cleartxt (e) {
      this.formData[e] = null
    },
    /**
     * 打开日期选择（生日）
     */
    openPicker () {
      this.datepicker = true
      this.$refs.picker.open()
    },
    /**
     * 日期选择回调函数
     */
    handleConfirm (value) {
      console.log(value)
    },
    /**
     * 控制性别选择弹窗
     */
    genderActionsheet () {
      this.sheetVisible = true
    },
    /**
     * 控制地区选择
     */
    selectRegion (type) {
      this.cityPupop = type
    },
    /**
     * 控制身份证上传弹窗
     */
    uploadIdCard () {
      this.idCardVisible = true
    },
    /**
     * 控制选择同意《贷款用户协议》和隐私协议
     */
    checkedFunc () {
      this.checkType = !this.checkType
    },
    /**
     * 提交身份验证数据
     */
    submitFrom () {
      if (this.checkType) {
        this.$router.push({
          name: 'Lication',
          query: ''
        })
      }
    }

  }
}
</script>
<style scoped>
a {
  text-decoration: none !important;
}
/* .box {
  padding: 0 0.32rem;
} */
.box .box-h {
  box-sizing: border-box;
  font-size: 0.48rem;
  text-align: left;
  color: #333333;
  padding: 0.53rem 0.32rem 0.32rem 0.32rem;

}
.box .box-title {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  color: #999999;
  font-size: 0.347rem;
  text-align: left;
  padding: 0 0.32rem;
}
.box .row-box {
  width: 100%;
  box-sizing: border-box;
}
.row-box .basic-row {
  width: 100%;
  height: 1.147rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f4f4f4;
  line-height: 1.147rem;
  text-align: left;
  padding: 0 0.32rem;
}
.basic-row .basic-row-title {
  display: inline-block;
  padding-left: 0.56rem;
  position: relative;
  font-size: 0.427rem;
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
.row-box .mint-cell-box {
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
  background: none;
}
.verify-input {
  text-align: left;
}
.verify {
  color: #ffb933;
}
.idCard-row {
  box-sizing: border-box;
  padding: 0.753rem 0.32rem 1.333rem 0.32rem;
  display: flex;
  justify-content: space-between;
}
.idCard-img {
  width: 4.133rem;
  height: 2.51rem;
  border-radius: 15px;
}
.idCard-img img {
  width: 4.133rem;
  height: 2.51rem;
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
.mint-actionsheet {
  width: 98%;
  background: none;
}
.mint-actionsheet>>>.mint-actionsheet-list {
  border-radius: 7px;
  overflow: hidden;
}
.mint-actionsheet>>>.mint-actionsheet-button {
  border-radius: 7px;
  overflow: hidden;
}
.city-pupop-box {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}
@keyframes myfirst {
  0%   {bottom: -60%}
  100% {bottom: -0%}
}
@keyframes hidemyfirst {
  0%   {bottom: 0%}
  100% {bottom: -60%}
}
.city-pupop {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  animation: hidemyfirst 500ms;
  -moz-animation: hidemyfirst 500ms; /* Firefox */
  -webkit-animation: hidemyfirst 500ms; /* Safari and Chrome */
  -o-animation: hidemyfirst 500ms; /* Opera */
  bottom: -60%;
}
.showCity-pupop {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  animation: myfirst 500ms;
  -moz-animation: myfirst 500ms; /* Firefox */
  -webkit-animation: myfirst 500ms; /* Safari and Chrome */
  -o-animation: myfirst 500ms; /* Opera */
  bottom: 0%;
}
.city-title {
  box-sizing: border-box;
  height: 1.067rem;
  width: 100%;
  text-align: center;
  font-size: 0.43rem;
  color: #000;
  line-height: 1.067rem;
  border: 1px solid #dddddd;
  border-bottom: none;
  position: relative;
}
.close-btn {
  width: 0.453rem;
  height: 0.453rem;
  position: absolute;
  right: 0.133rem;
  top: 0;
  bottom: 0;
  margin: auto;
  background: url('./img/close_icon.png') no-repeat center;
  background-size: 100% 100%;
}
.row-box>>>.mint-cell:last-child,.row-box>>>.mint-cell-wrapper {
  background: none;
}
</style>
