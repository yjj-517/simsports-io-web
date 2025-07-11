import { ElMessage } from "element-plus"; //element 提示器
import { ethers } from "ethers"; //ethers
import Web3Modal from "web3modal"; //引入web3modal
import { useStores } from "@/store/index"; //store
import { postAddr } from "@/http/api"; //接口
// 连接钱包并构建钱包并连接ethers
export const connectWallet: any = async () => {
	const useStore = useStores(); //用户信息
	if (window.ethereum == null) {
		// 没安装钱包提示;
		ElMessage.warning("You have not installed the blockchain wallet, please install it first!");
	} else {
		// 构建钱包
		const web3Modal = new Web3Modal({
			network: "mainnet",
			cacheProvider: true,
		});
		// 连接钱包，获取签名
		const connections: any = await web3Modal
			.connect()
			.catch(() => {
				ElMessage.warning("Please login/connect wallet first!");
			})
			.then(async (res: any) => {
				// console.log(res);
				const provider = new ethers.BrowserProvider(res);
				const signer = await provider.getSigner();
				useStore.walletState = true; //钱包登录成功
				// 账号相关
				useStore.walletIfon.address = await signer.getAddress();
				const bal = await provider.getBalance(useStore.walletIfon.address); // 余额
				useStore.walletIfon.balance = ethers.formatUnits(bal);
				const { chainId, name } = await provider.getNetwork(); // 网络
				useStore.walletIfon.chainId = chainId.toString();
				useStore.walletIfon.currency = name.toUpperCase();
				// console.log(useStore.walletIfon);
				// 为用户添加钱包
				const obj = {
					address: useStore.walletIfon.address,
					user_id: useStore.userIfon.user_id,
				};
				await postAddr(obj);

				return { connection: res, provider: provider, signer: signer };
			});
		return {
			connection: connections.connection,
			provider: connections.provider,
			signer: connections.signer,
		};
	}
};
