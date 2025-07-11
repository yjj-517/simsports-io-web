// <!-- home-simdunk -->
import React, { useState, useEffect, useRef } from "react";

import VideoModal from "@/components/video-modal/index"; //弹窗
import { DownloadGameData } from "@/utils/medialink"; //medialink
import { getRawConfig } from "@/http/modules/api"; //api

import HomeTitle from "@/components/home-title/index"; //title
import HomeBgimg from "@/components/home-bgimg/index"; //BG-IMG

import IconPlay from "@/assets/imgs/common/icon-play.png"; //icon-play
import BgImg from "@/assets/imgs/home/simdunk/bg-img.png";
import SimdunkIntroduceBg from "@/assets/imgs/home/simdunk/simdunk-introduce-bg.png";
import Introduce01 from "@/assets/imgs/home/simdunk/introduce-01.png";
import Introduce02 from "@/assets/imgs/home/simdunk/introduce-02.png";
import Introduce03 from "@/assets/imgs/home/simdunk/introduce-03.png";
import Introduce04 from "@/assets/imgs/home/simdunk/introduce-04.png";
import ApkDownload from "@/assets/imgs/home/simdunk/apk-download.png";
import IconQrcode from "@/assets/imgs/home/simdunk/icon-qrcode.png";
import SimdunkDownlink from "@/assets/imgs/common/simdunk-downlink.png";

const View: React.FC = () => {
	// title
	const [titleData] = useState({
		serial: "02",
		name01: "INTRO",
		name02: "SIMDUNK",
		text: "A cyberpunk basketball metaverse for sports fans and gamers.",
	});
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
			getRawConfig("simsports-video").then((res: any) => {
				if (res.code === 0) {
					const data = JSON.parse(res.data.config);
					// console.log(data);
					const dataArr = data.find((item: any) => {
						if (item.name === "simdunk-game-video") {
							item.videourl = import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.videourl;
							return true;
						}
						return false;
					});
					// console.log(dataArr);
					setHomeVideo(dataArr);
					setSpinning(true); //spinning
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
	// SIMDUNK-Introduce
	const [introduceData] = useState<any[]>([
		{
			icon: Introduce01,
			introduce: "EXCEPTIONAL BATTLE MECHANICS",
		},
		{
			icon: Introduce02,
			introduce: "AAA-QUALITY ART AND GRAPHICS",
		},
		{
			icon: Introduce03,
			introduce: "RICH CHARACTER BACKSTORIES",
		},
		{
			icon: Introduce04,
			introduce: "WIDE ARRAY OF NFT FEATURES",
		},
	]);

	//download
	const [showDownload, setShowDownload] = useState<boolean>(false); //download
	const [downloadLink] = useState<string>(DownloadGameData.simdunk.gameApk.link); //downloadLink
	//download-game
	const onDownload = () => {
		if (downloadLink) {
			window.open(downloadLink, "_blank");
		}
	};

	return (
		<>
			<div id="home-simdunk" className="relative w-full h-full overflow-hidden">
				{/* BG-IMG */}
				<HomeBgimg Imgsrc={BgImg} ImgHeight="1500px" />
				<div className="bg-stripes absolute w-full h-full "></div>
				<section className="main py-[80px]">
					{/* title */}
					<HomeTitle TitleData={titleData} Align={false} />
					{/* 中部视频 */}
					<div className="relative mt-[60px] w-full h-full p-0.5 bg-linear-to-br from-primary to-regular">
						{homeVideo.videourl && (
							<video
								ref={videoRef}
								className="inset-0 w-full h-full object-cover object-center"
								autoPlay
								muted
								playsInline
								loop
								preload="auto"
							>
								<source src={homeVideo.videourl} />
							</video>
						)}
						<div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-center">
							<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
								<img
									src={IconPlay}
									className="cursor-pointer animate-rotate-30-scale-90 size-8 sm:size-16 md:size-24"
									onClick={() => {
										toggleModal();
									}}
								/>
							</div>
							{/* Download */}
							{downloadLink && (
								<div className="mb-[1.5%] flex justify-center items-end h-[40px] md:h-[64px] lg:h-[88px]  gap-1 md:gap-2 cursor-pointer relative">
									<img
										src={ApkDownload}
										className="w-auto h-full object-cover"
										onClick={onDownload}
									/>
									<div className="h-[72%] relative">
										<img
											src={IconQrcode}
											className="w-auto h-full object-cover"
											onClick={() => {
												setShowDownload(!showDownload);
											}}
										/>
										<div className="absolute bottom-full left-[50%] translate-x-[-50%] size-[60px] md:size-[160px] mb-0.5 md:mb-2 overflow-hidden">
											<div
												className={` ${showDownload ? "rotate-0 " : "rotate-90 "} w-full h-full p-0.5 md:p-2 bg-linear-to-r from-primary to-regular transition-transform duration-[400ms]  origin-bottom-left`}
											>
												<img src={SimdunkDownlink} className="w-full h-auto object-cover" />
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="mt-10 flex justify-center items-center gap-7 flex-wrap">
						{introduceData.map((item, index) => (
							<div
								key={index}
								className="relative cursor-pointer hover:scale-110 transition-transform duration-[400ms]"
							>
								<img src={SimdunkIntroduceBg} className="w-[306px] h-auto object-cover" />
								<div className=" h-full absolute top-0 left-0 p-2.5 flex items-center gap-2.5">
									<img src={item.icon} className="h-full" />
									<p className="w-[160px] text-xl font-bold">{item.introduce}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			{showModal && <VideoModal ToggleModal={toggleModal} VideoUrl={homeVideo.videourl} />}
		</>
	);
};

export default View;
