// 引入express
const express = require('express')
const sha1 = require('sha1')
const app = express()
const config = {
  token: 'lilubingWechat123',
  appID: 'wx6a6d99dc83602162',
  appsecret: '3b154028714a7120a44bd252fbe7d70a',
  url: 'http://5a3a278a.ngrok.io'
}
app.use((req, res, next) => {
  // { signature: 'eb3b1f5c4668446fb035c0295556008b768f8742',
  // echostr: '6740432594573180413',
  // timestamp: '1560254717',
  // nonce: '1514137865' }
  console.log(req.query)
  // const { signature, echostr, timestamp, nonce } = req.query
  // const { token } = config
  // const arr = [ timestamp, nonce, token ]
  // // const arrSort = arr.sort()
  // const str = arr.join('')
  // const sha1Str = sha1(str)
  // // 验证
  // if (sha1Str === signature) {
  //   // 一样为微信
  //   res.send(echostr)
  // } else {
  //   res.send('error')
  // }
})
app.listen(1234, () => {
  console.log('运行成功')
})
console.log('运行成功')
