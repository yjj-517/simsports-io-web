// game-top
import React, { useState } from "react";
import "./index.less";
import { useNavigate } from "react-router-dom"; //router

import { Image, Swiper } from "antd-mobile";
import gameBgImg from "@/assets/imgs/game/top/game-bg-img.png";
import gameSimdunkLogo from "@/assets/imgs/layout/game-simdunk-logo.png";
import gameRw01 from "@/assets/imgs/game/top/game-rw01.png";
import gameRw02 from "@/assets/imgs/game/top/game-rw02.png";
import gameRw03 from "@/assets/imgs/game/top/game-rw03.png";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	// 展示数据
	const [topData] = useState([
		{
			imgurl: gameRw01,
		},
		{
			imgurl: gameRw02,
		},
		{
			imgurl: gameRw03,
		},
	]);
	// Swiper数据
	const gameRwItems = topData.map((item, index) => (
		<Swiper.Item key={index}>
			<Image src={item.imgurl} className="game-rw-img" />
		</Swiper.Item>
	));
	return (
		<div className="game-top">
			<Image src={gameBgImg} className="game-bg-img" />
			<div className="game-top-box">
				<div className="main">
					<Image src={gameSimdunkLogo} className="game-simdunk-logo" />
					<p className="fillet-paragraph-text04">
						3v3 real-time street basketball with NFT characters in a virtual world. Earn $Dunk coins, level up, join esports
						events, and trade NFTs for profits.
					</p>
					<button
						className="fillet-diamond-button"
						onClick={() => {
							navigate("/game/simdunk"); //到simdunk
						}}
					>
						VIEW GAME
					</button>
				</div>
				<div className="game-top-rw">
					<Swiper slideSize={60} trackOffset={25} stuckAtBoundary={false} indicator={() => null}>
						{gameRwItems}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default View;
