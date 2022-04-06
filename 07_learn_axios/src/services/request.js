import axios from 'axios';

const instance = axios.create({
  baseURL: "https://httpbin.org",
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
})

export default instance;