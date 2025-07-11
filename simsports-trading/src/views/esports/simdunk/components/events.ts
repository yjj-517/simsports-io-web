// simdunk-EVEANTS数据
import eventsImg03 from "@/assets/imgs/esports/events/events-img-01.png";

export const simdunkEsportsData = [
	{
		eventId: 101,
		imgurl: eventsImg03,
		time: "13th - 19th May, 2024",
		title: '"Peak Competition" Alpha Memorial Esport Event',
		award: "Event Rewards: Total of 1700 USDT",
		path: "/e-sports/simdunk/Peak-Competition-Alpha-Memorial-Esport-Event",
		richtextArr: [
			{
				title: "Event Description",
				text: [
					'During the SimDunk Alpha-2 testing period, players who own staked NFT players and reach the "Hoops Warrior V" rank or above in the ranking matches can Mint "EnergyTuner M" NFT on the Simsports official website to qualify for participation in the "Peak Competition" Alpha Memorial Event. The event will be scheduled and arranged by the game operators and announced in the community.',
					'In this "Peak Competition" Alpha Memorial Event, rewards will be distributed to all participating teams, and the overall MVP of the event will be selected.',
				],
			},
			{
				title: "Event Registration",
				text: [
					'1.Users must own NFT characters and have staked them to participate in the alpha season ranking matches, achieving the "Hoops Warrior V" rank or above.',
					'2.Users who reach "Hoops Warrior V" or higher at the end of the season will automatically enter the "EnergyTuner M" NFT Mint whitelist with the wallet address linked to their Game ID. "EnergyTuner M" will go on sale on the Simsports official website starting at 12:00 PM UTC +8 on May 3, 2024, with a total of 16 "EnergyTuner M" NFTs available.',
					'3.Users holding "EnergyTuner M" NFTs can freely invite teammates to form teams (anyone of the three must have whitelist qualifications) and use the wallet address holding "EnergyTuner M" NFT to verify registration on the Simsports official website event page, filling in the game IDs and wallet addresses of the three players.',
					"4.Event schedules and results will be announced on the Simsports official website and in the community.",
				],
			},
			{
				title: "Schedule Description",
				text: [
					"1.The schedule will use random match groupings, which will be announced through the Discord community.",
					"2.If there are fewer than 16 participating teams, bye teams will be selected first, and the remaining teams will be randomly grouped for matches.",
					"3.The game officials will create a dedicated event group on Discord and invite participating players. The community will announce the referee accounts and notify the participants to add the referee accounts in advance (participants who fail to add the referee accounts will not be invited to participate and will lose their qualifications).",
				],
			},
			{
				title: "Competition Rules",
				text: [
					"1.After the event starts, game operators will regularly invite participants to the matches, conduct the entire observation and record the results of the matches.",
					"2.If a participant fails to arrive on time after the match starts, they will be deemed to have lost. If teammates are absent, the participant will be asked if they agree to add a computer for the match. If agreed, the referee will add a computer to the match.",
					"3.The results of the matches will be announced after the matches end each day.",
					"4.Progress will proceed with the quarterfinals, semifinals, and ultimately the finals and the 3rd-4th place matches.",
				],
			},
			{
				title: "Event Duration",
				text: ["13th - 19th May, 2024"],
			},
			{
				title: "Event Rewards",
				text: [
					"Total of 1700 USDT",
					"Top 1: 480 USDT <br> Top 2: 360 USDT <br> Top 3: 240 USDT <br> Top 4: 120 USDT <br/> Top 5-8: 60 USDT (240) <br> Top 9-16: 30 USDT (240) <br> ",
					"Overall MVP: 20 USDT (calculated based on total ranking points in all matches)",
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
		formTableData: {
			isLoading: false, //显示
			state: true, //是否请求后台数据
			title: "Participating teams: ", //title
			tableTitle: ["Ticket ID", "Team Name", "Team Captain", "Team Members"], //标题
			tableContent: [], //内容
		},
	},
];
