<template>
  <div class="box">
    <div class="row-box">
      <div class="row-item" @click.stop="uploadIdCard">
        <mt-cell title="头像" is-link></mt-cell>
      </div>
      <div class="row-item">
        <mt-field label="昵称" placeholder="请输入昵称"></mt-field>
      </div>
      <div class="row-item">
        <mt-field label="手机号码" placeholder="请输入手机号"></mt-field>
      </div>
      <div class="row-item">
        <div class="validaCode-box">
          <input type="text" placeholder="请输入验证码">
          <span class="validaCode-btn">发送验证码</span>
        </div>
      </div>
    </div>
    <div class="btn">保存</div>
    <mt-actionsheet :actions="idCardPng" v-model="idCardVisible" :closeOnClickModal="false"></mt-actionsheet>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk'
// import { getToken } from '@/api/api'
export default {
  name: 'PersonalData',
  data () {
    return {
      idCardPng: [
        {
          name: '相册',
          method: () => {
            wx.config({
              debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
              appId: 'wx6a6d99dc83602162', // 必填，公众号的唯一标识
              timestamp: '7200', // 必填，生成签名的时间戳
              nonceStr: '', // 必填，生成签名的随机串
              signature: '', // 必填，签名，见附录1
              jsApiList: [] // 必填，需要使用的JS接口列表
            })
          }
        },
        {
          name: '拍摄',
          method: () => {
            // this.formData.gender = '女'
          }
        }
      ],
      idCardVisible: false
    }
  },
  created () {},
  methods: {
    loadGetToken () {
      // getToken({
      //   grant_type: 'authorization_code',
      //   appid: 'wx6a6d99dc83602162',
      //   secret: '3b154028714a7120a44bd252fbe7d70a',
      //   code: '0718JRUD0QcPgj2c4SVD0tvVUD08JRUW'
      // }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      this.$axios.get('/api/sns/oauth2/access_token', {
        params: {
          grant_type: 'authorization_code',
          appid: 'wx6a6d99dc83602162',
          secret: '3b154028714a7120a44bd252fbe7d70a',
          code: '021SkU1q16jLNi0Eok2q1QBY1q1SkU1P'
        }
      }).then(res => {
        console.log(res)
      })
    },
    uploadIdCard () {
      console.log(11)
      this.idCardVisible = true
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
}

.row-box {
  width: 100%;
  background: #ffffff;
  border-radius: 7px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  /* padding: 0 0.32rem; */
}
.row-box .row-item {
  border-bottom: 1px solid #f4f4f4;
  padding: 0.2rem;
}
.row-box >>> .mint-cell-title {
  text-align: left;
  font-size: 0.42rem;
  color: #000;
}

.row-box >>> .mint-cell-wrapper {
  background: none;
}
.row-box >>> .mint-cell:last-child {
  background: none;
}
.row-box >>> .mint-cell-allow-right::after{
  width: 0.25rem;
  height: 0.25rem;
}
.row-box >>> .mint-cell-value.is-link {
  margin-right: 0.5rem;
}
.row-box >>> .mint-cell-title {
  font-size: 0.373rem;
  color: #000;
  font-weight: 500;
  width: auto;
}
.row-box >>> .mint-field-core {
  font-size: 0.373rem;
  text-align: right;
  padding-right: 0.133rem;
  color: #000;
  box-sizing: border-box;
  background: none;
}
.validaCode-box {
  width: 100%;
  padding: 0.3rem 0;
  display: flex;
  justify-content: start;
  position: relative;
}
.validaCode-box input {
  outline: none;
  width: 70%;
  font-size: 0.36rem;
  border: none;
}
.validaCode-box .validaCode-btn {
  font-size: 0.373rem;
  color: #fec603;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0,-50%);
}
.btn {
  width: 7.16rem;
  height: 1.027rem;
  border-radius: 7px;
  font-size: 0.48rem;
  background: #ffb831;
  color: #ffffff;
  display: inline-block;
  line-height: 1.027rem;
  margin: 0.2rem 0;
}
</style>
