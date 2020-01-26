import axios from 'axios'

export function request(config) {
  // 创建实例
  const instance = axios.create({
    baseURI: '',
    timeout: 5000
  })

  // 2 拦截器：请求成功/失败或者响应成功/失败的处理

  // 2.1 发送请求地址请求
  instance.interceptors.request.use(req => {
    // 作用：请求时画面中显示一个圆圈
    // 作用：判断是否登陆
    return req
  }, err => {
    console.log('请求失败');
  })

  // 2.2 响应请求
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log('响应失败');
  })
  
  // 3 发送真正的网络请求
  return instance(config)
}