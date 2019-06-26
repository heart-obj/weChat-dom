import request from '@/api/request'
export function get_wxauth (params) {
  return request({
    method: 'get',
    url: '/get_wxauth',
    params
  })
}
export function wechat_login (params) {
  return request({
    method: 'get',
    url: '/wechat_login',
    params
  })
}
export function wechat_userinfo (params) {
  return request({
    method: 'get',
    url: '/wechat_userinfo',
    params
  })
}
// https://api.weixin.qq.com/cgi-bin/ticket/getticket
export function getticket (params) {
  return request({
    method: 'get',
    url: '/getticket',
    params
  })
}
export function getToken (params) {
  return request({
    method: 'get',
    url: '/wechat_access_token',
    params
  })
}
export function getConfigData (params) {
  return request({
    method: 'get',
    url: 'static/configData.txt',
    params
  })
}
