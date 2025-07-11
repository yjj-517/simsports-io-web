// usdt-token合约获取

import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import UsdtToken from "./FaucetToken.json"; //合约abi
export const UsdtTokenAddr = import.meta.env.VITE_CONTRACT_USDTTOKEN_ADDR; //usdt合约地址
export const UsdtTokenAbi: any = async (address: any) => {
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const UsdtTokenProvider = new ethers.Contract(UsdtTokenAddr, UsdtToken.abi, contract?.provider);
	// 调用合约
	const UsdtTokenSigner = new ethers.Contract(UsdtTokenAddr, UsdtToken.abi, contract?.signer);
	const items = {
		balance: await UsdtTokenProvider.balanceOf(address), //usdt余额
	};
	return {
		items: items,
		UsdtTokenProvider: UsdtTokenProvider,
		UsdtTokenSigner: UsdtTokenSigner,
	};
};
