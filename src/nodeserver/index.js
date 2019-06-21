// 引入express
const express = require('express')
const sha1 = require('sha1')
const app = express()
const { writeFile } = require('fs');
const config = {
  token: 'lilubingWechat123',
  appID: 'wx6a6d99dc83602162',
  appsecret: '3b154028714a7120a44bd252fbe7d70a',
  url: 'http://25288o7y03.qicp.vip:57998'
}
app.use((req, res, next) => {
  // { signature: '706d26dbfe1e55e99128c385ae1ff9e2dcbf5d00',
  // echostr: '8456452181151702011',
  // timestamp: '1561084592',
  // nonce: '1136854347' }
  console.log(req.query)
  const { signature, echostr, timestamp, nonce } = req.query
  const { token } = config
  const arr = [ timestamp, nonce, token ]
  const arrSort = arr.sort()
  const str = arr.join('')
  const sha1Str = sha1(str)
  // 验证
  if (sha1Str === signature) {
    // 一样为微信
    let configStr = saveConfig({ signature, echostr, timestamp, nonce })
    writeFile('../../static/configData.txt', configStr, ( err ) => {
      if(err) {
        console.error(err)
      } else {
        console.log('写入成功')  
      }
    })
    res.send(echostr)
  } else {
    res.send('error')
  }
})
function saveConfig (configObj) {
  return JSON.stringify(configObj)
}
app.listen(1122, '192.168.100.5', () => {
  console.log('运行成功')
})
