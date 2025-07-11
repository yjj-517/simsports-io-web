// event接口统一管理
import service from "../index";

//报名活动接口
export const postEventSubmitForm = async (data: any) =>
	await service({
		url: "/event/submit-form",
		method: "post",
		data: data,
	});

//活动报名结果
export const getListForm = async (params: any) =>
	await service({
		url: "/event/list-form",
		method: "get",
		params: params,
	});
//获胜结果list（不需要登录）
export const getEinnerList = async (params: any) =>
	await service({
		url: "/winner/list",
		method: "get",
		params: params,
	});
