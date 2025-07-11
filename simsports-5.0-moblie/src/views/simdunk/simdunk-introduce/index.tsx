// simdunk-introduce
import React, { useState } from "react";
import "./index.less";

import { Image } from "antd-mobile";
import gameVideo from "@/assets/video/home/game-video.mp4"; //游戏视频
import iconPlay from "@/assets/imgs/layout/icon-play.png";
import videoImg from "@/assets/imgs/home/game/video-img.png";
const View: React.FC = () => {
	const [isPlay, setIsPlay] = useState<boolean>(false); //视频播放
	return (
		<div className="main simdunk-introduce">
			<h2 className="fillet-h2-title" style={{ textAlign: "left" }}>
				INTRODUCE
			</h2>
			<p className="fillet-paragraph-text02">
				SimDunk, the premier street league about to begin. SimDunk, the flagship project of SimSports Sports Club, attracts top
				ballers worldwide. It stands out with high-level matches and intense competition, bringing together a community of
				free-spirited individuals who embrace street basketball culture.
			</p>
			<p className="fillet-paragraph-text02">
				SimDunk&apos;s innovative and liberating rules encourage players to unleash their imagination and showcase their unique
				styles. Beyond traditional arenas, SimDunk&apos;s courts span the streets and open-air venues, offering players the
				freedom to sweat alongside vibrant walls. With abundant rewards, SimDunk celebrates individuality, passion, and freedom,
				redefining the allure of basketball and inspiring a new era for street basketball.
			</p>
			<div className="simdunk-video-box">
				{isPlay ? (
					<video className="simdunk-video" controls autoPlay>
						<source src={gameVideo} type="video/mp4" />
					</video>
				) : (
					<div className="simdunk-video-text">
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
		</div>
	);
};

export default View;
