import axios from 'axios'
import Qs from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000, // 请求超时时间
  // headers: { 'uid': 1, 'Content-Type': 'application/x-www-form-urlencoded' },
  headers: {}
  // transformRequest: [function(data) {
  //     data = Qs.stringify(data)
  //     return data
  // }]
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.formdata) {
      config.transformRequest = [function (data) {
        data = Qs.stringify(data)
        return data
      }]
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    /* config.headers['X-Token'] = store.getters.token // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers['uid'] = 1
    if (store.getters.token) {
        config.headers['X-Token'] = this.$store.state.user.token // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers['uid'] = this.$store.state.user.uid
    } */
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 200) {
      console.log({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法的token 50012:其他客户端登录了  50014:Token 过期了
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {}
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log(error.response) // for debug
    var msg = '网络出现问题'
    if (error.response && error.response.data && error.response.data.message) {
      msg = error.response.data.message
      console.log(msg)
    }
    return Promise.reject(error)
  }
)
export default service
