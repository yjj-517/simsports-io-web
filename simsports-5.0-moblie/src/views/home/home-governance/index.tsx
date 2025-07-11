// home-governance
import React, { useState } from "react";
import "./index.less";

import governanceBg from "@/assets/imgs/home/governance/governance-bg.png";
import { Image, Swiper } from "antd-mobile";
const View: React.FC = () => {
	const [governanceData] = useState([
		{
			name: "INFRASTRUCTURE DEVELOPMENT",
			text: "Addressing the requirements and maintenance rewards for constructing a distributed server node network for the gaming platform.",
		},
		{
			name: "GOVERNANCE PLATFORM",
			text: "Token voting for proposals and decision-making on investments, infrastructure pricing, game partners, and platform features.",
		},
		{
			name: "GAME OPERATIONS",
			text: "Leasing distributed servers, airdrops to attract players, and special gameplay rewards.",
		},
		{
			name: "ENHANCING GAMING EXPERIENCE",
			text: "Utilizing NFTs and Tokens on LaunchPad for game purchases, including exchanges and transaction fees.",
		},
	]);
	const governanceSwiper = governanceData.map((item, index) => (
		<Swiper.Item key={index}>
			<div className="governance-swiper">
				<Image src={governanceBg} className="governance-bg" />
				<div className="governance-swiper-content">
					<div className="box-content">
						<h3 className="fillet-h3-title"> {item.name}</h3>
						<p className="fillet-paragraph-text02">{item.text}</p>
					</div>
				</div>
			</div>
		</Swiper.Item>
	));
	return (
		<div className="main home-governance">
			<h2 className="home-h2-title">GOVERNANCE</h2>
			<p className="fillet-paragraph-text02 governance-title-text">
				The SimSports Metaverse will be players&apos; second life, where they explore different game worlds together with other
				players. Meanwhile, a decentralized ID system ensures that players&apos; gaming experiences become their blockchain
				assets.
			</p>
			<Swiper
				autoplay
				loop
				indicatorProps={{
					color: "white",
				}}
				style={{
					"--track-padding": " 0 0 0.16rem",
				}}
			>
				{governanceSwiper}
			</Swiper>
		</div>
	);
};

export default View;
