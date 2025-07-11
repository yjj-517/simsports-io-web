//api接口统一管理
import service from "../index";
// import qs from "qs";

// 上传文件/图片/视频地址
export const postAdminFilesUpload = async (data: any) =>
	await service({
		url: "/admin/files-upload",
		method: "post",
		data: data,
		timeout: 300000, // request timeout
		headers: {
			"Content-Type": "multipart/form-data", //请求头
		},
	});
