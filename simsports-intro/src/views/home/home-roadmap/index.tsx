// <!-- home-roadmap -->
import React, { useState, useRef } from "react";

import Slider from "react-slick"; //slick轮播图

import HomeTitle from "@/components/home-title/index"; //title
import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import BgImg from "@/assets/imgs/home/top/bg-img.png";
import BgColor from "@/assets/imgs/common/bg-color.png";
import IconChange from "@/assets/imgs/common/icon-change.png";
import BgSimdunk from "@/assets/imgs/home/roadmap/bg-simdunk.png";

const View: React.FC = () => {
	// title
	const [titleData] = useState({
		serial: "04",
		name01: "",
		name02: "ROADMAP",
		text: "Games on the Rise.",
	});
	// roadmap
	const [roadmapData] = useState([
		{
			title: "SimDunk Alpha2 Test Highlights",
			time: "2024.06",
			textList: [
				"X and Discord community members: 80K",
				"New users in the SimDunk Alpha2 test: 15K++ (30% Web3 users, 70% Web2 users)",
				"Day 1 retention rate: 55.8%",
				"Day 7 retention rate: 28.94%",
				"Average daily online time: 65.02 minutes",
				"Average daily matches per user: 9",
				"On-chain interactions: 17K++",
				"Holders: 4K++",
			],
		},
		{
			title: "SimDunk Pioneer Test Achievements",
			time: "2024.09",
			textList: [
				"Total Participants: 5000+",
				"Average online time per player: 178 minutes",
				"Total number of matches: 102,574",
				"2nd day retention: 75.27%",
				"3rd day retention: 65.97%",
				"1 week retention: 52.99%",
			],
		},
		{
			title: "SimDunk 2nd Pioneer Test",
			time: "2024.12",
			textList: [
				"Total Participants: over 8,000",
				"Average online time per player: 185 minutes",
				"Total number of matches: 237,482",
				"2nd day retention rate: 81.67%",
				"3rd day retention rate: 67.82%",
				"One-week retention rate: 58.91%",
			],
		},
		{
			title: "Telegram Mini App-A3A 1.0 version release",
			time: "2025.01",
			textList: [
				"User growth",
				"Sim Block pre-heating",
				"Telegram Bot user growth",
				"Telegram Community operation",
				"Telegram Mini App-A3A 1.0 version release",
				"BRAVO-D released",
			],
		},
	]);
	// swiper
	const [activeSwiper, setActiveSwiper] = useState<number>(0); //定义swiper索引
	const palyerSlider = useRef<typeof Slider | null>(null); //Palyer-swiper
	const palyerSettings = {
		slidesToShow: 1, //一帧显示
		arrows: false, //切换箭头
		fade: false, //淡出淡入
		infinite: false, //无限滑动
		touchMove: true, //手动切换
		autoplay: false, //自动轮播
		afterChange: (index: any) => {
			setActiveSwiper(index);
		},
	};
	return (
		<>
			<div id="home-roadmap" className="relative w-full h-full overflow-hidden">
				{/* BG-IMG */}
				<HomeBgimg Imgsrc={BgImg} ImgHeight="1500px" />
				<section className="main py-[80px]">
					{/* title */}
					<HomeTitle TitleData={titleData} Align={false} />
					{/* 轮播图 */}
					<div>
						<Slider
							className="mt-10 w-full "
							ref={(slider: null) => (palyerSlider.current = slider)}
							{...palyerSettings}
						>
							{roadmapData.map((item: any, index: any) => (
								<div className="w-full" key={index}>
									<div className="w-full flex justify-between items-stretch gap-6 flex-col lg:flex-row">
										<div className="w-full lg:w-[34%] flex flex-col gap-2">
											<div className="w-full relative h-[150px] flex justify-center items-center">
												<div className="absolute h-full w-full ">
													<img src={BgColor} className=" h-full w-full object-fill " />
												</div>
												<p className="relative px-2 text-4xl font-bold text-center text-black">
													{item.title}
												</p>
											</div>
											<div className="flex-1 w-full p-1.5 bg-linear-to-r from-primary to-regular flex justify-center items-center text-center text-4xl">
												{item.time}
											</div>
										</div>
										<div className="flex-1 relative w-full bg-bgcolor-200 min-h-[210px] flex items-center">
											<img
												src={BgSimdunk}
												className="absolute right-0 h-full w-[54px] object-fill"
											/>
											<div className="relative flex flex-col px-10 py-4 md:px-24">
												{item.textList.map((t: any, i: React.Key | null | undefined) => (
													<div key={i} className="flex items-start gap-2">
														<span className="min-w-1.5 h-1.5 bg-white rounded-full mt-3"></span>
														<p className="text-lg">{t}</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
					{/* 轮播图按钮 */}
					<div className="mt-6 flex justify-between items-center gap-8">
						<div className="flex items-center gap-5">
							<img
								src={IconChange}
								className={` ${activeSwiper === 0 ? " cursor-not-allowed " : "cursor-pointer "} size-12 `}
								onClick={() => {
									palyerSlider.current.slickPrev();
								}}
							/>
							<img
								src={IconChange}
								className={` ${activeSwiper + 1 === roadmapData.length ? " cursor-not-allowed " : "cursor-pointer "} size-12 rotate-180`}
								onClick={() => {
									palyerSlider.current.slickNext();
								}}
							/>
						</div>
						<div className="flex-1 flex ">
							{roadmapData.map((_item, index) => {
								return (
									<div
										key={index}
										className={`${activeSwiper >= index ? " bg-primary " : "  "} bg-bgcolor-200 w-full h-1 `}
									></div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
