// simdunk-carousel
import React, { useState } from "react";
import "./index.less";
import { downloadGameData } from "@/utils/medialink"; //共用链接

import { Image, Swiper } from "antd-mobile";
import simdunkBanner01 from "@/assets/imgs/simdunk/carousel/simdunk-banner01.png";
import simdunkBanner02 from "@/assets/imgs/simdunk/carousel/simdunk-banner02.png";
import simdunkBanner03 from "@/assets/imgs/simdunk/carousel/simdunk-banner03.png";
import simdunkBanner04 from "@/assets/imgs/simdunk/carousel/simdunk-banner04.png";
import simdunkBanner05 from "@/assets/imgs/simdunk/carousel/simdunk-banner05.png";

import googlePlay from "@/assets/imgs/downloadgame/google-play.png";
import iosPlay from "@/assets/imgs/downloadgame/ios-play.png";

import iconWhitelist from "@/assets/imgs/simdunk/carousel/icon-whitelist.png";
import iconMask from "@/assets/imgs/simdunk/carousel/icon-mask.png";
import iconIphone from "@/assets/imgs/simdunk/carousel/icon-iphone.png";
import iconAndroid from "@/assets/imgs/simdunk/carousel/icon-android.png";
const View: React.FC = () => {
	// downloadGame
	const downloadGame = (os: any) => {
		if (os == "googlePlay") {
			window.open(downloadGameData.googleLink, "_blank");
		} else if (os == "iosPlay") {
			window.open(downloadGameData.iosLink, "_blank");
		}
	};
	// 展示数据-轮播图
	const [carouselData] = useState([
		{
			imgurl: simdunkBanner01,
		},
		{
			imgurl: simdunkBanner02,
		},
		{
			imgurl: simdunkBanner03,
		},
		{
			imgurl: simdunkBanner04,
		},
		{
			imgurl: simdunkBanner05,
		},
	]);
	//展示数据-simdunk数据
	const [simdunkData] = useState([
		{
			title: "CHAIN(S)",
			text: "",
			iconImg: [iconWhitelist],
		},
		{
			title: "DEVELOPED BY",
			text: "",
			iconImg: [iconMask],
		},
		{
			title: "GAME STATUS",
			text: "Alpha-2",
			iconImg: [],
		},
		{
			title: "PLATFORMS",
			text: "",
			iconImg: [iconIphone, iconAndroid],
		},
		{
			title: "GENRES",
			text: "Esport",
			iconImg: [],
		},
		{
			title: "PLAYER INFO",
			text: "3V3",
			iconImg: [],
		},
		{
			title: "COMPETITIVE FRAMEWORK",
			text: "PVP",
			iconImg: [],
		},
	]);

	// Swiper数据
	const gameRwItems = carouselData.map((item, index) => (
		<Swiper.Item key={index}>
			<div className="swiper-box">
				<Image src={item.imgurl} className="rotation-img" />
				<div className="carousel-download">
					{downloadGameData.gameLink ? (
						<>
							<div className="download-box">
								<Image
									src={googlePlay}
									className="icon-google"
									onClick={() => {
										downloadGame("googlePlay");
									}}
								/>
								<Image
									src={iosPlay}
									className="icon-google"
									onClick={() => {
										downloadGame("iosPlay");
									}}
								/>
							</div>
						</>
					) : (
						<button className="download-button open-soon">
							<span>Opening Soon</span>
						</button>
					)}
				</div>
			</div>
		</Swiper.Item>
	));
	return (
		<div className="simdunk-carousel">
			<div className="carousel-box">
				<Swiper
					autoplay
					loop
					indicatorProps={{
						color: "white",
					}}
				>
					{gameRwItems}
				</Swiper>
			</div>
			<div className="main">
				<div className="simdunk-game">
					{simdunkData.map((item, index) => {
						return (
							<div key={index} className="list-box">
								<p className="list-box-title">{item.title}</p>
								<div className="list-box-explain">
									{item.iconImg.map((t, i) => {
										return <Image key={i} src={t} className="explain-img" />;
									})}
									{item.text ? <span className="explain-text">{item.text}</span> : <></>}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default View;
