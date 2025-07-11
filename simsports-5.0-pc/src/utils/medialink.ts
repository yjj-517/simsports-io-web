import twitterImg from "@/assets/imgs/layout/twitter-img.png";
import discordImg from "@/assets/imgs/layout/discord-img.png";
// import mirrorImg from "@/assets/imgs/layout/mirror-img.png";
// import link3Img from "@/assets/imgs/layout/link3-img.png";
import zealyImg from "@/assets/imgs/layout/zealy-img.png";

// 主网链接
export const importantLink = {
	officialSite: import.meta.env.VITE_OFFICIAL_SITE, //官网
	appOfficialSite: import.meta.env.VITE_APP_OFFICIAL_SITE, //官网-app
};

// 社交数据
export const userCommunityData = [
	{
		imgurl: discordImg,
		link: "https://discord.gg/CqybbzcRHR",
		name: "Discord",
	},
	{
		imgurl: twitterImg,
		link: "https://twitter.com/SimSportsClub",
		name: "Twitter",
	},
	// {
	// 	imgurl: mirrorImg,
	// 	link: "https://mirror.xyz/0x7941b572b56489D41422b9a446bB59552B021De6",
	// 	name: "Mirror",
	// },
	// {
	// 	imgurl: link3Img,
	// 	link: "https://link3.to/simsports",
	// 	name: "Link3",
	// },
	{
		imgurl: zealyImg,
		link: "https://zealy.io/cw/simdunk/invite/yD2cRXstetONh3hDSgEEq",
		name: "Zealy",
	},
];
// 用户须知
export const userInformationData = [
	{
		name: "Privacy Policy",
		link: "/privacy-policy",
	},
	{
		name: "Terms of Use",
		link: "/terms-of-use",
	},
];
// 白皮书
export const whitePaperData = [
	{
		name: "SimSports Platform",
		link: "https://docs.simsports.io/simsports",
	},
	{
		name: "SimDunk",
		link: "https://docs.simsports.io/simdunk",
	},
];
// // 钱包教程
// export const walletTutorialData = [
// 	{
// 		name: "What is a Wallet Address?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-a-wallet-address",
// 	},
// 	{
// 		name: "What is the Particle Network Wallet?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-the-particle-network-wallet",
// 	},
// 	{
// 		name: "How to Install MetaMask?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/how-to-install-metamask",
// 	},
// 	{
// 		name: "How to Create a Particle Network Wallet Address?",
// 		link:
// 			"https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-the-particle-network-wallet/how-to-create-a-particle-network-wallet-address",
// 	},
// ];
// // 教程
// export const mintTutorialData = [
// 	{
// 		name: "What is a NFT?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-a-nft",
// 	},
// 	{
// 		name: "What is Mint NFT?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-a-nft/what-is-mint-nft",
// 	},
// 	{
// 		name: "What are BNB and tBNB?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-binance-smart-chain/what-are-bnb-and-tbnb",
// 	},
// 	{
// 		name: "What is a Gas Fee?",
// 		link: "https://docs.simsports.io/faq/basic-knowledge-of-blockchain/what-is-a-gas-fee",
// 	},
// ];
// 游戏下载链接
export const downloadGameData = {
	gameLink: "https://simsports.io",
	googleLink: "https://play.google.com/store/apps/details?id=com.simdunk.mtgame",
	iosLink: "https://testflight.apple.com/join/ppFAVxu8 ",
};
