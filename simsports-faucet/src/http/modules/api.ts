//api接口统一管理
import service from "../index";
// import qs from "qs";

// 获取eth
export const postRequestEth = async (data: any) =>
	await service({
		url: "/request/eth",
		method: "post",
		data: data,
	});
