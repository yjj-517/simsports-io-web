// game-top
import React from "react";
import "./index.less";

import { downloadGameData } from "@/utils/medialink"; //共用链接

import { Image } from "antd-mobile";

import gameDownImg from "@/assets/imgs/downloadgame/game-down-img.png";
import googlePlay from "@/assets/imgs/downloadgame/google-play02.png";
import iosPlay from "@/assets/imgs/downloadgame/ios-play02.png";

const View: React.FC = () => {
	// downloadGame
	const downloadGame = (os: any) => {
		if (os == "googlePlay") {
			window.open(downloadGameData.googleLink, "_blank");
		} else if (os == "iosPlay") {
			window.open(downloadGameData.iosLink, "_blank");
		}
	};

	return (
		<div className="download-game">
			<Image src={gameDownImg} className="game-down-img" />
			<div className="download-box">
				<Image
					src={googlePlay}
					className="google-play"
					onClick={() => {
						downloadGame("googlePlay");
					}}
				/>
				<Image
					src={iosPlay}
					className="ios-play"
					onClick={() => {
						downloadGame("iosPlay");
					}}
				/>
			</div>
		</div>
	);
};

export default View;
