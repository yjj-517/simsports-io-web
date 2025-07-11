// game-esports
import React, { useState, useEffect } from "react";
import "./index.less";

import { Image, Swiper } from "antd-mobile";
import esportsRwBg01 from "@/assets/imgs/game/esports/esports-rw-bg-01.png";
import esportsRwBg02 from "@/assets/imgs/game/esports/esports-rw-bg-02.png";
import esportsRwBg03 from "@/assets/imgs/game/esports/esports-rw-bg-03.png";
import esportsRwBg04 from "@/assets/imgs/game/esports/esports-rw-bg-04.png";
import esportsRwBg05 from "@/assets/imgs/game/esports/esports-rw-bg-05.png";
import esportsRwLogo01 from "@/assets/imgs/game/esports/esports-rw-logo-01.png";
import esportsRwLogo02 from "@/assets/imgs/game/esports/esports-rw-logo-02.png";
import esportsRwLogo03 from "@/assets/imgs/game/esports/esports-rw-logo-03.png";
import esportsRwLogo04 from "@/assets/imgs/game/esports/esports-rw-logo-04.png";
import esportsRwLogo05 from "@/assets/imgs/game/esports/esports-rw-logo-05.png";
const View: React.FC = () => {
	// 初始展示展示
	const [esportsPeople, setEsportsPeople] = useState({
		imgRwBgUrl: esportsRwBg01,
		imgRwLogoUrl: esportsRwLogo01,
		state: true,
	});
	// 展示数据
	const [esportsData, setEsportsData] = useState([
		{
			imgRwBgUrl: esportsRwBg01,
			imgRwLogoUrl: esportsRwLogo01,
			state: false,
		},
		{
			imgRwBgUrl: esportsRwBg02,
			imgRwLogoUrl: esportsRwLogo02,
			state: false,
		},
		{
			imgRwBgUrl: esportsRwBg03,
			imgRwLogoUrl: esportsRwLogo03,
			state: false,
		},
		{
			imgRwBgUrl: esportsRwBg04,
			imgRwLogoUrl: esportsRwLogo04,
			state: false,
		},
		{
			imgRwBgUrl: esportsRwBg05,
			imgRwLogoUrl: esportsRwLogo05,
			state: false,
		},
	]);
	// 修改数据
	const changeEsportsData = (num: number) => {
		setEsportsPeople(esportsData[num]);
		const updatedEsportsData = esportsData.map((item: any, index: any) => {
			return {
				...item,
				state: num === index,
			};
		});
		setEsportsData(updatedEsportsData);
	};
	useEffect(() => {
		changeEsportsData(1);
	}, []);
	// Swiper数据
	const esportsItems = esportsData.map((item, index) => (
		<Swiper.Item key={index}>
			<div className="game-swiper-box">
				<Image
					src={item.imgRwLogoUrl}
					className={"game-rw-logo-img " + (item.state ? "active" : "")}
					onClick={() => {
						changeEsportsData(index);
					}}
				/>
			</div>
		</Swiper.Item>
	));

	return (
		<div className="game-esports">
			<Image src={esportsPeople.imgRwBgUrl} className="game-esports-bg-img" />
			<div className="game-esports-box">
				<div className="main">
					<h2 className="fillet-h2-title">Web3 Esports starts with SimSports</h2>
					<p className="fillet-paragraph-text02">Games powered by SimSports through $BRAVO, imagination, and interoperability</p>
					<h3 className="fillet-h3-title">IN-HOUSE GAMES PLAN</h3>
				</div>
				<div className="game-esports-rw">
					<div className="game-espoets-swiper">
						<Swiper slideSize={24} trackOffset={0} indicator={() => null}>
							{esportsItems}
						</Swiper>
					</div>
				</div>
				<div className="game-esports-rw-line">
					{esportsData.map((item, index) => {
						return <div key={index} className={"list-box " + (item.state ? "active" : "")}></div>;
					})}
				</div>
			</div>
		</div>
	);
};

export default View;
