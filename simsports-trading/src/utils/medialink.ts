// 社交图片
import twitterImg from "@/assets/imgs/layout/medialink/icon-twitter.svg";
import discordImg from "@/assets/imgs/layout/medialink/icon-discord.svg";
import mirrorImg from "@/assets/imgs/layout/medialink/icon-mirror.svg";
import link3Img from "@/assets/imgs/layout/medialink/icon-link3.svg";
import zealyImg from "@/assets/imgs/layout/medialink/icon-zealy.svg";

// 主网链接
export const importantLink = {
	officialSite: import.meta.env.VITE_OFFICIAL_SITE, //官网
	appOfficialSite: import.meta.env.VITE_APP_OFFICIAL_SITE, //官网-app
};

// 社区链接
export const userCommunityData = {
	discord: {
		name: "Discord",
		link: "https://discord.com/invite/CqybbzcRHR",
		imgurl: discordImg,
	},
	twitter: {
		name: "Twitter",
		link: "https://x.com/SimSportsClub",
		imgurl: twitterImg,
	},
	mirror: {
		name: "Mirror",
		link: "https://mirror.xyz/0x7941b572b56489D41422b9a446bB59552B021De6",
		imgurl: mirrorImg,
	},
	link3: {
		name: "Link3",
		link: "https://link3.to/simsports",
		imgurl: link3Img,
	},
	twitterSimdunk: {
		name: "Twitter",
		link: "https://x.com/SimDunkOfficial",
		imgurl: twitterImg,
	},
	zealy: {
		name: "Zealy",
		link: "https://zealy.io/cw/simdunk/invite/yD2cRXstetONh3hDSgEEq",
		imgurl: zealyImg,
	},
};

// 用户须知
export const userInformationData = {
	privacyPolicy: {
		name: "Privacy Policy",
		link: import.meta.env.VITE_OFFICIAL_SITE + "/privacy-policy",
	},
	termsOfUse: {
		name: "Terms of Use",
		link: import.meta.env.VITE_OFFICIAL_SITE + "/terms-of-use",
	},
};

// 白皮书
export const whitePaperData = {
	simsports: {
		name: "SimSports Platform whitepaper",
		link: "https://docs.simsports.io/simsports",
	},
	simdunk: {
		name: "SimDunk whitepaper",
		link: "https://docs.simsports.io/simdunk",
	},
	simdunkPlayerProfile: {
		name: "Limited SSR Giovanni Player Profile",
		link: "https://docs.simsports.io/simdunk/game-functions/players/player-profile",
	},
};

// 游戏下载链接
// gameLink: "https://download.simsports.io/game/com.metaprophet.simdunk.alpha1.apk",
// googleLink: "https://play.google.com/store/apps/details?id=com.metaprophet.simdunk",
import iconGoogle from "@/assets/imgs/common/icon-google.png";
import iconTestflight from "@/assets/imgs/common/icon-testflight.png";
import iconSimsports from "@/assets/imgs/logo/simsports-logo.png";

export const downloadGameData = {
	game: {
		name: "Download",
		img: iconSimsports,
		link: "",
	},
	gameGoogle: {
		name: "Google Play",
		img: iconGoogle,
		link: "",
	},
	gameTestFlight: {
		name: "iOS in TestFlight",
		img: iconTestflight,
		link: "",
	},
};
