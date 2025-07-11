//layout接口统一管理
import service from "../index";

// 搜索详情列表
export const getAssetCollections = async (params: any) =>
	await service({
		url: "/asset/search",
		method: "get",
		params: params,
	});
