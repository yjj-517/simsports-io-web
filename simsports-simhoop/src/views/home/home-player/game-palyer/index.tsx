// game-palyer
import React, { useState, useEffect, useRef } from "react";
import "./index.less";

import Slider from "react-slick"; //slick轮播图
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { LeftOutlined } from "@ant-design/icons";

interface InputProps {
	display: boolean;
	palyerData: any;
	onHandleViewChange: (display: boolean, palyerType: string) => void;
}
const View: React.FC<InputProps> = ({ display, palyerData, onHandleViewChange }: InputProps) => {
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
	};
	const palyerAvatarSettings = {
		slidesToShow: 5,
		arrows: false,
		infinite: false,
		touchMove: false, //手动切换
		swipeToSlide: true, //启用拖动/滑动
		focusOnSelect: true, //点击切换
	};

	// 点击后退图片
	const handleViewChange = () => {
		onHandleViewChange(!display, "");
	};
	return (
		<>
			<div className="game-palyer">
				<div className="game-palyer-bg">
					<img src={palyerData.bgImg} alt="img" className="game-palyer-bg-img" />
				</div>
				<div className="main">
					<div className="game-palyer-title">
						<LeftOutlined
							className="icon-left"
							onClick={() => {
								handleViewChange();
							}}
						/>
						<img src={palyerData.titleImg} alt="img" className="game-palyer-title-img" />
					</div>
					{/* one-swiper */}
					<Slider
						className="game-palyer-slider"
						ref={(slider: null) => (palyerSlider.current = slider)}
						asNavFor={palyerAvatarNav}
						{...palyerSettings}
					>
						{palyerData.list.map((item: any, index: any) => (
							<div className="swiper-box" key={index}>
								<div className="center">
									<img src={item.palyerImg} alt="img" className="player-people-img" />
								</div>
							</div>
						))}
					</Slider>
				</div>
				{/*two-swiper  */}
				<div className="game-palyer-change" style={palyerData.backgroundColor}>
					<div className="main palyer-avatar-box">
						{palyerData.list.length > 1 ? (
							<img
								src={palyerData.changeButton[0]}
								alt="img"
								className="icon-change icon-change-prev"
								onClick={() => {
									palyerSlider.current.slickPrev();
								}}
							/>
						) : (
							<></>
						)}

						<div className="palyer-avatar-list">
							<Slider
								className="game-avatar-slider"
								ref={(slider: null) => (palyerAvatarSlider.current = slider)}
								asNavFor={palyerNav}
								{...palyerAvatarSettings}
							>
								{palyerData.list.map((item: any, index: any) => (
									<div className="swiper-box" key={index}>
										<div className="center">
											<img
												src={item.palyerAvatarImg}
												alt="img"
												className="palyer-avatar-img"
												style={index === activeSwiper ? palyerData.active : {}}
											/>
										</div>
									</div>
								))}
							</Slider>
						</div>
						{palyerData.list.length > 1 ? (
							<img
								src={palyerData.changeButton[1]}
								alt="img"
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
		</>
	);
};

export default View;
