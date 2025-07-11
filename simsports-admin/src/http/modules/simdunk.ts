//simdunk接口统一管理
import service from "../index";
// import qs from "qs";

// 列出players配置
export const getAdminPlayers = async (params: any) =>
	await service({
		url: "/admin/players",
		method: "get",
		params: params,
	});

// 列出单个player配置
export const getAdminPlayer = async (id: any) =>
	await service({
		url: `/admin/player/${id}`,
		method: "get",
	});

// 创建单个player
export const postAdminPlayer = async (data: any) =>
	await service({
		url: "/admin/player",
		method: "post",
		data: data,
	});

// 更新单个player信息
export const putAdminPlayer = async (id: any, data: any) =>
	await service({
		url: `/admin/player/${id}`,
		method: "put",
		data: data, // 更新的数据放在请求体中
	});

// 删除单个player
export const deleteAdminPlayer = async (id: any) =>
	await service({
		url: `/admin/player/${id}`,
		method: "delete",
	});
