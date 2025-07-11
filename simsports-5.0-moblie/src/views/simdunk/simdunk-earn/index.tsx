// simdunk-earn
import React, { useState } from "react";
import "./index.less";

import { Image, Swiper } from "antd-mobile";
import earnGroup from "@/assets/imgs/simdunk/earn/earn-group.png";
import iconRewards from "@/assets/imgs/simdunk/earn/icon-rewards.png";
import iconStar from "@/assets/imgs/simdunk/earn/icon-star.png";
import iconRound from "@/assets/imgs/simdunk/earn/icon-round.png";
const View: React.FC = () => {
	// 展示数据
	const [earnData] = useState([
		{
			title: "Esports Events",
			imgurl: iconRewards,
			text: "As one of the core gameplay modes hosted by SimSports, we regularly hold various types of competitions, providing a platform for all users holding NFT players to showcase their skills. Here, you can compete against top players worldwide, showcasing your skills and strategies. What's more, winning matches also gives you the chance to earn lucrative $Dunk rewards! Join the SimDunk esports world and kickstart your esports journey!",
		},
		{
			title: "Seasonal Ranked Matches",
			imgurl: iconStar,
			text: 'SimDunk\'s ranked matches will be held in a seasonal format, where all players can participate and earn prestigious ranks and in-game rewards. Additionally, players who own NFT characters can join the ranked matches bounty mode by purchasing "Energy Tuner R" NFT. Players earn bounty points based on the outcome of actual matches, and the game system settles rankings daily at UTC 00:00, issuing $Dunk as bounty rewards.',
		},
		{
			title: "NFT Game Staking",
			imgurl: iconRound,
			text: "In SimDunk, NFT players must stake to enter the game. Upon initial staking, all NFT players gain privileges to earn NFT points for a certain period. Players can earn NFT points through matches like 3v3 matches and 11-point matches. The game system settles player points daily and rewards $Dunk as NFT game staking rewards.",
		},
	]);
	// Swiper数据
	const gameRwItems = earnData.map((item, index) => (
		<Swiper.Item key={index}>
			<div className="simdunk-earn-swiper">
				<Image src={earnGroup} className="earn-group-img" />
				<div className="swiper-box">
					<Image src={item.imgurl} className="earn-group-icon" />
					<h3 className="fillet-h3-title02">{item.title}</h3>
					<p className="fillet-paragraph-text04">{item.text}</p>
				</div>
			</div>
		</Swiper.Item>
	));
	return (
		<div className="simdunk-earn">
			<div className="main">
				<h2 className="fillet-h2-title">GAMEPLAY</h2>
				<p className="fillet-paragraph-text02">
					As a real-time sports esports game, SimDunk will gradually introduce various game modes and events centered around PvP
					core gameplay. Players can participate in regular PvP matches and seasonal ladder matches to earn in-game $Dunk coins by
					holding PvP player NFTs.
				</p>
			</div>
			<div className="simdunk-earn-box">
				<Swiper slideSize={82} trackOffset={9} defaultIndex={1} stuckAtBoundary={false} indicator={() => null}>
					{gameRwItems}
				</Swiper>
			</div>
		</div>
	);
};

export default View;
