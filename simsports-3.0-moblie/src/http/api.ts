//api接口统一管理
import service from "./index.js";
// import qs from "qs";

// 查询nftMint合约详情
export const getSplayer = async (params: any) =>
	await service({
		url: "/api/v1/pub/splayer/" + params,
		method: "get",
	});

//以post请求为例
// export const postLogin = (data: any) =>
// 	service({
// 		url: "/api/v1/pub/auth/login", //直接放地址即可。
// 		method: "post",
// 		headers: {
// 			"Content-Type": "application/json; charset=utf-8", //请求头
// 			Authorization: 123, //token
// 		},
// 		data: data,
//    params: qs.stringify(params),
// 	});
