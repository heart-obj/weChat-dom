<template>
  <div class="hello">登录授权。。。 <span @click="openFunc">去首页</span></div>
</template>
<script>
import sha1 from 'sha1'
import { get_wxauth, wechat_login, wechat_userinfo, getticket, getToken } from '@/api/servers'
export default {
  name: 'Login',
  data () {
    return {
      token: null
    }
  },
  created () {
    this.initHrefFunc()
  },
  methods: {
    initHrefFunc () {
      let code = window.location.search.substr(1).match(this.regExpFunc('code'))
      if (!code) {
        get_wxauth().then(res => {
          window.location.href = res.data.url 
        })
      } else {
        this.getwechat_login(code[2])
      }
    },
    getwechat_login (code) {
      wechat_login({
        code: code
      }).then(res => {
        let nonceStr = this.randomWord (true, 10, 24)
        getToken().then(res => {
          this.token = res.data.access_token
          window.localStorage.setItem('token', res.data.access_token)
          this.$store.commit('token', res.data.access_token)
          getticket({
            access_token: res.data.access_token 
          }).then(res => {
            console.log(res.data.ticket)
            let getUrl = window.location.href.split('#')[0]
            let timestamp = (Date.parse(new Date()) - 3000) / 1000
            let str = `jsapi_ticket=${res.data.ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${getUrl}`
            this.$store.commit('signature', sha1(str))
            this.$store.commit('timestamp', timestamp)
          })
        })
       
        this.$store.commit('nonceStr', nonceStr)
        wechat_userinfo({
          access_token: res.data.data.access_token,
          openid: res.data.data.openid
        }).then(res => {
          console.log(res)
        })
      })
    },
    regExpFunc (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      return reg
    },
    /*
    ** randomWord 产生任意长度随机字母数字组合
    ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
    ** xuanfeng 2014-08-28
    */
    randomWord (randomFlag, min, max) {
      let str = "",
          range = min,
          arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
      // 随机产生
      if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
      }
      for(var i=0; i<range; i++){
        let pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
      }
      return str;
    },
    openFunc () {
      this.$router.push({
        name: 'LoanApplication',
        query: {
          token: this.token
        }
      })
    }
  }
}
</script>
<style scoped>

</style>
