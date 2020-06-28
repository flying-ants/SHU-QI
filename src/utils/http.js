// utils此文件夹封装公共东西

//封装axios
// 在src新建文件utils/https.js文件

import axios from 'axios'
// 1生成一个axios 的实例

const http = axios.create();

// 2.设置http的一些默认项
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com/' : 'http://localhost:9000/';
http.defaults.timeout = 10000

// 3.做响应拦截
http.interceptors.response.use(response => {
    return response.data;
})

// 将实例暴露出去
export default http