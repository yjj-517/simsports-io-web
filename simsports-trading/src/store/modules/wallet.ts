import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; //本地储存

export const walletStores = create(
	persist<any>(
		set => ({
			// 钱包信息
			walletIfon: {
				address: "", //钱包账户
				balance: "0", //余额
				chainId: "", //chainId
				currency: "", //币种
			}, //钱包信息
			walletState: false, //钱包连接成功
			// 连接钱包成功存储钱包
			addWallet: (wallet: any) => {
				set((state: any) => ({
					walletState: true, //登录成功
					walletIfon: {
						...state.walletIfon,
						...wallet,
					}, //钱包信息
				}));
			},
			// 断开钱包连接
			delWallet: () => {
				set((state: any) => ({
					walletState: false, //钱包断开连接
					walletIfon: {
						...state.walletIfon,
						address: "", //钱包账户
						balance: "0", //余额
						chainId: "", //chainId
						currency: "", //币种
					}, // 将 walletIfon 设置为空对象
				}));
			},
			// 签名状态
			walletSignType: 0, //1-绑定钱包/2-解绑钱包
			// 修改数据
			// 签名状态
			setWalletSignType: (type: number) => {
				set({ walletSignType: type });
			},
		}),
		{
			name: "wallet", // 存储的键名
			storage: createJSONStorage(() => sessionStorage), // 使用 sessionStorage 作为存储介质
		},
	),
);

const getInitialWalletList = () => {
	// 从 localStorage 中读取数据，如果没有则返回空数组
	const storedWalletHistory = JSON.parse(localStorage.getItem("walletConnectHistory")!) || "";
	return {
		walletHistory: storedWalletHistory,
	};
};
export const walletConnectHistoryStores = create(
	persist<any>(
		set => ({
			...getInitialWalletList(),
			setWalletHistory: (newWallet: string) => {
				set(() => ({
					walletHistory: newWallet,
				}));
			},
		}),
		{
			name: "walletConnectHistory", // 存储的键名
			storage: createJSONStorage(() => localStorage), // 使用 localStorage 作为存储介质
		},
	),
);
