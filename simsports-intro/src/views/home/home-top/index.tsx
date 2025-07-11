// <!-- home-top -->
import React, { useState, useRef, useEffect } from "react";

import { getRawConfig } from "@/http/modules/api"; //api

import CommunityView from "@/layout/community-view/index"; //communityList
import VideoModal from "@/components/video-modal/index"; //弹窗

// import SimsportsImg from "@/assets/imgs/logo/img.gif";
import SimsportsImg from "@/assets/imgs/logo/simsports.png";
import IconPlay from "@/assets/imgs/common/icon-play.png"; //icon-play
import SlashPurple from "@/assets/imgs/common/slash-purple.png";
import BusinessImg from "@/assets/imgs/home/top/business.png";

const View: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false); //弹窗
	// 修改弹窗状态
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	// 获取homeVideo数据
	const [spinning, setSpinning] = useState<boolean>(false); //Spinning
	// homeVideo数据
	const [homeVideo, setHomeVideo] = useState<any>({});
	const getHomeVideo = () => {
		if (!spinning) {
			setSpinning(true); //spinning
			getRawConfig("simsports-video").then((res: any) => {
				if (res.code === 0) {
					const data = JSON.parse(res.data.config);
					// console.log(data);
					const dataArr = data.find((item: any) => {
						if (item.name === "simdunk-game-video-103") {
							item.videourl = import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.videourl;
							return true;
						}
						return false;
					});
					// console.log(dataArr);
					setHomeVideo(dataArr);
					setSpinning(false); //spinning
				} else {
					getHomeVideo();
				}
			});
		}
	};
	useEffect(() => {
		getHomeVideo();
	}, []);
	// video
	const videoRef = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true; // 确保视频自动播放不会被阻止
			videoRef.current.play();
		}
	}, [videoRef.current]);
	return (
		<>
			<div className="relative w-full h-screen ">
				{/* 头部视频 */}
				{homeVideo.videourl && (
					<video
						ref={videoRef}
						className="absolute inset-0 w-full h-full object-cover object-center"
						autoPlay
						muted
						playsInline
						loop
						preload="auto"
					>
						<source src={homeVideo.videourl} />
					</video>
				)}
				{/* 背景板 */}
				<div className="bg-stripes absolute w-full h-full"></div>
				{/* 表层内容 */}
				<section className="main h-full ">
					<div className="w-full h-full flex flex-col justify-between items-center pt-[var(--sm-home-header-height)]">
						<div className="flex flex-col items-center gap-4">
							<img src={SimsportsImg} className="w-[1060px]" />
							{/* <p className="text-center max-w-[720px] text-2xl md:text-4xl font-semibold">
								COMPREHENSIVE PLATFORM CENTERED WITHIN WEB3 SPORTS GAMES
							</p> */}
						</div>
						{/* play按钮 */}
						<img
							src={IconPlay}
							className="cursor-pointer animate-rotate-30-scale-90 size-16 md:size-24"
							onClick={() => {
								toggleModal();
							}}
						/>
						{/* 社交媒体 */}
						<div className="flex flex-col items-center gap-4">
							<CommunityView />
							<div className="flex justify-center items-end gap-10">
								<img src={SlashPurple} className="h-[36px] w-auto object-cover" />
								<img src={BusinessImg} className="h-[36px] md:h-[54px] w-auto object-cover" />
								<img src={SlashPurple} className="h-[36px] w-auto object-cover" />
							</div>
						</div>
					</div>
				</section>
			</div>
			{showModal && <VideoModal ToggleModal={toggleModal} VideoUrl={homeVideo.videourl} />}
		</>
	);
};

export default View;
