// game-nft 合约
import { ipfsGatewayURL } from "@/utils/wallet"; //ipfs
import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import GameNft from "./Game1NFT.json"; //合约abi
export const GameNftAddr = import.meta.env.VITE_CONTRACT_GAMENFT_ADDR; //game-item合约地址
export const GameNftAbi: any = async (tokenId: number) => {
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const GameNftProvider = new ethers.Contract(GameNftAddr, GameNft.abi, contract?.provider);
	// 调用合约
	const GameNftSigner = new ethers.Contract(GameNftAddr, GameNft.abi, contract?.signer);
	let items: any = null;
	// tokenId存在时才查询
	if (tokenId) {
		let resJson: any;
		const uriIpfs = await GameNftProvider.tokenURI(tokenId);
		// console.log(uriIpfs);
		await fetch(uriIpfs)
			.then(response => {
				return response.json();
			})
			.then(data => {
				resJson = data;
			});
		// console.log(resJson);
		items = {
			mintImg: ipfsGatewayURL + "/" + resJson.image.substring("ipfs://".length), //图片
			description: resJson.description, //description
			name: resJson.name, //name
			id: tokenId, //id
		};
	}
	return {
		items: items,
		GameNftProvider: GameNftProvider,
		GameNftSigner: GameNftSigner,
	};
};
