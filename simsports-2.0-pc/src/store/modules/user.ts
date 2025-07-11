import { defineStore } from "pinia"; //pinia
import { connectWallet } from "@/ethers/wallet"; // 钱包调用;
import { dialogStores } from "@/store/index"; //store
// 第一个参数是应用程序中 store 的唯一 id
export const useStores: any = defineStore("user", {
	persist: {
		enabled: true, //开启数据持久化
		strategies: [
			{
				key: "users", //给一个要保存的名称
				storage: sessionStorage, //sessionStorage / localStorage 存储方式
			},
		],
	},

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
	actions: {
		// 登录成功存储用户信息
		addUser(user: any) {
			this.userIfon = user; //登录用户信息
			this.userState = true; //登录成功
		},
		// 退出删除用户信息
		delUser() {
			this.userIfon = {
				account: "", //用户
				access_token: "", //token
				token_type: "", //token类型
				user_id: "", //用户id
			};
			this.userState = false; //登录成功信息
			this.walletIfon = {
				address: "", //钱包账户
				balance: "0", //余额
				chainId: "", //chainId
				currency: "", //币种
			};
			this.walletState = false; //钱包登录成功
		},
		// 断开钱包事件
		delWallet() {
			this.walletIfon = {
				address: "", //钱包账户
				balance: "0", //余额
				chainId: "", //chainId
				currency: "", //币种
			};
			this.walletState = false; //钱包登录成功
		},
		//监听钱包
		async monitorWallet() {
			if (this.walletState) {
				const contract = await connectWallet();
				// 监听更换账户
				await contract.connection.on("accountsChanged", (accounts: any) => {
					if (accounts.length > 0) {
						this.onBalance();
						if (!this.walletIfon.address) {
							this.delWallet();
						}
					} else if (accounts.length == 0) {
						this.delWallet();
					}
				});
				// 监听网络改变
				await contract.connection.on("chainChanged", (chainId: any) => {
					if (chainId) {
						this.onBalance();
						if (!this.walletIfon.address) {
							this.delWallet();
						}
					}
				});
			}
		},
		// 查询账户信息
		async onBalance() {
			const dialogStore = dialogStores(); //用户信息
			if (this.userState) {
				await connectWallet();
			} else {
				dialogStore.onWalletState = true;
				return;
			}
		},
	},
});
