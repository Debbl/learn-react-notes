import axios from 'axios';

const instance = axios.create({
  baseURL: "https://httpbin.org",
  timeout: 500,
})

instance.interceptors.request.use((config) => {
  // 1. 网络请求时可是加载 loading 组件
  // 2. 携带 token, 没有 token 跳转到登录页面
  // 3. params 可以实现序列化的操作
  return config;
}, (error) => {

});

instance.interceptors.response.use((res) => {
  return res.data;
}, (error) => {
  if (error && error.response) {
    switch(error.response.status) {
      case 400:
        console.log("请求错误");
        break;
      default:
        console.log("默认");
    }
  }
})

export default instance;
