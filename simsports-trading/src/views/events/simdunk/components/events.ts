// simdunk-EVEANTS数据

import eventsImg01 from "@/assets/imgs/events/simdunk-events/events-01.png";
import eventsImg02 from "@/assets/imgs/events/simdunk-events/events-02.png";
// import eventsImg03 from "@/assets/imgs/events/simdunk-events/events-03.png";
import eventsImg04 from "@/assets/imgs/events/simdunk-events/events-04.png";
import eventsImg05 from "@/assets/imgs/events/simdunk-events/events-05.png";
import eventsImg06 from "@/assets/imgs/events/simdunk-events/events-06.png";
import { userCommunityData } from "@/utils/medialink";

export const simdunkEventsData = [
	{
		eventId: 101, //id
		imgurl: eventsImg01, //event-img
		time: "22th - 26th May, 2024", //event-time
		title: "A Temporary Employee Of A News Agency", //title
		award: "Event Rewards: Total of 500 USDT + SR Players", //award
		path: "/events/simdunk/A-Temporary-Employee-Of-A-News-Agency", //router
		// richtext
		richtextArr: [
			{
				title: "Event Description",
				text: [
					"Be careful,The media is paralyzed by food poisoning at several news agencies in the city! Government seeks citizens to provide the Tournament Highlights!",
					"Participate in the test, share exciting content (operation skills, interesting data, funny BUG, unique NFT, funny complaints, etc.) and win official gifts! Daily selection of 10 unique submissions, send 10 USDT +SR Player-Yonatan or Effy.",
				],
			},
			{
				title: "Event Duration",
				text: ["22th - 26th May, 2024"],
			},
			{
				title: "Event Rules",
				text: [
					`Follow <a href='${userCommunityData.twitterSimdunk.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimDunk</a> Official and <a href='${userCommunityData.twitter.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimSports</a>.`,
					`<a href='${userCommunityData.discord.link}'  target='_blank' rel='nofollow noopener noreferrer'>Join Discord ${userCommunityData.discord.link}</a>`,
					"Submit exciting content to us (such as play tricks, interesting data, funny bugs, unique NFTs, and funny complaints).",
				],
			},
			{
				title: "Event Rewards",
				text: [
					"10USDT+SR Player-Yonatan or Effy.",
					"(the list of winners will be announced every day, please contact us through Discord to distribute the rewards after the list is released).",
				],
			},
		],
		// leagueTable
		leagueTableData: {
			isLoading: false, //显示
			state: false, //是否请求后台数据
			title: "Winners", //title
			tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
			tableContent: [], //内容
		},
	},
	{
		eventId: 102,
		imgurl: eventsImg02,
		time: "31th May - 14th June, 2024",
		title: "An Invitation To Basketball Hackers (Second edition)",
		award: "Event Rewards: Total of 350 USDT + Gift Packs",
		path: "/events/simdunk/An-Invitation-To-Basketball-Hackers",
		richtextArr: [
			{
				title: "Event Description",
				text: [
					"Ready for find out the biggest secret in basketball SimDunk Hackers is about to unveil the mystery and provide a thrilling treasure hunt for all brave players!",
					"In the SimDunk Basketball Hacks Treasure Hunt, challenge your skills and win exciting prizes through an 11-point mode.Every game may be the key to unlocking the door of the secret treasure.",
					"As long as you dare to challenge,will have a chance to get the mysterious Simdunk basketball hackers badge props and become a true basketball legend!",
					"Join the treasure hunt,explore the endless wonders of basketball,and conquer the court with other SimDunk hackers!",
				],
			},
			{
				title: "Event Duration",
				text: ["31th May - 14th June, 2024"],
			},
			{
				title: "Event Rules",
				text: [
					`Follow <a href='${userCommunityData.twitterSimdunk.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimDunk</a> Official and <a href='${userCommunityData.twitter.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimSports</a>.`,
					`<a href='${userCommunityData.discord.link}'  target='_blank' rel='nofollow noopener noreferrer'>Join Discord ${userCommunityData.discord.link}</a>`,
					"Select the top 10 players who have accumulated the largest number of SimDunk. ",
					"Basketball Hacker Badges to distribute rewards (use NFT player and participate in the 11-point match will randomly receive treasure chest. Different numbers of SimDunk Basketball Hacker Badges can be obtained through the treasure chests) .",
					"The SimDunk Basketball Hacker Badge will be available for exchange materials after the event ends.",
				],
			},
			{
				title: "Event Rewards",
				text: [
					"Top1: 100USDT + NFT Gift Pack-full training SSR Player Jovani+Chrono Cube II + Energy Tuner R",
					"Top2: 80USDT + NFT Gift Pack-full training R Player Eloá+Chrono Cube II + Energy Tuner R",
					"Top3: 50USDT + NFT Gift Pack-full training N Player Jawad+Chrono Cube I + Energy Tuner R",
					"Top4 - 10: 20 USDT per person + R-Card Full Training Gift Pack",
				],
			},
		],
		leagueTableData: {
			isLoading: false, //显示
			state: false, //是否请求后台数据
			title: "Winners", //title
			tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
			tableContent: [], //内容
		},
	},
	// {
	// 	eventId: 103,
	// 	imgurl: eventsImg03,
	// 	time: "22th May - 20th June, 2024",
	// 	title: "SKill Master",
	// 	award: "Event Rewards: Total of 380 USDT + $3500DUNK + Gift avatar NFTs",
	// 	path: "/events/simdunk/SKill-Master",
	// 	richtextArr: [
	// 		{
	// 			title: "Event Description",
	// 			text: [
	// 				"Meet the real challenge of qualifying!",
	// 				"SimDunk Central Tower is ready to reveal the list which recording the strongest player in qualifying!",
	// 				"In this fierce competition,there will be five ranking lists:points, steals, assists, blocks and rebounds!Do you dare to challenge the top of the list?",
	// 			],
	// 		},
	// 		{
	// 			title: "Event Duration",
	// 			text: ["22th May - 20th June, 2024"],
	// 		},
	// 		{
	// 			title: "Event Rules",
	// 			text: [
	// 				`Follow <a href='${userCommunityData.twitterSimdunk.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimDunk</a> Official and <a href='${userCommunityData.twitter.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimSports</a>.`,
	// 				`<a href='${userCommunityData.discord.link}'  target='_blank' rel='nofollow noopener noreferrer'>Join Discord ${userCommunityData.discord.link}</a>`,
	// 				"Users need to participate in qualifying matches then results will be recorded.",
	// 				"The Top10 ranking will be updated daily on Discord and Twitter.",
	// 				"The final ranking will be released on June 24.",
	// 			],
	// 		},
	// 		{
	// 			title: "Event Rewards",
	// 			text: [
	// 				"Top1: 80USDT + $1000DUNK + Specific List Top10 avatar NFT",
	// 				"Top2: 50USDT + $800DUNK + Specific List Top10 avatar NFT",
	// 				"Top3: 30USDT + $500DUNK + Specific List Top10 avatar NFT",
	// 				"Top4-10: 20USDT + $200DUNK + Specific List Top10 avatar NFT",
	// 			],
	// 		},
	// 	],
	// 	leagueTableData: {
	// 		isLoading: false, //显示
	// 		state: false, //是否请求后台数据
	// 		title: "Winners", //title
	// 		tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
	// 		tableContent: [], //内容
	// 	},
	// },
	{
		eventId: 104,
		imgurl: eventsImg04,
		time: "22th May - 20th June, 2024",
		title: "$Dunk Hunter",
		award: "Event Rewards: Total of 670 USDT + $6400DUNK + Gift avatar NFT Whitelists",
		path: "/events/simdunk/$Dunk-Hunter",
		richtextArr: [
			{
				title: "Event Description",
				text: [
					"SimDunk  Alpha TestII is Coming!",
					"Ready to become the top $Dunk Hunter?",
					"Accumulate $DUNK through qualifying and become a token holder of the city!",
					"Beat other players and win special prizes!",
				],
			},
			{
				title: "Event Duration",
				text: ["22th May - 20th June, 2024"],
			},
			{
				title: "Event Rules",
				text: [
					`Follow <a href='${userCommunityData.twitterSimdunk.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimDunk</a> Official and <a href='${userCommunityData.twitter.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimSports</a>.`,
					`<a href='${userCommunityData.discord.link}'  target='_blank' rel='nofollow noopener noreferrer'>Join Discord ${userCommunityData.discord.link}</a>`,
					"After release Mint Energy Tuner-R on SimSports official website and use NFT player to participate in qualifying matches to obtain $DUNK output permissions.",
					"The top 50 rankings of $Dunk owners will be updated daily on Discord and Twitter.",
					"The final ranking will be released on June 24.",
				],
			},
			{
				title: "Event Rewards",
				text: [
					"Top1: 100USDT + $1000DUNK + Genesis NFT Whitelist",
					"Top2: 80USDT + $500DUNK + Genesis NFT Whitelist",
					"Top3: 60USDT + $500DUNK + Genesis NFT Whitelist",
					"Top4-10: 30USDT + $100DUNK + Genesis NFT Whitelist",
					"Top11-20: 10USDT + $100DUNK + Genesis NFT Whitelist",
					"Top21-50: 5USDT + $100DUNK + Genesis NFT Whitelist",
				],
			},
		],
		leagueTableData: {
			isLoading: false, //显示
			state: false, //是否请求后台数据
			title: "Winners", //title
			tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
			tableContent: [], //内容
		},
	},
	{
		eventId: 105,
		imgurl: eventsImg05,
		time: "17th May - 17th August, 2024",
		title: "Receive Tens Of Millions Of DUNK Airdrops",
		award: "Event Rewards: Tens of millions of DUNK airdrops and limited edition NFTs",
		path: "/events/simdunk/Receive-Tens-Of-Millions-Of-DUNK-Airdrops",
		richtextArr: [
			{
				title: "Event Description",
				text: [
					"When users reach the corresponding level, they need to take the initiative to submit information in the form. SimSports will use the order of form submission by qualified users as the basis for qualification ranking.",
					"At the end of the qualification acquisition time, the number of qualified people in the Ten Million Dunk Sharing event must reach 2% of the total number of people in the Discord community. Rewards for this event will be issued, otherwise no rewards will be issued!",
					"The calculation method for sharing dunk tokens is: user zealy points/total points of all zealy users = percentage of users receiving airdrops.",
				],
			},
			{
				title: "Event Duration",
				text: ["17th May - 17th August, 2024"],
			},
			{
				title: "Event Rewards",
				text: [
					"1.Reach Discord level 10 to be eligible to share tens of millions of dunk tokens.",
					"2.If the Discord level reaches level 15, you will be eligible for the Creation Whitelist*1, with a total of 500.",
					"3.Reaching Discord level 20 will receive an SSR player blind box airdrop*1, with a total of 100 pieces.",
				],
			},
			{
				title: "Event Rules",
				text: [
					`Follow <a href='${userCommunityData.twitterSimdunk.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimDunk</a> Official and <a href='${userCommunityData.twitter.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimSports</a>.`,
					`<a href='${userCommunityData.discord.link}'  target='_blank' rel='nofollow noopener noreferrer'>Join Discord ${userCommunityData.discord.link}</a>`,
				],
			},
		],
		leagueTableData: {
			isLoading: false, //显示
			state: false, //是否请求后台数据
			title: "Winners", //title
			tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
			tableContent: [], //内容
		},
	},
	{
		eventId: 106,
		imgurl: eventsImg06,
		time: "22th May - 20th June, 2024",
		title: "Bind Wallet Address To Receive Airdrops",
		award: "Event Rewards: 100000 DUNK",
		path: "/events/simdunk/Bind-Wallet-Address-To-Receive-Airdrops",
		richtextArr: [
			{
				title: "Event Description",
				text: [
					"During the alpha2 test period, all users with bound wallet addresses can share the basic bonus pool of 100000 DUNK.",
				],
			},
			{
				title: "Event Duration",
				text: ["22th May - 20th June, 2024"],
			},
			{
				title: "Event Rules",
				text: [
					`Follow <a href='${userCommunityData.twitterSimdunk.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimDunk</a> Official and <a href='${userCommunityData.twitter.link}' target='_blank' rel='nofollow noopener noreferrer'>@SimSports</a>.`,
					`<a href='${userCommunityData.discord.link}'  target='_blank' rel='nofollow noopener noreferrer'>Join Discord ${userCommunityData.discord.link}</a>`,
				],
			},
		],
		leagueTableData: {
			isLoading: false, //显示
			state: false, //是否请求后台数据
			title: "Winners", //title
			tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
			tableContent: [], //内容
		},
	},
];
