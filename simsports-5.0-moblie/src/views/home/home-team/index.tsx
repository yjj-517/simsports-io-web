// home-team
import React, { useState } from "react";
import "./index.less";

import { Image, Swiper } from "antd-mobile";
import teamCloseup01 from "@/assets/imgs/home/team/team-closeup01.png";
import teamCloseup02 from "@/assets/imgs/home/team/team-closeup02.png";
import teamCloseup03 from "@/assets/imgs/home/team/team-closeup03.png";
import teamCloseup04 from "@/assets/imgs/home/team/team-closeup04.png";
import teamCloseup05 from "@/assets/imgs/home/team/team-closeup05.png";

const View: React.FC = () => {
	// team数据
	const [teamData] = useState([
		{
			imgurl: teamCloseup01,
			name: "Vivian",
			introduce: "Founding Member",
			backgroundColor: "linear-gradient(180deg, #15d4a7 0%, #bdfe8a 56%, #e7ffde 100%)",
		},
		{
			imgurl: teamCloseup02,
			name: "Jin",
			introduce: "Founding Member",
			backgroundColor: "linear-gradient(180deg, #dfba5a 0%, #ef6f6f 58%, #ffe6d3 100%)",
		},
		{
			imgurl: teamCloseup03,
			name: "Corvo",
			introduce: "Game System creator",
			backgroundColor: "linear-gradient(180deg, #37b8e0 0%, #c768e8 57%, #d6dcff 100%)",
		},
		{
			imgurl: teamCloseup04,
			name: "Parker",
			introduce: "Global Web3 & Games partner network operation",
			backgroundColor: "linear-gradient(180deg, #b5e848 0%, #539fe5 60%, #cef3ff 100%)",
		},
		{
			imgurl: teamCloseup05,
			name: "Luke",
			introduce: "Global games publishing",
			backgroundColor: "linear-gradient(180deg, #443a2c 0%, #f5ebdc 59%, #ead2b7 100%)",
		},
	]);
	// Swiper数据
	const items = teamData.map((item, index) => (
		<Swiper.Item key={index}>
			<div className="home-team-swiper" style={{ background: item.backgroundColor }}>
				<Image src={item.imgurl} className="team-closeup-img" />
				<p className="team-closeup-title">{item.name}</p>
				<p className="team-closeup-text">{item.introduce}</p>
			</div>
		</Swiper.Item>
	));
	return (
		<div className="home-team">
			<div className="main">
				<h2 className="home-h2-title">GAMING TEAM</h2>
				<p className="fillet-paragraph-text02">
					Together, we become a powerful force driving community development, defining the new future of Web3 esports gaming.{" "}
				</p>
			</div>
			<div className="home-team-box">
				<Swiper slideSize={55} trackOffset={30} stuckAtBoundary={false} indicator={() => null}>
					{items}
				</Swiper>
			</div>
		</div>
	);
};

export default View;
