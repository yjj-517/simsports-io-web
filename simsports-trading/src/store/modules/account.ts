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
import { ethers } from "ethers"; //ethers
export const accountStores = create(
	persist<any>(
		set => ({
			userState: false, //登录成功信息
			token: "", //user-token
			userInfo: {
				address: "", //账号
				agree_status: 1, //未同意协议/1未/2同意
				wallet_type: 0, //绑定钱包类型/0未绑定/1particle/5Metamask/10WalletConnect或其他钱包
				avatar: "", //头像地址
				avatarImg: "", //处理后的头像地址
				dunkPrice: "0", //dunk 余额,
			}, //用户信息
			// 修改登录状态信息
			setUserState: (state: boolean) => set({ userState: state }),
			// 登录成功存储用户信息
			addUser: (user: any, userToken: any) => {
				set((state: any) => ({
					userState: true, //登录成功
					userInfo: {
						...state.userInfo,
						...user, //登录用户信息
						avatarImg: import.meta.env.VITE_BASE_DOWNLOAD + "/" + user.avatar,
						dunkPrice: Number(ethers.formatUnits(user.dunk_amount, 6)), //dunk 余额,
					},
					token: "Bearer " + userToken, //登录用户信息
				}));
			},
			// 重新获取用户信息
			editUser: (user: any) => {
				set((state: any) => ({
					userInfo: {
						...state.userInfo,
						...user, //登录用户信息
						avatarImg: import.meta.env.VITE_BASE_DOWNLOAD + "/" + user.avatar,
						dunkPrice: Number(ethers.formatUnits(user.dunk_amount, 6)), //dunk 余额,
					},
				}));
			},
			// 退出删除用户信息
			delUser: () => {
				set((state: any) => ({
					token: "", //清空token
					userState: false, // 登出状态
					userInfo: {
						...state.userInfo,
						address: "", //账号
						agree_status: 1, //未同意协议/1未/2同意
						wallet_type: 0, //绑定钱包类型/0未绑定/1particle/5Metamask/10WalletConnect或其他钱包
						avatar: "", //头像地址
						avatarImg: "", //处理后的头像地址
					}, // 将 userInfo 设置为空对象
				}));
			},
		}),
		{
			name: "account", // 存储的键名
			storage: createJSONStorage(() => sessionStorage), // 使用 sessionStorage 作为存储介质
		},
	),
);
