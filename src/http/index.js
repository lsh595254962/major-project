import axios from 'axios'
import qs from 'qs'
import { baseURL } from '../utils/config'
axios.defaults.baseURL = baseURL
// 响应时间
axios.defaults.timeout = 10000
// post请求头的设置
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
// 验证token是否失效 isRefreshing防止重复提交导致页面卡死
// let isRefreshing = true
// function checkStatus () {
//   if (isRefreshing) {
//     refreshTokenRequst()
//     isRefreshing = false
//   }
// }
// 重新请求token
// function refreshTokenRequst () {
//   const query = Qs.stringify({ grant_type: 'password' })
//   getToken(query)
//     .then(res => {
//       const expires = res['.expires']
//       localStorage.setItem('token', res.access_token)
//       localStorage.setItem('expires', expires)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // const expires = localStorage.getItem('expires')
    // const nowTime = new Date().getTime()
    // const endTime = new Date(expires).getTime()
    // if (nowTime >= endTime) {
    //   if (localStorage.getItem('username')) {
    //     store.commit('setUsername', '')
    //     localStorage.removeItem('username')
    //     Message.error('您的登录已超时，请重新登录...')
    //   } else {
    //     checkStatus()
    //   }
    // }
    const token = localStorage.getItem('token')
    config.headers.Authorization = 'bearer ' + token
    return config
  },
  error => {
    return Promise.error(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error.response)
  }
)
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
export function post (url, params) {
  return new Promise((resolve, reject) => {
    console.log(params)
    axios
      .post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
