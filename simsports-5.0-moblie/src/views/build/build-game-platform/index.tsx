// build-game-platform
import React, { useState } from "react";
import "./index.less";

import { Image } from "antd-mobile";
import iconDownOutline from "@/assets/imgs/layout/icon-downoutline.png";
import platformCard01 from "@/assets/imgs/build/build-game-platform/platform-card01.png";
import platformCard03 from "@/assets/imgs/build/build-game-platform/platform-card03.png";

const View: React.FC = () => {
	const [isLaunchpad] = useState<boolean>(true); //game-launchpad
	const [isCreation, setIsCreation] = useState<boolean>(false); //game-creation
	const [isExperienced, setIsExperienced] = useState<boolean>(false); //game-experience
	const [isNetwork, setIsNetwork] = useState<boolean>(false); //game-network
	// 展示数据
	const [platformData] = useState([
		{
			title: "Web3 Gaming Metaverse",
			text: [
				"Metaverse is the place for game guild, live steam, and topics discussion.",
				"Players can create a second life in the SimSports Metaverse, where they can discuss gaming experiences with other players, explore new games and video content, and spectate gaming tournaments together.",
				"Based on a decentralized gaming ID domain system and team ID domain system, players can save their gaming achievements as their assets by the blockchain.",
			],
		},
		{
			title: "Web3 Game Creation",
			text: [
				"Integrating Web3 IP makes games great content and engagements:",
				"Web3 IP Licensing: Connects NFT brands with game creators by SimSports IP platform. NFT IP holders can authorize usage of its NFT to game creators, receiving commissions from in-game NFT or token revenue.",
				"We are negotiating partnerships with NFT holders communities include BAYC, Azuki, Doodles, etc.",
			],
		},
		{
			title: "E-Sports Events Driven By Fans",
			text: [
				"SimSports revolutionizes ESports leagues through a fan-driven economy. The game facilitates both online and offline ESports tournaments and collaborates with celebrities for participation.",
				"Players holding NFTs and Tokens can engage in discussions and strategize, fostering interaction between fans and competitors. This enhances the gaming experience, enriches social dynamics, and expands the utility of Web3 game assets.",
			],
		},
	]);

	return (
		<div className="main build-game-platform">
			<h2 className="fillet-h2-title" style={{ textAlign: "left" }}>
				Gaming Platform Infrastructure
			</h2>
			{/*  game-launchpad*/}
			{isLaunchpad ? (
				<div className="game-launchpad">
					<Image src={platformCard01} className="platform-card01" />
					<div className="platform-text">
						<h3 className="fillet-h3-title02">Web3 Game Co-Publish</h3>
						<div className="text-box-list">
							<p className="fillet-paragraph-text04">Together we will create Web3 games rocking on IOS and Google play.</p>
						</div>
						<div className="text-box-list">
							<p className="fillet-paragraph-text04">Game Design/Devs Guide</p>
							<p className="fillet-paragraph-text04">
								Guide developers in balancing Web2 and Web3 for game design, NFT creation, and web3 functionality. Create a gaming
								experience Web2 friendly, while integrating fun elements of asset transactions and community-driven play from
								Web3.
							</p>
						</div>
						<div className="text-box-list">
							<p className="fillet-paragraph-text04">Crypto level Targeting UA</p>
							<p className="fillet-paragraph-text04">
								With over 100k web3 users’ social media data, and SimSports team over 10 million mobile users data, we deliver
								web3 games targeting UA strategy.
							</p>
						</div>
						<div className="text-box-list">
							<p className="fillet-paragraph-text04">Co-Publish</p>
							<p className="fillet-paragraph-text04">
								By utilizing Proof-of-Play and NFT community gameplay, we funnel web3 gamers who own assets and love web3 games
								into new games, kickstarting new games swiftly.
							</p>
						</div>
					</div>
					<Image
						src={iconDownOutline}
						className="icon-downoutline"
						onClick={() => {
							setIsCreation(true);
						}}
					/>
				</div>
			) : (
				<></>
			)}
			{/* game-creation */}
			{isCreation ? (
				<div className="game-creation">
					<div className="game-creation-box">
						{platformData.map((item, index) => {
							return (
								<div className="game-creation-list" key={index}>
									<div className="list-box">
										<h3 className="fillet-h3-title02">{item.title}</h3>
										{item.text.map((t, i) => {
											return (
												<p className="fillet-paragraph-text04" key={i}>
													{t}
												</p>
											);
										})}
									</div>
									<div className="line-box">
										<div className="list-line-box"></div>
										<div className="list-line-box"></div>
									</div>
								</div>
							);
						})}
					</div>
					<Image
						src={iconDownOutline}
						className="icon-downoutline"
						onClick={() => {
							setIsExperienced(true);
						}}
					/>
				</div>
			) : (
				<></>
			)}
			{/*game-experience  */}
			{isExperienced ? (
				<div className="game-experience">
					<Image src={platformCard03} className="platform-card03" />
					<div className="experience-text">
						<h3 className="fillet-h3-title02">Web3 Cross Gaming Experience</h3>
						<div className="text-box-list">
							<p className="fillet-paragraph-text04">
								SimSports offers players a unique cross-games playing experience, where your one game’ NFTs and tokens can be
								seamlessly utilized or trades across other supported games.
							</p>
							<p className="fillet-paragraph-text04">
								This extends the life time for a Web3 game and gamers, also increasing engagements. Web3 cross gaming experience.
							</p>
							<p className="fillet-paragraph-text04">
								To enable cross-games experience, SimSports will also create web2 friendly decentralized NFT marketplace and token
								exchange for each game. The marketplace will be using SimSports liquidity base and technology infrastructure, with
								KYCs, fiat pay, and mobile support.
							</p>
							<p className="fillet-paragraph-text04">
								More over, the NFT marketplace and token exchange will also the new business model for each games with platform
								governance token as trading free.
							</p>
						</div>
					</div>
					<Image
						src={iconDownOutline}
						className="icon-downoutline"
						onClick={() => {
							setIsNetwork(true);
						}}
					/>
				</div>
			) : (
				<></>
			)}
			{/* game-network */}
			{isNetwork ? (
				<div className="game-network">
					<h3 className="fillet-h3-title02">Web3 Gaming Node Network</h3>
					<p className="fillet-paragraph-text04">
						SimSports is pioneering distributed game servers to ensure security and fairness in Web3 gaming. By leveraging a
						dual-consensus mechanism (Proof-of-Work and Proof-of-Play), Token community members establish nodes to form a
						distributed gaming server. This checks and verifies data security while being rewarded with platform Tokens.
					</p>
					<p className="fillet-paragraph-text04">
						SimSports platform also offers the necessary development and operational tools, empowering game creators to utilize
						distributed server clusters and on-chain data processing.
					</p>
					<Image
						src={iconDownOutline}
						className="icon-downoutline"
						onClick={() => {
							setIsCreation(false);
							setIsExperienced(false);
							setIsNetwork(false);
						}}
					/>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default View;
