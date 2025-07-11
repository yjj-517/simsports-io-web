//swiper接口统一管理
import service from "../index";
// import qs from "qs";

// 列出轮播图配置
export const getAdminRawConfigs = async () =>
	await service({
		url: "/admin/raw-configs",
		method: "get",
	});

// 列出单个轮播图配置
export const getAdminRawConfig = async (id: any) =>
	await service({
		url: `/admin/raw-config/${id}`,
		method: "get",
	});

// 创建单个轮播图配置
export const postAdminRawConfig = async (data: any) =>
	await service({
		url: "/admin/raw-config",
		method: "post",
		data: data,
	});

// 更新单个轮播图配置
export const putAdminRawConfig = async (id: any, data: any) =>
	await service({
		url: `/admin/raw-config/${id}`,
		method: "put",
		data: data, // 更新的数据放在请求体中
	});

// 删除头像
export const deleteRawConfig = async (id: any) =>
	await service({
		url: `/admin/raw-config/${id}`,
		method: "delete",
	});
