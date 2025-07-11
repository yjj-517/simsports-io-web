// home-gameplay
import React, { useState } from "react";
import "./index.less";

import gameplay01 from "@/assets/imgs/home/gameplay/gameplay01.png";
import gameplay02 from "@/assets/imgs/home/gameplay/gameplay02.png";
import gameplay03 from "@/assets/imgs/home/gameplay/gameplay03.png";

const View: React.FC = () => {
	// 展示数据-轮播图
	const [gameplayData] = useState([
		{
			imgurl: gameplay01,
			title: "PvE Events",
			text: "As one of the main daily gameplay modes, PvE events support real-time online matchmaking, allowing players to engage in competitive battles with global opponents. These events also incorporate adaptive AI, automatically adjusting its difficulty based on the player's skill level. PvE events encompass various modes such as 3v3 matches, 11-point matches, 1v1 duels, and more. Players can obtain fundamental in-game materials for nurturing their players by participating in PvE events.",
		},
		{
			imgurl: gameplay02,
			title: "Ranked PvP Matches",
			text: "As the central PvP gameplay and event in the game, Ranked PvP Matches offer a fully open, real-time online competitive experience for players worldwide. Operating on a seasonal basis, players engage in one-on-one battles, striving to elevate their rankings and divisions, showcasing their skills to a global audience. The ranking system assesses player performance based on victories, skill level, and overall contribution to the team, allocating ranks accordingly. Game season rewards, unique to each season, are provided based on performance and final rankings at the conclusion of each season.",
		},
		{
			imgurl: gameplay03,
			title: "Esports Events",
			text: "SimHoop's official platform will regularly host esports events based on the game's core PvP gameplay, offering a more thrilling gaming competition experience for players worldwide. Players have the freedom to form teams and sign up for the events, joining forces with friends or other members of the gaming community to create powerful squads. Participation in these events is not just a test of skills; SimHoop will provide unique in-game rewards for participating teams and individuals based on their performance and final rankings.",
		},
	]);
	return (
		<>
			<div className="main home-gameplay">
				<h2 className="fillet-h2-title">GAMEPLAY</h2>
				<p className="fillet-paragraph-text02">
					As a real-time competitive electronic sports basketball game, SimHoop will introduce various game modes and electronic
					sports events centered around PvP (Player versus Player) core gameplay. Players have the option to engage in both PvE
					(Player versus Environment) and PvP activities, acquiring in-game items to enhance their players. This, in turn, enables
					them to participate in a variety of official electronic sports tournaments organized by the game, earning additional
					in-game rewards.
				</p>
				<div className="gameplay-list">
					{gameplayData.map((item, index) => {
						return (
							<div key={index} className="list-box">
								<img src={item.imgurl} className="gameplay-list-img" />
								<div className="gameplay-list-box">
									<h3 className="fillet-h3-title">{item.title}</h3>
									<p className="fillet-paragraph-text">{item.text}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default View;
