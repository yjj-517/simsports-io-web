// governance-utilities
import React, { useState } from "react";
import "./index.less";

import { Image } from "antd-mobile";
import utilitiesBravo01 from "@/assets/imgs/governance/utilities-bravo01.png";
import utilitiesBravo02 from "@/assets/imgs/governance/utilities-bravo02.png";
import utilitiesBravo03 from "@/assets/imgs/governance/utilities-bravo03.png";
import utilitiesBravo04 from "@/assets/imgs/governance/utilities-bravo04.png";

const View: React.FC = () => {
	const [utilitiesData] = useState([
		{
			title: "Governance Platform",
			imgUrl: utilitiesBravo01,
			text: [
				"Utilizing a Token voting platform to initiate proposals and cast votes, with execution carried out by the SimSports team, for the governance of the gaming platform.",
				"Areas of governance include: the allocation of investment funds, pricing of infrastructure services, selection of game partners, and development of platform-related features, among others.",
			],
		},
		{
			title: "Game Operations",
			imgUrl: utilitiesBravo02,
			text: [
				"Earn fee from SimSports NFT marketplace and Token Exchange.",
				"Conducting airdrop activities to attract players across games on the platform.",
				"Providing special gameplay rewards within the games.",
			],
		},
		{
			title: "Enhancing the Gaming Experience",
			imgUrl: utilitiesBravo03,
			text: [
				"Using NFTs and Tokens in the LaunchPad for purchasing various games.",
				"Acquiring NFTs and Tokens on exchanges for different games, as well as covering transaction gas and fees.",
				"Use on Fans driven ESports events.",
			],
		},
		{
			title: "Participation in Infrastructure Development",
			imgUrl: utilitiesBravo04,
			text: [
				"Addressing the requirements and maintenance rewards for constructing a distributed server node network for the gaming platform.",
			],
		},
	]);
	return (
		<div className="main governance-utilities">
			<h2 className="fillet-h2-title" style={{ textAlign: "left" }}>
				$Bravo Utilities
			</h2>
			<div className="governance-utilities-box">
				{utilitiesData.map((item, index) => {
					return (
						<div className="list-box" key={index}>
							<Image src={item.imgUrl} className="utilities-bravo" />
							<div className="box-content">
								<h3 className="fillet-h3-title" style={{ textAlign: "left" }}>
									{item.title}
								</h3>
								{item.text.map((item, index) => {
									return (
										<p key={index} className="fillet-paragraph-text04">
											{item}
										</p>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default View;
