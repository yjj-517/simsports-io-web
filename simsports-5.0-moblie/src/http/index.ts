// // 接口调用
import axios from "axios";

import { Toast } from "antd-mobile";

const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_API, // api 的 base_url
	timeout: 10000, // request timeout
	headers: {
		"Content-Type": "application/json; charset=utf-8", //请求头
	},
});

// 请求拦截
service.interceptors.request.use(
	(config: any) => {
		// if (token) {
		// 	// 如果登录就携带token
		// 	config.headers["Authorization"] = token;
		// }
		// console.log("config-->", config);
		return config;
	},
	(error: any) => {
		// console.log("error-->", error);
		return Promise.reject(error);
	},
);

// 响应拦截器
service.interceptors.response.use(
	response => {
		// console.log("response=>", response);
		// 对响应数据做点什么
		const res = response.data;

		if (res.code === 401) {
			// `token` 过期或者账号已在别处登录
			window.location.href = "/"; // 去主页
		} else {
			return response.data;
		}
	},
	error => {
		// console.log("error-->", error);
		// 对响应错误做点什么
		if (error.message.indexOf("timeout") != -1) {
			Toast.show({
				content: "Network Timeout",
				position: "top",
			});
		} else if (error.response.status === 401) {
			// `token` 过期或者账号已在别处登录
			Toast.show({
				content: "Login status is invalid, please log in again!",
				position: "top",
			});
			window.location.href = "/"; // 去主页
		} else {
			Toast.show({
				content: "Unknown Error. Please check your network.",
				position: "top",
			});
		}

		return Promise.reject(error);
	},
);
export default service;
