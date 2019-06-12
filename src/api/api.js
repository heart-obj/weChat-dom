import request from '@/api/request'
export function getToken (params) {
  return request({
    methods: 'get',
    url: '/www/sns/oauth2/access_token',
    params
  })
}
