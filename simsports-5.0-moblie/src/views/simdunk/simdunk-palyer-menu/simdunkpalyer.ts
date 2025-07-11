// simdunk palyer 数据
// import urPlayerBg from "@/assets/imgs/simdunk/game/game-player/game-player-ur/game-player-bg.png";
export const urPlayerDate = {
	type: "UR", //名字
	bgImg: "", //背景图
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

import ssrPlayerBg from "@/assets/imgs/simdunk/game/game-player/game-player-ssr/game-player-bg.png";
import ssrIconChangeLeft from "@/assets/imgs/simdunk/game/game-player/game-player-ssr/icon-change-left.png";
import ssrIconChangeRight from "@/assets/imgs/simdunk/game/game-player/game-player-ssr/icon-change-right.png";

import srrPlayerAvatarJovani from "@/assets/imgs/simdunk/game/game-player/game-player-ssr/game-player-avatar-jovani.png";
import srrPlayerPeopleJovani from "@/assets/imgs/simdunk/game/game-player/game-player-ssr/game-player-people-jovani.png";
export const ssrPlayerDate = {
	type: "SSR", //名字
	bgImg: ssrPlayerBg, //背景图
	changeButton: [ssrIconChangeLeft, ssrIconChangeRight], //切换按钮
	backgroundColor: {
		background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(68,52,41,0.5) 50%, rgba(247,126,39,0.5) 100%)",
	},
	active: {
		borderColor: "#F77E27",
		boxShadow: "inset 0.04rem 0.04rem 0.08rem #F77E27, inset -0.04rem -0.04rem 0.08rem #F77E27",
		opacity: 1,
	}, //选中样式
	// player数据
	list: [
		{
			palyerAvatarImg: srrPlayerAvatarJovani, //头像
			palyerImg: srrPlayerPeopleJovani, //图片
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/players/player-profile/the-lighthouse-jovani", //链接
			name: "Jovani",
			nickname: "Lighthouse",
			introduce:
				"Years later, when Jovani stands on the court of SimDunk League finals, he still recalls the afternoon he first went to the old lighthouse. At that time, the small town had over 500 residents, and virtual reality technology had not yet emerged. The lighthouse keeper built a simple basketball court for him and the local children to play.",
		},
	],
};

import srPlayerBg from "@/assets/imgs/simdunk/game/game-player/game-player-sr/game-player-bg.png";
import srIconChangeLeft from "@/assets/imgs/simdunk/game/game-player/game-player-sr/icon-change-left.png";
import srIconChangeRight from "@/assets/imgs/simdunk/game/game-player/game-player-sr/icon-change-right.png";

import srPlayerAvatarEffy from "@/assets/imgs/simdunk/game/game-player/game-player-sr/game-player-avatar-effy.png";
import srPlayerPeopleEffy from "@/assets/imgs/simdunk/game/game-player/game-player-sr/game-player-people-effy.png";
import srPlayerAvatarYonatan from "@/assets/imgs/simdunk/game/game-player/game-player-sr/game-player-avatar-yonatan.png";
import srPlayerPeopleYonatan from "@/assets/imgs/simdunk/game/game-player/game-player-sr/game-player-people-yonatan.png";

export const srPlayerDate = {
	type: "SR", //名字
	bgImg: srPlayerBg, //背景图
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
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/player-nfts/player-profile/the-sweet-sauce-effy", //链接
			name: "Effy",
			nickname: "Sweet Sauce",
			introduce:
				"Like every kid on the street of Brooklyn, Effy immersed herself in the hip-hop culture that defined her community. Her father, a seasoned DJ in the SimDunk League, would bring her along to his gigs. Effy's passion for basketball grew as she observed every intense street game, and she dreamt of making a name for herself on that court. Yet, she couldn't help but notice the lack of female representation on the court.",
		},
		{
			palyerAvatarImg: srPlayerAvatarYonatan,
			palyerImg: srPlayerPeopleYonatan,
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/players/player-profile/the-ace-yonatan",
			name: "Yonatan",
			nickname: "The Ace",
			introduce:
				"Yonatan was born on Christmas Day in 2075 in a wealthy Jewish family. Just as his name signifies, his family considers him a gift from God. Everything about him seemed to be under God's care, flawless and perfect. Whether in family matters, academics, sports, or arts, Yonatan excelled in every field he ventured into. However, his excessive perfection made him arrogant.",
		},
	],
};

import rPlayerBg from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-bg.png";
import rIconChangeLeft from "@/assets/imgs/simdunk/game/game-player/game-player-r/icon-change-left.png";
import rIconChangeRight from "@/assets/imgs/simdunk/game/game-player/game-player-r/icon-change-right.png";

import rPlayerAvatarPark from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-avatar-park.png";
import rPlayerPeoplePark from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-people-park.png";
import rPlayerAvatarCarlton from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-avatar-carlton.png";
import rPlayerPeopleCarlton from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-people-carlton.png";
import rPlayerAvatarEloa from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-avatar-eloa.png";
import rPlayerPeopleEloa from "@/assets/imgs/simdunk/game/game-player/game-player-r/game-player-people-eloa.png";

export const rPlayerDate = {
	type: "R", //名字
	bgImg: rPlayerBg, //背景图
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
			palyerAvatarImg: rPlayerAvatarEloa,
			palyerImg: rPlayerPeopleEloa,
			name: "Eloá",
			nickname: "Jungle Lizard",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/players/player-profile/the-monitor-lizard-eloa",
			introduce:
				"As a woman who stands over two meters tall, with a robust physique and full muscles, she has the upper hand in power struggles against male players. Eloá was an abandoned baby in the Amazon jungle, raised by the giant monitor lizards as their own. A jungle exploration team discovered her and brought her back to the human world.",
		},
		{
			palyerAvatarImg: rPlayerAvatarCarlton,
			palyerImg: rPlayerPeopleCarlton,
			name: "Carlton",
			nickname: "Troubler",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/players/player-profile/the-troublemaker-carlton",
			introduce:
				'Looking up at the towering buildings that obscure the sky from the slums of Australia, Carlton always felt a sense of lamentation in his heart. "We are tiny bugs left behind by the times." The rapid development of technology has not solved the dilemma of the wealth gap. At the bottom of the dense concrete jungle, slums are still scattered like fungal communities.',
		},
		{
			palyerAvatarImg: rPlayerAvatarPark,
			palyerImg: rPlayerPeoplePark,
			name: "Park Yong-Joo",
			nickname: "Roadblock",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/player-nfts/player-profile/the-barricade-park-yong-joo",
			introduce:
				"Park Yong-Joo, a Korean native, moved to the United States at a young age to study and live with his parents. Embracing the country's emphasis on strength, he became a fitness enthusiast. In college, his athletic build caught the attention of a coach, leading him to join the basketball team and embark on his basketball career.",
		},
	],
};

import nPlayerBg from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-bg.png";
import nIconChangeLeft from "@/assets/imgs/simdunk/game/game-player/game-player-n/icon-change-left.png";
import nIconChangeRight from "@/assets/imgs/simdunk/game/game-player/game-player-n/icon-change-right.png";

import nPlayerAvatarEyad from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-avatar-eyad.png";
import nPlayerPeopleEyad from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-people-eyad.png";
import nPlayerAvatarGeorgios from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-avatar-georgios.png";
import nPlayerPeopleGeorgios from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-people-georgios.png";
import nPlayerAvatarJawad from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-avatar-jawad.png";
import nPlayerPeopleJawad from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-people-jawad.png";
import nPlayerAvatarJaggar from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-avatar-jaggar.png";
import nPlayerPeopleJaggar from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-people-jaggar.png";
import nPlayerAvatarArjun from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-avatar-arjun.png";
import nPlayerPeopleArjun from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-people-arjun.png";
import nPlayerAvatarSarinna from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-avatar-sarinna.png";
import nPlayerPeopleSarinna from "@/assets/imgs/simdunk/game/game-player/game-player-n/game-player-people-sarinna.png";

export const nPlayerDate = {
	type: "N", //名字
	bgImg: nPlayerBg, //背景图
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
			palyerAvatarImg: nPlayerAvatarSarinna,
			palyerImg: nPlayerPeopleSarinna,
			name: "Sarinna",
			nickname: "Siamese Cat",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/players/player-profile/the-siamese-cat-sarinna",
			introduce:
				'This world seems like a hodgepodge of contradictory elements upon closer inspection, full of flaws, yet people living in it consider it natural. However, a small group of individuals feel dissonance towards this low-quality world and have formed an organization called the "Investigators" to trace the source of this dissonance within the world\'s contradictions.',
		},
		{
			palyerAvatarImg: nPlayerAvatarJawad,
			palyerImg: nPlayerPeopleJawad,
			name: "Jawad",
			nickname: "Kaleidoscope",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/player-nfts/player-profile/the-kaleidoscope-jawad",
			introduce:
				"In Istanbul's courts, a player has captivated many spectators with his impressive skills and attractive looks, and that player's name is \"The Kaleidoscope,\" Jawad.",
		},
		{
			palyerAvatarImg: nPlayerAvatarJaggar,
			palyerImg: nPlayerPeopleJaggar,
			name: "Jaggar",
			nickname: "Bully",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/players/player-profile/the-bully-jaggar",
			introduce:
				"Jaggar is an intense point guard with the height of a forward and a stout physique, yet possesses the agility and speed of a guard. What sets him apart is not just his basketball skills but also his intimidating demeanor. Opponents struggle to handle his relentless trash talk and questionable offensive and defensive tactics.",
		},
		{
			palyerAvatarImg: nPlayerAvatarGeorgios,
			palyerImg: nPlayerPeopleGeorgios,
			name: "Georgios",
			nickname: "The Climber",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/player-nfts/player-profile/the-climber-georgios",
			introduce:
				"Georgios, born in a sunny small town in Greece, developed a love for basketball through the SimDunk League like most children. Unlike some prodigies, he lacked remarkable talent, but his unwavering determination fueled his dream of becoming a player in the league.",
		},
		{
			palyerAvatarImg: nPlayerAvatarArjun,
			palyerImg: nPlayerPeopleArjun,
			name: "Arjun",
			nickname: "Tough Man",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/player-nfts/player-profile/the-unyielding-arjun",
			introduce:
				"Arjun was born in a poor village on the Deccan Plateau and had to move to the city at a young age to do hard labor alongside his father. This upbringing led to his impressive physical strength and stamina. In adulthood, he resorted to participating in underground boxing matches for survival.",
		},
		{
			palyerAvatarImg: nPlayerAvatarEyad,
			palyerImg: nPlayerPeopleEyad,
			name: "Eyad",
			nickname: "Evil Rat",
			palyerLink: "https://docs.simsports.io/simdunk/game-functions/player-nfts/player-profile/the-rat-eyad",
			introduce:
				"Eyad resides in Dum, a lawless city on Somalia's border, more akin to a vast black market than a city. It's teeming with dishonest traders, thieves, and bullies. Like other impoverished inhabitants, Eyad uses his wits to scrape by. His shrewdness helps him thrive in the city's underbelly, always sensing subtle shifts and opportunities like a sniffing rat.",
		},
	],
};
