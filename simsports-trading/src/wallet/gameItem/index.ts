// game-item合约获取-1155道具合约
import { ipfsGatewayURL } from "@/utils/wallet"; //ipfs
import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import GameItem from "./GameItem.json"; //合约abi
export const GameItemAddr = import.meta.env.VITE_CONTRACT_GAMEITEM_ADDR; //game-item合约地址
export const GameItemAbi: any = async (tokenId: number) => {
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const GameItemProvider = new ethers.Contract(GameItemAddr, GameItem.abi, contract?.provider);
	// 调用合约
	const GameItemSigner = new ethers.Contract(GameItemAddr, GameItem.abi, contract?.signer);
	const info = await GameItemProvider.cfgItemId2Config(tokenId); //获取合约详情
	const uriIpfs = await GameItemProvider.uri(ethers.parseEther(String(tokenId))); //获取mint结果
	// 处理结果
	const ipfsJson = ipfsGatewayURL + "/" + uriIpfs.replace(/{id}/g, String(tokenId)).substring("ipfs://".length);
	let resJson: any;
	await fetch(ipfsJson)
		.then(response => {
			return response.json();
		})
		.then(data => {
			resJson = data;
		});
	const items = {
		price: info.Price, //查询当前mint一个所需主链币数量
		TokenAddress: info.TokenAddress, //是否使用代币
		mintImg: ipfsGatewayURL + "/" + resJson.image.substring("ipfs://".length), //图片
		description: resJson.description, //description
		name: resJson.name, //name
		id: resJson.id, //id
	};
	return {
		items: items,
		GameItemProvider: GameItemProvider,
		GameItemSigner: GameItemSigner,
	};
};
