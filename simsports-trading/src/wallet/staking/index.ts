//  质押合约
// import { walletStores } from "@/store/index"; //store
import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import Staking from "./Staking.json"; //合约abi
export const StakingAddr = import.meta.env.VITE_CONTRACT_STAKING_ADDR; //质押合约地址
export const StakingAbi: any = async () => {
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const StakingProvider = new ethers.Contract(StakingAddr, Staking.abi, contract?.provider);
	// 调用合约
	const StakingSigner = new ethers.Contract(StakingAddr, Staking.abi, contract?.signer);
	const items = {};
	// console.log(items);
	return {
		items: items,
		StakingProvider: StakingProvider,
		StakingSigner: StakingSigner,
	};
};
