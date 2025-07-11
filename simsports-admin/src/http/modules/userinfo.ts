//userinfo接口统一管理
import service from "../index";
// import qs from "qs";

// 分页用户查询，支持地址查询
export const getAdminUserPage = async (params: any) =>
	await service({
		url: "/admin/user/page",
		method: "get",
		params: params,
	});
