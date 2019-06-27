/* eslint-disable */
var express = require('express')
var https = require('https')
// 引入cors
var cors = require('cors')
//  引入jwt-simple https://github.com/hokaccha/node-jwt-simple
var jwt = require('jwt-simple')
//  引入模块
var bodyParser = require('body-parser')

var app = express()
// 解决跨域
app.use(cors())
// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

const appID = 'wx6a6d99dc83602162'
const appSecret = '3b154028714a7120a44bd252fbe7d70a'

// 授权回调域名
let host = `http://25288o7y03.qicp.vip`
// 授权后重定向url地址 注意是编码后url，不编码#后面的参数会消失
let redirectUrl = encodeURIComponent(`${host}/wechat_login`)
// 微信授权url地址,点击授权后跳转到重定向地址并带上code参数
let authorizeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=` +
    `${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect`

// 前端请求该接口返回微信授权的地址
app.get('/get_wxauth', function (req, res) {
    res.json({
        status: 200,
        url: authorizeUrl
    })
})

// 微信授权回调的接口
app.get('/wechat_login', async function (req, res) {
    // 解析querystring获取URL中的code值
    const code = req.query.code
    // 通过拿到的code和appID、appSerect获取返回信息
    const result = await getAccessToken(code)
    // 解析得到access_token和openid
    const {
        access_token,
        openid
    } = result
    res.json({
        status: 200,
        data: result
    })
    // // 通过上一步获取的access_token和open_id获取userInfo即用户信息
    // const userInfo = await getUserInfo(access_token, openid)
    // // console.log(userInfo)
    // const token = createToken(userInfo.openid, userInfo.nickname)
    // const msg = 200
    // const redirectUrl = `http://25288o7y03.qicp.vip:57998/author?token=${token}&msg=${msg}`
    // res.writeHead(302, {
    //     'Location': redirectUrl
    // })
    // res.end()
})
app.get('/wechat_access_token', async function (req, res) {
    let { access_token, openid } = req.query
    const result = await getAccessToken2 ()
    res.json(result)
})
app.get('/wechat_userinfo', async function (req, res) {
    let { access_token, openid } = req.query
    const result = await getUserInfo(access_token, openid)
    res.json(result)
})
app.get('/getticket', async function (req, res) {
    let  access_token  = req.query.access_token
    const result = await getticket(access_token)
    res.json(result)
})
// 通过拿到的code和appID、app_serect获取access_token和open_id
function getAccessToken(code) {
    return new Promise((resolve, reject) => {
        const getAccessUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appID}&secret=${appSecret}&code=${code}&grant_type=authorization_code`
        https.get(getAccessUrl, (res) => {
            res.setEncoding('utf8') // 设置编码为 utf8
            let rawData = '' // 二进制原始数据
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                let result = JSON.parse(rawData)
                resolve(result)
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}
function getAccessToken2 () {
    return new Promise((resolve, reject) => {
        const getAccessTokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`
        https.get(getAccessTokenUrl, (res) => {
            res.setEncoding('utf8') // 设置编码为 utf8
            let rawData = '' // 二进制原始数据
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                let result = JSON.parse(rawData)
                resolve(result)
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}
// 通过上一步获取的access_token和open_id获取userInfo即用户信息
function getUserInfo(access_token, openid) {
    return new Promise((resolve, reject) => {
        const getUserUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`
        https.get(getUserUrl, (res) => {
            let rawData = ''
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                let result = JSON.parse(rawData)
                resolve(result)
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}
function getticket (access_token) {
    return new Promise((resolve, reject) => {
        const getTicketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
        https.get(getTicketUrl, (res) => {
            let rawData = ''
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                let userInfo = JSON.parse(rawData)
                resolve(userInfo)
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}
app.post('/get_user_info', function (req, res) {
    console.log(req.get('Authorization'))
    if(req.get('Authorization')){
        // const payload = parseToken(req.get('Authorization'))
        res.json(req.get('Authorization'))
    }else{
        res.send('缺少token')
    }
})

// 模拟生成用户token & 解析token
function createToken(openid,nickname) {
    const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7 // 7天过期时间
    const JWT_SECRET = 'weixin_token' // 秘钥
    // 需要加密的对象
    const payload = {
        openid: openid,
        username:nickname,
        environment: 'web',
        expires: Date.now() + tokenExpiresTime
    }
    // encode
    const token = jwt.encode(payload, JWT_SECRET)
    return token
}

function parseToken(token) {
    const JWT_SECRET = 'weixin_token' // 秘钥
    // decode
    var decoded = jwt.decode(token, JWT_SECRET)
    return decoded
}

// TODO 静默授权下判断用户是否关注过公众号
app.get('/test', async function (req, res) {
    const code = req.query.code
    if (code) {
        // code存在 直接验证
        const result = await getAccessToken(code)
        const {
            openid
        } = result
        // 获取公众号的access_token，此access_token不是用户授权后的access_token
        const retToken = await getToken(appID, appSecret)
        const {
            access_token
        } = retToken
        const subscribeInfo = await getSubscribeMsg(access_token, openid)
    } else {
        // 进行微信授权
        let callbackUrl = encodeURIComponent('http://25288o7y03.qicp.vip/test')
        let getCodeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=` +
            `${callbackUrl}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
        res.redirect(getCodeUrl)
    }
})

// 获取基础token，注意：获取公众号的access_token，此access_token不是用户授权后的access_token
// 文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183
function getToken(appid, appsecret) {
    return new Promise((resolve, reject) => {
        const get_token_url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`
        https.get(get_token_url, (res) => {
            res.setEncoding('utf8') // 设置编码为 utf8
            let rawData = '' // 原始数据
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                let jsonData = JSON.parse(rawData)
                resolve(jsonData)
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}
// 获取用户基本信息 判断是否关注该公众号
function getSubscribeMsg(access_token, openid) {
    return new Promise((resolve, reject) => {
        // 文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140839
        const get_subscribe_url = `https://api.weixin.qq.com/cgi-bin/user/info?access_token=${access_token}&openid=${openid}&lang=zh_CN`
        https.get(get_subscribe_url, (res) => {
            res.setEncoding('utf8') // 设置编码为 utf8
            let rawData = '' // 原始数据
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                let jsonData = JSON.parse(rawData)
                resolve(jsonData)
            })
        }).on('error', (err) => {
            reject(err)
        })
    })
}

app.listen(1122, () => console.log('server listening is running at http://localhost:1122'))
