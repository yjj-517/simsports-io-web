// home-game
import React, { useState } from "react";
import "./index.less";
import { useNavigate } from "react-router-dom"; //router

import { Image } from "antd-mobile";
import iconPlay from "@/assets/imgs/layout/icon-play.png";
import gameVideo from "@/assets/video/home/game-video.mp4"; //游戏视频
import arrowImg from "@/assets/imgs/home/game/arrow-img.png";
import videoImg from "@/assets/imgs/home/game/video-img.png";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const [isPlay, setIsPlay] = useState<boolean>(false); //视频播放
	return (
		<div className="main home-game">
			<h2 className="home-h2-title" style={{ color: "#fff" }}>
				ESPORTS
			</h2>
			<h2 className="home-h2-title">GAMES</h2>
			<p className="fillet-paragraph-text02 home-title-text">
				Esports games have unlimited possibilities in the world of Web3, and are the future of games.
			</p>
			<Image src={arrowImg} className="arrow-img" />
			<div className="game-video-box">
				{isPlay ? (
					<video className="game-video" controls autoPlay>
						<source src={gameVideo} type="video/mp4" />
					</video>
				) : (
					<div className="game-video-text">
						<Image src={videoImg} className="video-img" />
						<Image
							src={iconPlay}
							className="icon-play"
							onClick={() => {
								setIsPlay(true);
							}}
						/>
					</div>
				)}
			</div>
			<h3 className="fillet-h3-title">SIMDUNK</h3>
			<p className="fillet-paragraph-text02 simdunk-text">
				3v3 real-time street basketball with NFT characters in a virtual world. Earn $Dunk coins, level up, join esports events,
				and trade NFTs for profits.
			</p>
			<button
				className="fillet-diamond-button"
				onClick={() => {
					navigate("/game"); //回到首页
				}}
			>
				VIEW GAME
			</button>
		</div>
	);
};

export default View;
