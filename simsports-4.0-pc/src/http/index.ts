// // 接口调用
import axios from "axios";
// import { useStores } from "@/store/index"; //store
// import { ElMessage } from "element-plus";
const service = axios.create({
	baseURL: "/api", // api 的 base_url
	timeout: 5000, // request timeout
	headers: {
		"Content-Type": "application/json; charset=utf-8", //请求头
	},
});

// 请求拦截
service.interceptors.request.use(
	(config: any) => {
		// const useStore = useStores();
		// if (useStore.userState) {
		// 	// 如果登录就携带token
		// 	config.headers["Authorization"] = useStore.userIfon.access_token;
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
		// 对响应数据做点什么
		const res = response.data;
		if (res.code === 401) {
			// `token` 过期或者账号已在别处登录
			// const useStore = useStores();
			// useStore.delUser(); // 存储用户信息
			// ElMessage.error({
			// 	message: "The login session has timed out due to inactivity and the token has expired.",
			// });
			window.location.href = "/user/welcome"; // 去登录页
		} else {
			return response.data;
		}
	},
	error => {
		// 对响应错误做点什么
		// if (error.message.indexOf("timeout") != -1) {
		// 	ElMessage.error("Network Timeout");
		// } else if (error.message == "Network Error") {
		// 	ElMessage.error("Network connection error");
		// } else {
		// 	if (error.response.data) ElMessage.error(error.response.statusText);
		// 	else ElMessage.error("Interface path not found");
		// }
		return Promise.reject(error);
	},
);
export default service;
