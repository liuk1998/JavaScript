/**
 * 接口请求的方法(第一版)
 */
import axios from "/node_modules/axios";
import * as qs from '/node_modules/qs';

const AXIOS_DEFAULT_CONFIG1 = {
  baseURL: location.origin, // ? 自动加在 `url` 前面, 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  timeout: 20000 // ? 指定请求超时的毫秒数, 如果请求话费了超过 `timeout` 的时间，请求将被中断
};
const AXIOS_DEFAULT_CONFIG2 = {
  baseURL: 'http://36.152.147.166:18080', // location.origin
  timeout: 20000,
  headers: {  // ? 是即将被发送的自定义请求头
    'Content-Type': 'application/json'
  }
};

const httpMap = [
  axios.create(AXIOS_DEFAULT_CONFIG1), // ? 新建一个 axios 实例
  axios.create(AXIOS_DEFAULT_CONFIG2),
];

httpMap.map((http) => {
  // ? 添加响应拦截器, 指的是请求发送给服务器之前的时候。(用于加密等)
  http.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });
  // ? 添加响应拦截器, 指的是请求发送给服务器之后返回的时候。(处理返回数据)
  http.interceptors.response.use((response) => {
    let res;
    if(response.status === 200) res = response.data;
    return res;
  });
});

export const A = (params) => {
  return httpMap[0].get('' + qs.stringify(params));
};
export const B = (params) => {
  return httpMap[1].post('' + qs.stringify(params));
};


B({}).then((res) => {
  console.log('dsasdsdsaddsadsad', res);
}).catch((err) => {
  console.error(err);
})