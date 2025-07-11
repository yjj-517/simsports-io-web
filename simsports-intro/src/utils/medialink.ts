// 媒体链接
// 主网链接
import IconSimsports from "@/assets/imgs/layout/simsports.svg";

export const OfficialLink = {
	officialSite: {
		name: "Simsports",
		link: import.meta.env.VITE_OFFICIAL_SITE, //官网
		icon: IconSimsports,
	},
};

// 社区链接
import IconTelegram from "@/assets/imgs/layout/telegram.svg";
import IconTwitter from "@/assets/imgs/layout/twitter.svg";
import IconDiscord from "@/assets/imgs/layout/discord.svg";
import IconMedium from "@/assets/imgs/layout/medium.svg";

// 社区链接
export const CommunityData = {
	telegra: {
		name: "Telegram",
		link: "https://t.me/SimDunk_official",
		icon: IconTelegram,
	},
	twitter: {
		name: "Twitter",
		link: "https://x.com/SimSportsClub",
		icon: IconTwitter,
	},
	twitterSimdunk: {
		name: "Twitter",
		link: "https://x.com/SimDunkOfficial",
		icon: IconTwitter,
	},
	discord: {
		name: "Discord",
		link: "https://discord.com/invite/simdunk",
		icon: IconDiscord,
	},
	medium: {
		name: "Medium",
		link: "https://medium.com/@simsports",
		icon: IconMedium,
	},
};

// download
export const DownloadGameData = {
	simdunk: {
		gameApk: {
			name: "Download",
			link: "https://download.simsports.io/game/2ndpioneertest_simdunk_test.apk",
		},
		gameGoogle: {
			name: "Google Play",
			link: "",
		},
		gameIos: {
			name: "iOS in TestFlight",
			link: "",
		},
	},
};
