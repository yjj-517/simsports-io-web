// game-introduce
import React, { useState, useEffect, useRef } from "react";
import "./index.css"; //修改Carousel 的css
import { Carousel } from "antd";

import gameVideo from "@/assets/video/game-video.mp4"; //游戏视频
import carouselImg01 from "@/assets/imgs/game/simdunk/carousel-img/carousel-img-01.png";
import carouselImg02 from "@/assets/imgs/game/simdunk/carousel-img/carousel-img-02.png";
import carouselImg03 from "@/assets/imgs/game/simdunk/carousel-img/carousel-img-03.png";
import carouselImg04 from "@/assets/imgs/game/simdunk/carousel-img/carousel-img-04.png";
import carouselImg05 from "@/assets/imgs/game/simdunk/carousel-img/carousel-img-05.png";

const View: React.FC = () => {
	// simdunk-介绍
	const [simdunkTextData] = useState([
		"SimDunk, the premier street league about to begin. SimDunk the flagship project of SimSports Sports Club, attracts top ballers worldwide. lt stands out with high-level matches and intense competition, bringing together a community of free-spirited individuals who embrace street basketballl culture.",
		"SimDunk's innovative and liberating rules encourage players to unleash their imagination and showcase their unique styles. Beyond traditional arenas, SimDunk’s courts span the streets and open- air venues, offering players the freedom to sweat alongside vibrant walls. With abundant rewards, SimDunk celebrates individuality, passion, and freedom, redefining the allure of basketball and inspiring a new era for street basketball.",
	]);
	// 轮播图
	const [swiperData] = useState([
		{
			type: "video",
			sourceUrl: gameVideo,
		},
		{
			type: "img",
			sourceUrl: carouselImg01,
		},
		{
			type: "img",
			sourceUrl: carouselImg02,
		},
		{
			type: "img",
			sourceUrl: carouselImg03,
		},
		{
			type: "img",
			sourceUrl: carouselImg04,
		},
		{
			type: "img",
			sourceUrl: carouselImg05,
		},
	]);
	const [swiperPlay, setSwiperPlay] = useState<boolean>(false); //自动播放
	const videoRef = useRef<HTMLVideoElement | null>(null); //视频
	// 切换轮播图监听
	const handleSlideChange = (num: number) => {
		// console.log(num);
		swiperData.map((item, index) => {
			if (index === num) {
				if (item.type === "video") {
					const videoElement = document.getElementById(`swiper-video-${index}`) as HTMLVideoElement;
					if (videoElement) {
						videoRef.current = videoElement; //赋值视频
						videoRef.current.play(); // 手动播放视频
					}
					setSwiperPlay(false); //关闭轮播
				} else {
					if (videoRef.current) {
						videoRef.current.pause(); // 手动暂停视频
					}
					setSwiperPlay(true); //开启轮播
				}
			}
		});
	};
	// 视频播放完毕
	const handleVideoEnded = (event: any) => {
		setSwiperPlay(true); //开启轮播
		// video-time-0
		const video = event.target;
		video.currentTime = 0;
	};
	// 监听第一次轮播
	const firstSwiperPlay = () => {
		if (swiperData[0].type === "video") {
			setSwiperPlay(false);
		} else {
			setSwiperPlay(true);
		}
	};
	useEffect(() => {
		firstSwiperPlay();
	}, []);
	return (
		<>
			<div className="w-full xl:w-[70%] h-full">
				<div className="w-full">
					<div className="carousel-box">
						<Carousel autoplay={swiperPlay} afterChange={handleSlideChange} infinite>
							{swiperData.map((item, index) => {
								return (
									<div
										key={index}
										className="flex w-full h-full justify-center items-center border rounded-2xl overflow-hidden border-bgcolor-200 m-auto "
									>
										{item.type === "video" ? (
											<video
												id={`swiper-video-${index}`}
												autoPlay={true}
												controls
												muted
												onEnded={handleVideoEnded}
												className="w-full h-auto object-cover aspect-video"
											>
												<source src={item.sourceUrl} type="video/mp4" />
											</video>
										) : (
											<img src={item.sourceUrl} alt="" className="w-full h-full object-cover " />
										)}
									</div>
								);
							})}
						</Carousel>
					</div>
				</div>

				<div className="mt-10 p-4 bg-bgcolor-700 rounded-xl flex flex-col gap-5">
					{simdunkTextData.map((item, index) => {
						return (
							<p key={index} className="text-text-200">
								{item}
							</p>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default View;
