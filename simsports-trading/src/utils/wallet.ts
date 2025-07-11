import iconMetamask from "@/assets/imgs/wallet/icon-metamask.svg";
import iconPartical from "@/assets/imgs/wallet/icon-partical.svg";
import iconWalletconnect from "@/assets/imgs/wallet/icon-walletconnect.svg";

// ipfs
export const ipfsGatewayURL = "https://ipfs.decentralized-content.com/ipfs";
// wallet
export const walleListData = [
	{
		title: "MetaMask", //title
		name: "metamask", //name
		id: 5, //id
		icon: iconMetamask, //图片
		state: false, //点击状态
	},
	{
		title: "Particle Network",
		name: "particle",
		id: 1,
		icon: iconPartical,
		state: false,
	},
	{
		title: "Walletconnect",
		name: "walletconnect_v2",
		id: 10,
		icon: iconWalletconnect,
		state: false,
	},
];

import iconEthereum from "@/assets/imgs/wallet/icon-chain-ethereum.svg";
import iconArbitum from "@/assets/imgs/wallet/icon-chain-arbitum.svg";
import iconArbitumSepolia from "@/assets/imgs/wallet/icon-chain-arbitum-sepolia.svg";

// chains
export const chainData = {
	ethereum: {
		name: "Ethereum", //名称
		link: "https://etherscan.io",
		id: "1", //id
		icon: iconEthereum, //图片
	},
	arbitumOne: {
		name: "Arbitum One",
		link: "https://arbiscan.io",
		id: "42161",
		icon: iconArbitum,
	},
	arbitrumSepolia: {
		name: "Arbitrum Sepolia",
		link: "https://sepolia.arbiscan.io",
		id: "421614",
		icon: iconArbitumSepolia,
	},
};

// // 钱包教程
export const walletTutorialData = [
	{
		name: "What is a Wallet Address?",
		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-a-wallet-address",
	},
	{
		name: "What is the Particle Network Wallet?",
		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-the-particle-network-wallet",
	},
	{
		name: "How to Install MetaMask?",
		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/how-to-install-metamask",
	},
	{
		name: "How to Create a Particle Network Wallet Address?",
		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-the-particle-network-wallet/how-to-create-a-particle-network-wallet-address",
	},
];
import { walletStores } from "@/store/index"; //store
// 签名数据储存
export const setSignmessage = (walletSignType: number) => {
	//walletSignType //1-绑定钱包/2-解绑钱包/101-mint
	let signmessage: string = ""; //签名字段
	const walletStore = walletStores.getState(); //用户信息
	const timeDate = new Date().getTime() / 1000; //当前标准时间戳
	if (walletSignType === 1) {
		signmessage =
			`simsports.io wants you to sign in with your Wallet address: ` +
			walletStore.walletIfon.address +
			`
Please ensure that the domain above matches the URL of the current website.
Issued At: ` +
			Math.ceil(timeDate);
	} else {
		signmessage = "Welcome to Simsports.";
	}
	return signmessage;
};
