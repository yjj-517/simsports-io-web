// 社交图片
import IconDiscord from "@/assets/imgs/layout/community/icon-discord.png";
import IconDiscordWhite from "@/assets/imgs/layout/community/icon-discord-white.png";
import IconDiscordSvg from "@/assets/imgs/layout/community/icon-discord.svg";
import IconTwitter from "@/assets/imgs/layout/community/icon-twitter.png";
import IconTwitterWhite from "@/assets/imgs/layout/community/icon-twitter-white.png";
import IconTwitterSvg from "@/assets/imgs/layout/community/icon-twitter.svg";
import IconMedium from "@/assets/imgs/layout/community/icon-medium.png";
import IconMediumWhite from "@/assets/imgs/layout/community/icon-medium-white.png";
import IconTelegram from "@/assets/imgs/layout/community/icon-telegram.png";
import IconTelegramWhite from "@/assets/imgs/layout/community/icon-telegram-white.png";
import IconTelegramSvg from "@/assets/imgs/layout/community/icon-telegram.svg";

// 社区链接
export const useCommunityData = {
	discord: {
		name: "Discord",
		link: "https://discord.com/invite/simdunk",
		imgurl: IconDiscord,
		imgurlWhite: IconDiscordWhite,
		icon: IconDiscordSvg,
	},
	twitter: {
		name: "Twitter",
		link: "https://x.com/SimSportsClub",
		imgurl: IconTwitter,
		imgurlWhite: IconTwitterWhite,
		icon: IconTwitterSvg,
	},
	medium: {
		name: "Medium",
		link: "https://medium.com/@simsports",
		imgurl: IconMedium,
		imgurlWhite: IconMediumWhite,
	},
	telegram: {
		name: "Telegram",
		link: "https://t.me/SimDunk_official",
		imgurl: IconTelegram,
		imgurlWhite: IconTelegramWhite,
		icon: IconTelegramSvg,
	},
};

// 用户须知
export const UserInformationData = {
	privacyPolicy: {
		name: "Privacy Policy",
		link: import.meta.env.VITE_OFFICIAL_SITE + "/privacy-policy",
	},
	termsOfUse: {
		name: "Terms of Use",
		link: import.meta.env.VITE_OFFICIAL_SITE + "/terms-of-use",
	},
};
