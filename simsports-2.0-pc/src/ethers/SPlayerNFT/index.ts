// 盲盒合约获取
import { connectWallet } from "../wallet"; // 钱包调用;
import { ethers } from "ethers"; //引入ethers.js
import SPlayerNFT from "./SPlayerNFT.json"; //合约abi
import { useStores } from "@/store/index"; //store	 //用户信息
export const SPlayerNFTAddr = "0xa91e2Fd7E0c2AF620E771491a2FB0c9283Df32cd"; //私募合约地址
export const SPlayerNFTAbi: any = async () => {
	const useStore = useStores();
	const contract = await connectWallet(); //重新构建abiContract引进函数
	// 读取合约
	const SPlayerNFTProvider = new ethers.Contract(SPlayerNFTAddr, SPlayerNFT.abi, contract.provider);
	// 调用合约
	const SPlayerNFTSigner = new ethers.Contract(SPlayerNFTAddr, SPlayerNFT.abi, contract.signer);
	const items = {
		getMintTime: await SPlayerNFTSigner.getMintTime(), //查询可mint时间区间
		mOnlyWhiteMint: await SPlayerNFTSigner.mOnlyWhiteMint(), //查询是否只有白名单可mint
		mPrice: ethers.formatUnits(await SPlayerNFTSigner.mPrice(), 18), //查询mint价格
		checkMintOpen: await SPlayerNFTSigner.checkMintOpen(), //查询是否可以mint,在时间区间内 返回true
		balanceOf: ethers.formatUnits(await SPlayerNFTSigner.balanceOf(useStore.walletIfon.address), 0), //查询当前NFT数量
		SPlayerNFTAddr: SPlayerNFTAddr, //私募合约地址
		getTokenIds: await SPlayerNFTSigner.getTokenIds(useStore.walletIfon.address), //查询拥有的所有tokenId
	};
	return {
		items: items,
		SPlayerNFTProvider: SPlayerNFTProvider,
		SPlayerNFTSigner: SPlayerNFTSigner,
	};
};
