const axios = require('axios')
var appId = 'wx6a6d99dc83602162'
var secret = '3b154028714a7120a44bd252fbe7d70a'
module.exports = {
  getAccessToken (req, res, next) {
    // let config = {
    //   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: 'wx6a6d99dc83602162', // 必填，公众号的唯一标识
    //   timestamp: '1560342506', // 必填，生成签名的时间戳
    //   nonceStr: '11111', // 必填，生成签名的随机串
    //   signature: '11111', // 必填，签名
    //   jsApiList: [
    //     'token'
    //   ] // 必填，需要使用的JS接口列表
    // }
    let url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + appId + '&secret=' + secret + '&code=CODE&grant_type=authorization_code'
    axios.get(url).then(token => {
      let accessToken = token
      axios.get('https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=' + appId + '&refresh_token=' + accessToken + '&grant_type=refresh_token').then(res => {
        console.log(res)
      })
    })
  }
}
