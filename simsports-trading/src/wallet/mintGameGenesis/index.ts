// 创世MINT合约合约获取

import { connectWalletData } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //引入ethers.js
import MintGameGenesis from "./MintGameGenesis.json"; //合约abi
export const MintGameGenesisAddr = import.meta.env.VITE_GENESIS_MINT_ADDR; //game-item合约地址
export const MintGameGenesisAbi: any = async (useMintNftType: string, playerId: string, address: string) => {
	// 1-白名单mint  2-拼手速  3-使用dunkmint
	const contract = await connectWalletData(); //重新构建abiContract引进函数
	// 读取合约
	const MintGameGenesisProvider = new ethers.Contract(MintGameGenesisAddr, MintGameGenesis.abi, contract?.provider);
	// 调用合约
	const MintGameGenesisSigner = new ethers.Contract(MintGameGenesisAddr, MintGameGenesis.abi, contract?.signer);
	const info = await MintGameGenesisProvider.type2pid2sellCfg(useMintNftType, playerId); //获取价格查询
	const whitelist = await MintGameGenesisProvider.cfgPid2WhiteList(playerId, address); //获取白名单查询
	const dunkContract = await MintGameGenesisProvider.dunkContract(); //获取dunk授权地址
	const items = {
		price: info.Price, //获取价格查询
		whitelist: whitelist, //获取白名单查询
		dunkContract: dunkContract,
	};
	return {
		items: items,
		MintGameGenesisProvider: MintGameGenesisProvider,
		MintGameGenesisSigner: MintGameGenesisSigner,
	};
};
