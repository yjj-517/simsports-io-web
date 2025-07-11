//api接口统一管理
import service from "../index";
// import qs from "qs";

// 上传文件/图片/视频地址
export const upFilesUpload = async (data: any) =>
	await service({
		url: "/user/files-upload",
		method: "post",
		data: data,
		timeout: 20000, // request timeout
		headers: {
			"Content-Type": "multipart/form-data", //请求头
		},
	});
// 获取首页实时参数
export const postPagedata = async () =>
	await service({
		url: "/page-data",
		method: "get",
	});
