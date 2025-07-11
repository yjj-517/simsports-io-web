import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; //本地储存
/*
name：一个字符串，必传项，该store的唯一id。
persist-options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等。
*/
/*
set 函数： 用于更新状态。
get 函数： 用于获取当前状态。
*/

export const accountStores = create(
	persist<any>(
		set => ({
			userState: false, //登录成功信息
			// TOKEN
			tokenInfo: {
				expire: "",
				token: "",
			},
			userInfo: {
				nickname: "", //账号
			}, //用户信息
			// 登录成功存储用户信息
			addUser: (tokenInfo: any, userInfo: any) => {
				set((state: any) => ({
					userState: true, //登录成功
					tokenInfo: {
						...state.tokenInfo,
						...tokenInfo,
						token: "Bearer " + tokenInfo.token,
					},
					userInfo: {
						...state.userInfo,
						...userInfo, //登录用户信息
					},
				}));
			},
			// 退出删除用户信息
			delUser: () => {
				set((state: any) => ({
					tokenInfo: {
						expire: "",
						token: "",
					}, //清空token
					userState: false, // 登出状态
					userInfo: {
						...state.userInfo,
						nickname: "", //账号
					}, // 将 userInfo 设置为空对象
				}));
			},
		}),
		{
			name: "sim-account", // 存储的键名
			storage: createJSONStorage(() => sessionStorage), // 使用 sessionStorage 作为存储介质
		},
	),
);
