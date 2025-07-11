// game-palyer
import React, { useState, useEffect, useRef } from "react";
import "./index.less";

import Slider from "react-slick"; //slick轮播图
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";

interface InputProps {
	display: boolean;
	palyerData: any;
	onHandlePalyerChange: (display: boolean, palyerType: string) => void;
}
const View: React.FC<InputProps> = ({ display, palyerData, onHandlePalyerChange }: InputProps) => {
	console.log(palyerData);

	// 点击后退图片
	const handleViewChange = () => {
		onHandlePalyerChange(!display, "");
	};

	// swiper
	const palyerSlider = useRef<typeof Slider | null>(null); //Palyer-swiper
	const palyerAvatarSlider = useRef<typeof Slider | null>(null); //Palyer-Avatar-swiper
	const [palyerNav, setPalyerNav] = useState(null); //赋值-Palyer-swiper
	const [palyerAvatarNav, setPalyerAvatarNav] = useState(null); //赋值-Palyer-Avatar-swiper
	useEffect(() => {
		setPalyerNav(palyerSlider.current);
		setPalyerAvatarNav(palyerAvatarSlider.current);
	}, []);
	const [activeSwiper, setActiveSwiper] = useState<number>(0); //定义swiper索引
	const palyerSettings = {
		slidesToShow: 1, //一帧显示
		arrows: false, //切换箭头
		fade: true, //淡出淡入
		infinite: false, //无限滑动
		touchMove: false, //手动切换
		afterChange: (index: any) => {
			setActiveSwiper(index);
		},
		// asNavFor: palyerAvatarNav.current, //同步另一个滑块
	};
	const palyerAvatarSettings = {
		slidesToShow: 4,
		arrows: false,
		infinite: false,
		touchMove: false, //手动切换
		swipeToSlide: true, //启用拖动/滑动
		focusOnSelect: true, //点击切换
	};
	// 链接跳转
	const goLink = () => {
		window.open(palyerData.list[activeSwiper].palyerLink, "_blank");
	};
	return (
		<>
			<div className="game-palyer">
				<Image src={palyerData.bgImg} className="game-tab-bg" />
				<div className="game-palyer-box">
					<div className="main">
						<LeftOutline
							className="icon-outline"
							onClick={() => {
								handleViewChange();
							}}
						/>
						{/* 第一个swiper */}
						<Slider
							className="game-palyer-slider"
							ref={(slider: null) => (palyerSlider.current = slider)}
							asNavFor={palyerAvatarNav}
							{...palyerSettings}
						>
							{palyerData.list.map((item: any, index: any) => (
								<div className="swiper-box" key={index}>
									<div className="center">
										<div className="game-palyer-img-box">
											<Image src={item.palyerImg} className="game-palyer-img" />
										</div>
										<h2 className="game-palyer-title">{item.name}</h2>
										<p className="fillet-paragraph-text02">{item.nickname}</p>
										<p className="fillet-paragraph-text04">{item.introduce}</p>
										{palyerData.list[activeSwiper].palyerLink ? (
											<button
												className="fillet-diamond-button"
												onClick={() => {
													goLink();
												}}
											>
												ROLE GAMEPLAY
											</button>
										) : (
											<button className="fillet-diamond-button-disabled">COMING SOON</button>
										)}
									</div>
								</div>
							))}
						</Slider>
						{/* 第二个swiper切换 */}
						<div className="game-palyer-change">
							{palyerData.list.length > 1 ? (
								<Image
									src={palyerData.changeButton[0]}
									className="icon-change icon-change-prev"
									onClick={() => {
										palyerSlider.current.slickPrev();
									}}
								/>
							) : (
								<></>
							)}
							{/* 第二个swiper */}
							<div className="game-avatar-swiper">
								<Slider
									className="game-avatar-slider"
									ref={(slider: null) => (palyerAvatarSlider.current = slider)}
									asNavFor={palyerNav}
									{...palyerAvatarSettings}
								>
									{palyerData.list.map((item: any, index: any) => (
										<div className="swiper-box" key={index}>
											<div className="center">
												<Image
													style={index === activeSwiper ? palyerData.active : {}}
													src={item.palyerAvatarImg}
													className="game-avatar-img"
												/>
											</div>
										</div>
									))}
								</Slider>
							</div>
							{palyerData.list.length > 1 ? (
								<Image
									src={palyerData.changeButton[1]}
									className="icon-change icon-change-next"
									onClick={() => {
										palyerSlider.current.slickNext();
									}}
								/>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
				<div className="game-palyer-bg" style={palyerData.backgroundColor}></div>
			</div>
		</>
	);
};
export default View;
