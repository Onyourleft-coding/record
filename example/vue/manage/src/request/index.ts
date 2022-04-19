import axios from 'axios';
import { manageLogin } from '@/api/login';

const baseURL = 'http://localhost:1105';

axios.defaults.withCredentials = true;

const whileList: any = [];

const service = axios.create({
  baseURL,
  timeout: 20 * 1000,
  headers: {
    'Content-Type': 'application/json',
    // 'Content-type': 'application/x-www-form-urlencoded'
  },
});

service.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token');
    // 请求头携带token
    config.headers.token = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response) => {
    const url = response.config.url;
    const res = response.data;
    console.log('res', res);

    if (response.status !== 200) {
      console.log('服务器异常，请稍后再试');
      return;
    }
    // 如果url是白名单里的，返回整个res
    if (whileList.includes(url)) {
      return res;
    }
    // 如果有以下错误码
    if ([450, 520, 9797].includes(res.code)) {
      localStorage.removeItem('token');
      manageLogin();
      return;
    } else if (res.code !== 0) {
      console.log('这里的请求发生错误了');
      return Promise.reject(new Error(res.msg || 'Error'));
    } else if (!res.data && !res.list) {
      //如果没有返回data和list，重写返回success
      return { success: true };
    }
    return res.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
