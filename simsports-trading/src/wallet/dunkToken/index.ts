// dunk-token合约获取-20

import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import DunkToken from "./DunkToken.json"; //合约abi
export const DunkTokenAddr = import.meta.env.VITE_CONTRACT_DUNKTOKEN_ADDR; //DUNK合约地址
export const DunkTokenAbi: any = async (address: string) => {
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const DunkTokenProvider = new ethers.Contract(DunkTokenAddr, DunkToken.abi, contract?.provider);
	// 调用合约
	const DunkTokenSigner = new ethers.Contract(DunkTokenAddr, DunkToken.abi, contract?.signer);

	const items = {
		balance: await DunkTokenProvider.balanceOf(address), //dunk余额
	};
	return {
		items: items,
		DunkTokenProvider: DunkTokenProvider,
		DunkTokenSigner: DunkTokenSigner,
	};
};
