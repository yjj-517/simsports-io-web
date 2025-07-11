// <!-- home-player -->
import React, { useState, useEffect, useRef } from "react";

import { getRawConfig } from "@/http/modules/api"; //api
import Slider from "react-slick"; //slick轮播图

import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG
import BgImg from "@/assets/imgs/home/top/bg-img.png";
import PlayerTop from "@/assets/imgs/home/player/player-top.png";
import SlashWhite from "@/assets/imgs/common/slash-white.png";
import BgSimdunk from "@/assets/imgs/home/player/bg-simdunk.png";

const View: React.FC = () => {
	const [spinning, setSpinning] = useState<boolean>(false); //Spinning
	const [loading, setLoading] = useState<boolean>(false); //loading
	// 获取player数据
	const [playerData, setPlayerData] = useState<any[]>([]);
	const getPlayer = () => {
		if (!spinning) {
			setSpinning(true); //spinning
			getRawConfig("intro-home-player").then((res: any) => {
				if (res.code === 0) {
					const data = JSON.parse(res.data.config);
					// console.log(data);
					data.forEach((item: any) => {
						item.imgurl = import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.imgurl;
						item.iconurl = import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.iconurl;
					});
					setPlayerData(data);
					setLoading(true); //loading
					setSpinning(false); //spinning
				} else {
					getPlayer();
				}
			});
		}
	};
	useEffect(() => {
		getPlayer();
	}, []);

	// swiper
	const [activeSwiper, setActiveSwiper] = useState<number>(0); //定义swiper索引
	const palyerSlider = useRef<typeof Slider | null>(null); //Palyer-swiper
	const palyerAvatarSlider = useRef<typeof Slider | null>(null); //Palyer-Avatar-swiper
	const [palyerNav, setPalyerNav] = useState<any>(null); //赋值-Palyer-swiper
	const [palyerAvatarNav, setPalyerAvatarNav] = useState<any>(null); //赋值-Palyer-Avatar-swiper
	useEffect(() => {
		setPalyerNav(palyerSlider.current);
		setPalyerAvatarNav(palyerAvatarSlider.current);
	}, [spinning]);
	const palyerSettings = {
		slidesToShow: 1, //一帧显示
		arrows: false, //切换箭头
		fade: true, //淡出淡入
		infinite: true, //无限滑动
		touchMove: true, //手动切换
		autoplay: true, //自动轮播
		pauseOnHover: false, //鼠标放上自动暂停
		// 切换之后在改变id
		afterChange: (index: any) => {
			setActiveSwiper(index);
		},
	};

	const palyerAvatarSettings = {
		slidesToShow: 5, //一帧显示
		arrows: false, //切换箭头
		infinite: true, //无限滑动
		touchMove: true, //手动切换
		swipeToSlide: true, //启用拖动/滑动
		focusOnSelect: true, //点击切换
		centerMode: true, //居中当前幻灯片
	};
	return (
		<div className="relative w-full h-full overflow-hidden">
			<section className="main pt-[160px] pb-[60px] md:pb-[120px]">
				{/* BG-IMG */}
				<HomeBgimg Imgsrc={BgImg} ImgHeight="1500px" />
				{loading && (
					<>
						{/* 轮播图 -01*/}
						<div className="relative">
							<img
								src={BgSimdunk}
								className="min-w-[1400px] absolute top-[30%] left-1/2 translate-x-[-50%] "
							/>
							<div className="relative w-full h-full max-w-[660px] mx-auto">
								<Slider
									ref={(slider: null) => (palyerSlider.current = slider)}
									asNavFor={palyerAvatarNav}
									{...palyerSettings}
								>
									{playerData.map((item, index) => (
										<div key={index} className="w-full">
											<img src={item.imgurl} className="w-full" />
										</div>
									))}
								</Slider>
								<img
									src={PlayerTop}
									className="absolute top-[-28px] right-[-60px] h-[60px] w-auto object-cover"
								/>
								<img src={SlashWhite} className="mt-3 w-full h-auto object-cover" />
							</div>
						</div>
						{/* 轮播图 -02*/}
						<div className="w-full">
							<Slider
								className="mt-10 w-full"
								ref={(slider: null) => (palyerAvatarSlider.current = slider)}
								asNavFor={palyerNav}
								{...palyerAvatarSettings}
							>
								{playerData.map((item, index) => (
									<div key={index} className="w-full">
										<div
											className={`${activeSwiper == index ? "border-white " : " "} cursor-pointer w-[92%] mx-auto border-2 md:border-4 border-transparent `}
										>
											<img src={item.iconurl} className="w-full h-auto object-cover" />
										</div>
									</div>
								))}
							</Slider>
						</div>
					</>
				)}
			</section>
		</div>
	);
};

export default View;
