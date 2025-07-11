// home-build
import React, { useState } from "react";
import "./index.less";
import { useNavigate } from "react-router-dom"; //router

import { Image } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import iconDownOutline from "@/assets/imgs/layout/icon-downoutline.png";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const [buildData, setBuildData] = useState([
		{
			titele: "Web3 Game Launchpad",
			text: "Balancing the gaming experience between Web2 and Web3, we aim to bring Web3 gamers who own assets and love gaming into our game through Proof-of-Play and NFT community gameplay. Creating a groundbreaking Web3 game available on the Apple App Store and Google Play.",
			link: "/build",
			downoutline: iconDownOutline,
			state: true,
		},
		{
			titele: "Web3 Game Creation",
			text: "SimSports will connect NFT brands with game creators to enrich the game with content and engagement. Additionally, by utilizing AI, we aim to enhance the fun of competitive gaming. The incorporation of AI-based features for enhanced gaming abilities will revolutionize the gaming experience.",
			link: "/build",
			downoutline: iconDownOutline,
			state: false,
		},
		{
			titele: "Web3 Cross Gaming Experience",
			text: "SimSports offers players a unique cross-game gaming experience where NFTs and token assets from one game can seamlessly be used or traded in other supported games. This will introduce new business models for all games.",
			link: "/build",
			downoutline: iconDownOutline,
			state: false,
		},
		{
			titele: "Web3 Gaming Node Network",
			text: "SimSports is pioneering distributed game servers to ensure security and fairness in Web3 gaming. By leveraging a dual-consensus mechanism (Proof-of-Work and Proof-of-Play), community members establish nodes to form a distributed gaming server network.",
			link: "/build",
			downoutline: iconDownOutline,
			state: false,
		},
		{
			titele: "E-Sports Events Driven By Fans",
			text: "SimSports will drive a new era of esports leagues through a fan-driven economic cycle. The game hosts both online and offline esports tournaments, promoting interactions between fans and collaborating celebrities, enhancing the social gaming experience, and expanding the utility of Web3 gaming assets.",
			link: "/build",
			downoutline: iconDownOutline,
			state: false,
		},
		{
			titele: "Web3 Gaming Metaverse",
			text: "The SimSports Metaverse will be players' second life, where they explore different game worlds together with other players. Meanwhile, a decentralized ID system ensures that players' gaming experiences become their blockchain assets.",
			link: "/build",
			downoutline: iconDownOutline,
			state: false,
		},
	]);
	// 点击展开数据
	const onOutline = (num: number) => {
		const updatedBuildData = [...buildData];
		if (num < buildData.length - 1) {
			updatedBuildData[num + 1].state = true;
			setBuildData(updatedBuildData);
		} else if (num === buildData.length - 1) {
			for (let i = 1; i < buildData.length; i++) {
				updatedBuildData[i].state = false;
			}
			setBuildData(updatedBuildData);
		}
	};
	return (
		<div className="main home-build">
			{buildData.map((item, index) => {
				return (
					<div className="home-build-content" key={index}>
						{item.state ? (
							<div className="content-box">
								<p className="home-build-title">BUILD</p>
								<h3 className="fillet-h3-title">{item.titele}</h3>
								<p className="fillet-paragraph-text02">{item.text}</p>
								<div className="build-link">
									<button
										onClick={() => {
											navigate("/build"); //回到首页
										}}
									>
										<span>MORE</span>
										<RightOutline className="icon-outline" />
									</button>
								</div>
								<Image src={item.downoutline} className="icon-downoutline" onClick={() => onOutline(index)} />
							</div>
						) : (
							<></>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default View;
