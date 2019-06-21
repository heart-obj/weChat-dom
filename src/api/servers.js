import request from '@/api/request'
export function getToken (params) {
  return request({
    methods: 'get',
    url: '/api/sns/oauth2/access_token',
    params
  })
}
export function getConfigData (params) {
  return request({
    methods: 'get',
    url: 'static/configData.txt',
    params
  })
}
