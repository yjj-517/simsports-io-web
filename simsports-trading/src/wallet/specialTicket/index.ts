//  特别联赛通证NFT
import { walletStores } from "@/store/index"; //store
import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import SpecialTicket from "./SpecialTicket.json"; //合约abi
export const SpecialTicketAddr = import.meta.env.VITE_CONTRACT_SPECIALTICKET_ADDR; //mint-game合约地址
export const SpecialTicketAbi: any = async () => {
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const SpecialTicketProvider = new ethers.Contract(SpecialTicketAddr, SpecialTicket.abi, contract?.provider);
	// 调用合约
	const SpecialTicketSigner = new ethers.Contract(SpecialTicketAddr, SpecialTicket.abi, contract?.signer);
	const items = {
		whiteslist: await SpecialTicketProvider.whiteList(walletStores.getState().walletIfon.address),
		price: await SpecialTicketProvider.tokenPrice(), //查询当前mint一个所需主链币数量
		TokenAddress: await SpecialTicketProvider.USDTAddress(), //是否使用代币-usdt合约地址
		maxCount: await SpecialTicketProvider.maxTokenCount(), // 查询NFT最大供应数
		curCount: await SpecialTicketProvider.curTokenCount(), // 查询当前已经mint多少个NFT
	};
	// console.log(items);

	return {
		items: items,
		SpecialTicketProvider: SpecialTicketProvider,
		SpecialTicketSigner: SpecialTicketSigner,
	};
};
