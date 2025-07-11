import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware"; //本地储存
/*
name：一个字符串，必传项，该store的唯一id。
persist-options：一个对象，store的配置项，比如配置store内的数据，修改数据的方法等等。
*/
/*
set 函数： 用于更新状态。
get 函数： 用于获取当前状态。
*/

export const layoutStores = create<any>()(set => ({
	drawerMenuState: false, //menu-drawer-展开
	setDrawerMenuState: (state: boolean) => set({ drawerMenuState: state }),
	layoutMenuState: true, //menu-内容展开
	setLayoutMenuState: (state: boolean) => set({ layoutMenuState: state }),
	// 钱包弹窗
	walletConnectDialog: false, // 钱包连接弹窗
	setWalletConnectDialog: (state: boolean) => set({ walletConnectDialog: state }),
	userAgreementDialog: false, // 用户协议弹窗
	// 用户协议弹窗
	setUserAgreementDialog: (state: boolean) => set({ userAgreementDialog: state }),
}));
export const osStores = create<any>()(set => ({
	os: "", //当时设备
	setOs: (os: string) => set({ os: os }),
}));
