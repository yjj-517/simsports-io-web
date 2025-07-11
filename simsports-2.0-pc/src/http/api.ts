//api接口统一管理
import service from "./index.js";
// import qs from "qs";

// 邮箱验证
export const postEmail = async (data: any) =>
	await service({
		url: "/api/v1/pub/auth/sendmail",
		method: "post",
		data: data,
	});

// 注册
export const postRegister = async (data: any) =>
	await service({
		url: "/api/v1/pub/auth/register",
		method: "post",
		data: data,
	});

// 登录
export const postLogin = async (data: any) =>
	await service({
		url: "/api/v1/pub/auth/login",
		method: "post",
		data: data,
	});

// 修改密码
export const putPwd = async (data: any) =>
	await service({
		url: "/api/v1/pub/reset_pwd",
		method: "put",
		data: data,
	});

// 为用户添加钱包
export const postAddr = async (data: any) =>
	await service({
		url: "/api/v1/users/addr",
		method: "post",
		data: data,
	});

// 查询nftMint合约详情
export const getSplayer = async (params: any) =>
	await service({
		url: "/api/v1/pub/splayer/" + params,
		method: "get",
	});

// 获取nft个人白名单信息
export const getWhitelist = async (params: any) =>
	await service({
		url: "/api/v1/pub/users/whitelist",
		method: "get",
		params: params,
	});

// 获取账户NFT-tokenid
export const getTokenIds = async (params: any) =>
	await service({
		url: "/api/v1/pub/splayer/token_ids/" + params,
		method: "get",
	});

// 通过tokenId 查询nft详情
export const getNftDetail = async (params: any) =>
	await service({
		url: "/api/v1/pub/splayer/detail",
		method: "get",
		params: params,
	});

// 获取个人NFT交易记录
export const getTxRecords = async (params: any) =>
	await service({
		url: "/api/v1/users/tx_records",
		method: "get",
		params: params,
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
