import request from '@/api/request'
export function getToken (params) {
  return request({
    methods: 'get',
    url: '/api/cgi-bin/token',
    params
  })
}
