import { defineStore } from "pinia";
export const useStores = defineStore("user", {
	state: () => {
		return {
			userIfon: {
				account: "", //用户
				access_token: "", //token
				token_type: "", //token类型
				user_id: "", //用户id
			}, //用户信息
			userState: false, //登录成功信息
			walletIfon: {
				address: "", //钱包账户
				balance: "0", //余额
				chainId: "", //chainId
				currency: "", //币种
			}, //钱包信息
			walletState: false, //钱包登录成功
		};
	},
	getters: {},
	actions: {},
	persist: {
		storage: sessionStorage,
		key: "user",
	},
});
