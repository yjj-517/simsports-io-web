// home-team
import React, { useState } from "react";
import "./index.less";

import team01 from "@/assets/imgs/home/team/team01.png";
import team02 from "@/assets/imgs/home/team/team02.png";
import team03 from "@/assets/imgs/home/team/team03.png";
import team04 from "@/assets/imgs/home/team/team04.png";

const View: React.FC = () => {
	// 展示数据-轮播图
	const [teamData] = useState([
		{
			imgurl: team01,
			name: "Vivian",
			introduce: "Game Producer",
		},
		{
			imgurl: team02,
			name: "Rare",
			introduce: "Game System Planner",
		},
		{
			imgurl: team03,
			name: "Corvo",
			introduce: "Game Combat Planner",
		},
		{
			imgurl: team04,
			name: "Hailey",
			introduce: "Game Art",
		},
	]);
	return (
		<>
			<div className="main home-team">
				<h2 className="fillet-h2-title">GAMING TEAM</h2>
				<p className="fillet-paragraph-text02 team-text01">
					The SimHoop team is composed of gaming industry elites from major global game companies, united by a shared passion for
					street basketball and esports. They not only bring extensive experience in game development but are genuine enthusiasts
					in both realms.
				</p>
				<p className="fillet-paragraph-text02 team-text02">
					SimHoop's mission is to create a community full of passion and competitive spirit, providing players with a platform to
					challenge themselves, grow in competition, and collectively forge their own street basketball esports legend. The team
					places emphasis not only on enhancing player skills but also on establishing a gaming culture where players actively
					participate and co-create. Through the team's dedication and the active involvement of players, SimHoop is committed to
					seamlessly merging street basketball and esports, crafting an engaging and immersive gaming world for players.
				</p>
				<div className="team-list">
					{teamData.map((item, index) => {
						return (
							<div key={index} className="list-box">
								<img src={item.imgurl} className="team-list-img" />
								<div className="team-list-box">
									<h3 className="name-title">{item.name}</h3>
									<p className="introduce-text">{item.introduce}</p>
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
