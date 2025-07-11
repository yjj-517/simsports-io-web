// game paly 数据
import urPlayerBg from "@/assets/imgs/home/player/game-player/game-player-ur/game-player-bg.png";
import urPlayerTitle from "@/assets/imgs/home/player/game-player/game-player-ur/game-player-title.png";
export const urPlayerDate = {
	name: "UR", //名字
	bgImg: urPlayerBg, //背景图
	titleImg: urPlayerTitle, //title图
	changeButton: [], //切换按钮
	active: {
		borderColor: "#31bc91",
		boxShadow: "inset 0.04rem 0.04rem 0.08rem rgba(#31bc91, 0.5), inset -0.04rem -0.04rem 0.08rem rgba(#31bc91, 0.5)",
		opacity: 1,
	}, //选中样式
	backgroundColor: {
		background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(48,41,68,0.5) 50%, rgba(52,2,134,0.4) 100%)",
	},
	// player数据
	list: [],
};
import ssrPlayerBg from "@/assets/imgs/home/player/game-player/game-player-ssr/game-player-bg.png";
import ssrPlayerTitle from "@/assets/imgs/home/player/game-player/game-player-ssr/game-player-title.png";
export const ssrPlayerDate = {
	name: "SSR", //名字
	bgImg: ssrPlayerBg, //背景图
	titleImg: ssrPlayerTitle, //title图
	changeButton: [], //切换按钮
	active: {
		borderColor: "#31bc91",
		boxShadow: "inset 0.04rem 0.04rem 0.08rem rgba(#31bc91, 0.5), inset -0.04rem -0.04rem 0.08rem rgba(#31bc91, 0.5)",
		opacity: 1,
	}, //选中样式
	backgroundColor: {
		background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(48,41,68,0.5) 50%, rgba(52,2,134,0.4) 100%)",
	},
	// player数据
	list: [],
};
import srPlayerBg from "@/assets/imgs/home/player/game-player/game-player-sr/game-player-bg.png";
import srPlayerTitle from "@/assets/imgs/home/player/game-player/game-player-sr/game-player-title.png";
import srIconChangeLeft from "@/assets/imgs/home/player/game-player/game-player-sr/icon-change-left.png";
import srIconChangeRight from "@/assets/imgs/home/player/game-player/game-player-sr/icon-change-right.png";

import srPlayerAvatarEffy from "@/assets/imgs/home/player/game-player/game-player-sr/game-player-avatar-effy.png";
import srPlayerPeopleEffy from "@/assets/imgs/home/player/game-player/game-player-sr/game-player-people-effy.png";

export const srPlayerDate = {
	name: "SR", //名字
	bgImg: srPlayerBg, //背景图
	titleImg: srPlayerTitle, //title图
	changeButton: [srIconChangeLeft, srIconChangeRight], //切换按钮
	active: {
		borderColor: "#905afb",
		boxShadow: "inset 0.04rem 0.04rem 0.08rem #905afb, inset -0.04rem -0.04rem 0.08rem #905afb",
		opacity: 1,
	}, //选中样式
	backgroundColor: {
		background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(48,41,68,0.5) 50%, rgba(52,2,134,0.4) 100%)",
	},
	// player数据
	list: [
		{
			palyerAvatarImg: srPlayerAvatarEffy, //头像
			palyerImg: srPlayerPeopleEffy, //图片
			name: "Effy",
			nickname: "The Sweet Sauce",
			introduce:
				"Like every kid on the street of Brooklyn, Effy immersed herself in the hip-hop culture that defined her community. Her father, a seasoned DJ in the SimDunk League, would bring her along to his gigs. Effy's passion for basketball grew as she observed every intense street game, and she dreamt of making a name for herself on that court. Yet, she couldn't help but notice the lack of female representation on the court.",
		},
	],
};
import rPlayerBg from "@/assets/imgs/home/player/game-player/game-player-r/game-player-bg.png";
import rPlayerTitle from "@/assets/imgs/home/player/game-player/game-player-r/game-player-title.png";
import rIconChangeLeft from "@/assets/imgs/home/player/game-player/game-player-r/icon-change-left.png";
import rIconChangeRight from "@/assets/imgs/home/player/game-player/game-player-r/icon-change-right.png";

import rPlayerAvatarJaggar from "@/assets/imgs/home/player/game-player/game-player-r/game-player-avatar-jaggar.png";
import rPlayerPeopleJaggar from "@/assets/imgs/home/player/game-player/game-player-r/game-player-people-jaggar.png";

export const rPlayerDate = {
	name: "R", //名字
	bgImg: rPlayerBg, //背景图
	titleImg: rPlayerTitle, //title图
	changeButton: [rIconChangeLeft, rIconChangeRight], //切换按钮
	active: {
		borderColor: "#5163D3",
		boxShadow: "inset 0.04rem 0.04rem 0.08rem #5163D3, inset -0.04rem -0.04rem 0.08rem #5163D3",
		opacity: 1,
	}, //选中样式
	backgroundColor: {
		background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(41,44,68,0.5) 50%, rgba(2,13,134,0.4) 100%)",
	},
	list: [
		{
			palyerAvatarImg: rPlayerAvatarJaggar,
			palyerImg: rPlayerPeopleJaggar,
			name: "Jaggar",
			nickname: "The Bully",
			introduce:
				"Jaggar is an intense point guard with the height of a forward and a stout physique, yet possesses the agility and speed of a guard. What sets him apart is not just his basketball skills but also his intimidating demeanor. Opponents struggle to handle his relentless trash talk and questionable offensive and defensive tactics.",
		},
	],
};
import nPlayerBg from "@/assets/imgs/home/player/game-player/game-player-n/game-player-bg.png";
import nPlayerTitle from "@/assets/imgs/home/player/game-player/game-player-n/game-player-title.png";
import nIconChangeLeft from "@/assets/imgs/home/player/game-player/game-player-n/icon-change-left.png";
import nIconChangeRight from "@/assets/imgs/home/player/game-player/game-player-n/icon-change-right.png";

import nPlayerAvatarEyad from "@/assets/imgs/home/player/game-player/game-player-n/game-player-avatar-eyad.png";
import nPlayerPeopleEyad from "@/assets/imgs/home/player/game-player/game-player-n/game-player-people-eyad.png";
import nPlayerAvatarGeorgios from "@/assets/imgs/home/player/game-player/game-player-n/game-player-avatar-georgios.png";
import nPlayerPeopleGeorgios from "@/assets/imgs/home/player/game-player/game-player-n/game-player-people-georgios.png";
import nPlayerAvatarJawad from "@/assets/imgs/home/player/game-player/game-player-n/game-player-avatar-jawad.png";
import nPlayerPeopleJawad from "@/assets/imgs/home/player/game-player/game-player-n/game-player-people-jawad.png";
import nPlayerAvatarPark from "@/assets/imgs/home/player/game-player/game-player-n/game-player-avatar-park.png";
import nPlayerPeoplePark from "@/assets/imgs/home/player/game-player/game-player-n/game-player-people-park.png";
import nPlayerAvatarArjun from "@/assets/imgs/home/player/game-player/game-player-n/game-player-avatar-arjun.png";
import nPlayerPeopleArjun from "@/assets/imgs/home/player/game-player/game-player-n/game-player-people-arjun.png";

export const nPlayerDate = {
	name: "N", //名字
	bgImg: nPlayerBg, //背景图
	titleImg: nPlayerTitle, //title图
	changeButton: [nIconChangeLeft, nIconChangeRight], //切换按钮
	active: {
		borderColor: "#31bc91",
		boxShadow: "inset 0.04rem 0.04rem 0.08rem #31bc91, inset -0.04rem -0.04rem 0.08rem #31bc91",
		opacity: 1,
	},
	backgroundColor: {
		background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(41,68,57,0.5) 50%, rgba(2,134,92,0.5) 100%)",
	},
	list: [
		{
			palyerAvatarImg: nPlayerAvatarEyad,
			palyerImg: nPlayerPeopleEyad,
			name: "Eyad",
			nickname: "The Rat",
			introduce:
				"Eyad resides in Dum, a lawless city on Somalia's border, more akin to a vast black market than a city. It's teeming with dishonest traders, thieves, and bullies. Like other impoverished inhabitants, Eyad uses his wits to scrape by. His shrewdness helps him thrive in the city's underbelly, always sensing subtle shifts and opportunities like a sniffing rat.",
		},
		{
			palyerAvatarImg: nPlayerAvatarGeorgios,
			palyerImg: nPlayerPeopleGeorgios,
			name: "Georgios",
			nickname: "The Climber",
			introduce:
				"Georgios, born in a sunny small town in Greece, developed a love for basketball through the SimDunk League like most children. Unlike some prodigies, he lacked remarkable talent, but his unwavering determination fueled his dream of becoming a player in the league.",
		},
		{
			palyerAvatarImg: nPlayerAvatarJawad,
			palyerImg: nPlayerPeopleJawad,
			name: "Jawad",
			nickname: "The Kaleidoscope",
			introduce:
				"In Istanbul's courts, a player has captivated many spectators with his impressive skills and attractive looks, and that player's name is \"The Kaleidoscope,\" Jawad.",
		},
		{
			palyerAvatarImg: nPlayerAvatarPark,
			palyerImg: nPlayerPeoplePark,
			name: "Park Yong-Joo",
			nickname: "The Barricade",
			introduce:
				"Park Yong-joo, a Korean native, moved to the United States at a young age to study and live with his parents. Embracing the country's emphasis on strength, he became a fitness enthusiast. In college, his athletic build caught the attention of a coach, leading him to join the basketball team and embark on his basketball career.",
		},
		{
			palyerAvatarImg: nPlayerAvatarArjun,
			palyerImg: nPlayerPeopleArjun,
			name: "Arjun",
			nickname: "The Unyielding",
			introduce:
				"Arjun was born in a poor village on the Deccan Plateau and had to move to the city at a young age to do hard labor alongside his father. This upbringing led to his impressive physical strength and stamina. In adulthood, he resorted to participating in underground boxing matches for survival.",
		},
	],
};
