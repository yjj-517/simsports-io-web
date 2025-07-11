//lgoin接口统一管理
import service from "../index";
// import qs from "qs";

// 登录
export const postAdminLogin = async (data: any) =>
	await service({
		url: "/auth/admin/login",
		method: "post",
		data: data,
	});
