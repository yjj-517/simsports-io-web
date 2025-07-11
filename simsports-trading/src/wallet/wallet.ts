import { Ethereum, ArbitrumOne, ArbitrumSepolia } from "@particle-network/chains";
import { Chain, ConnectConfig, ParticleConnect, evmWallets } from "@particle-network/connect";
import { WalletEntryPosition } from "@particle-network/auth";

import { ethers } from "ethers"; //ethers
import { walletStores, accountStores } from "@/store/index"; //store

import { message } from "antd";
// 构建钱包
const config: ConnectConfig = {
	projectId: "5ef287b0-b76e-42f6-98fa-cc8d481277be", //particle-projectId
	clientKey: "cNOYjAWgLRvMzunGoxjeeJEME2wGgg73nHun5DZM", //particle-clientKey
	appId: "2212f89f-1fac-493a-aad0-c469ac6c46a1", //particle-appId
	chains: [ArbitrumOne as Chain], //chains初次连接
	wallets: evmWallets({
		projectId: "04787d2afecd62800d49fac33672b2c6", //replace with walletconnect projectId
		showQrModal: true,
	}),
	// particle钱包设置
	particleWalletEntry: {
		displayWalletEntry: true, //连接particle成功显示钱包
		defaultWalletEntryPosition: WalletEntryPosition.BR, //wallet显示位置
		supportChains: [Ethereum, ArbitrumOne, ArbitrumSepolia], //钱包的链
		customStyle: {}, //wallet style使用默认
	},
	// particle钱包设置
	securityAccount: {
		//0：无，1：一次（默认），2：始终
		promptSettingWhenSign: 1, //提示设置支付密码
		promptMasterPasswordSettingWhenLogin: 1, //提示设置主密码
	},
};
// 创建一个钱包
const connectKit = new ParticleConnect(config);

// 获取最后一个连接钱包数据
export const connectWalletData = async () => {
	const connectProvider = await connectKit
		.connectToCachedProvider()
		.catch(() => {
			message.warning("Please open the wallet!");
		})
		.then(async (res: any) => {
			const walletStore = walletStores.getState(); //用户信息
			// console.log(walletStore);
			const provider = new ethers.BrowserProvider(res, "any");
			const signer = await provider.getSigner();
			const bal = await provider.getBalance(await signer.getAddress()); // 余额
			const { chainId, name } = await provider.getNetwork(); // 网络
			const walletData = {
				address: await signer.getAddress(), //钱包账户
				balance: ethers.formatUnits(bal), //余额
				chainId: chainId.toString(), //chainId
				currency: name.toUpperCase(), //币种
			};
			walletStore.addWallet(walletData);
			return { connection: res, provider: provider, signer: signer };
		});

	return {
		connection: connectProvider.connection,
		provider: connectProvider.provider,
		signer: connectProvider.signer,
	};
};
// 监听钱包变化
export const changeWallet = async () => {
	const walletStore = walletStores.getState(); //用户信息
	const accountStore = accountStores.getState(); //用户信息
	if (walletStore.walletState) {
		const contract = await connectWalletData(); //重新构建abiContract引进函数
		// 监听账户切换
		await contract.connection.on("accountsChanged", async (accounts: any) => {
			if (accounts.length > 0) {
				await connectWalletData();
				// 钱包账号和登录账户不同
				if (accountStores.getState().userInfo.address === walletStores.getState().walletIfon.address) {
					accountStore.setUserState(true);
				} else {
					accountStore.setUserState(false);
				}
			} else {
				walletStore.delWallet();
				accountStore.delUser();
			}
		});
		await contract.connection.on("chainChanged", async (chainId: any) => {
			if (chainId) {
				await connectWalletData();
				if (!walletStore.walletIfon.address) {
					walletStore.delWallet();
					accountStore.delUser();
				}
			}
		});
		await contract.connection.on("disconnect", async () => {
			walletStore.delWallet();
			accountStore.delUser();
		});
	}
};
// 连接钱包
export const connectConnectKit = async (id?: string, options?: any) => {
	if (id === "metamask" && window.ethereum == null) {
		message.warning("You have not installed the blockchain wallet, please install it first!");
	} else {
		await connectKit.disconnect();
		const connectKitConnect = await connectKit
			.connect(id, options)
			.catch(() => {
				message.warning("Please login/connect wallet first!");
			})
			.then(async (res: any) => {
				connectKit.switchChain(ArbitrumOne);
				const walletStore = walletStores.getState(); //用户信息
				// console.log(walletStore);
				const provider = new ethers.BrowserProvider(res, "any");
				const signer = await provider.getSigner();
				const bal = await provider.getBalance(await signer.getAddress()); // 余额
				const { chainId, name } = await provider.getNetwork(); // 网络
				const walletData = {
					address: await signer.getAddress(), //钱包账户
					balance: ethers.formatUnits(bal), //余额
					chainId: chainId.toString(), //chainId
					currency: name.toUpperCase(), //币种
				};
				walletStore.addWallet(walletData);
				await changeWallet(); //监听钱包变化
				return { connection: res, provider: provider, signer: signer };
			});
		return {
			connection: connectKitConnect.connection,
			provider: connectKitConnect.provider,
			signer: connectKitConnect.signer,
		};
	}
};

// 切换网络
export const switchWalletChain = (chanin: any) => {
	connectKit.switchChain(chanin);
};
// 断开钱包连接
export const disConnectWallet = () => {
	connectKit.disconnect();
};
