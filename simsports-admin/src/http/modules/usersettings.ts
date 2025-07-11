//usersettings接口统一管理
import service from "../index";
// import qs from "qs";

// user--avatar--->>category: ""--->头像类型-default：默认
// 列出头像
export const getAdminAvatarSelectionLibrarys = async (params: any) =>
	await service({
		url: "/admin/avatar-selection-library",
		method: "get",
		params: params,
	});

// 列出单个头像
export const getAdminAvatarSelectionLibrary = async (id: any) =>
	await service({
		url: `/admin/avatar-selection-library/${id}`,
		method: "get",
	});

// 创建头像
export const postAdminAvatarSelectionLibrary = async (data: any) =>
	await service({
		url: "/admin/avatar-selection-library",
		method: "post",
		data: data,
	});

// 更新头像
export const putAdminAvatarSelectionLibrary = async (id: any, data: any) =>
	await service({
		url: `/admin/avatar-selection-library/${id}`,
		method: "put",
		data: data, // 更新的数据放在请求体中
	});

// 删除头像
export const deleteAdminAvatarSelectionLibrary = async (id: any) =>
	await service({
		url: `/admin/avatar-selection-library/${id}`,
		method: "delete",
	});
