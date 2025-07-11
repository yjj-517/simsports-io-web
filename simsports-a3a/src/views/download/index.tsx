// <!-- download -->
import React, { useState } from "react";

import { DownloadGameData } from "@/utils/medialink"; //medialink

import A3aLogo from "@/assets/imgs/logo/a3a-logo.png";
import A3aIcon from "@/assets/imgs/logo/a3a-icon.png";
import A3aTitle from "@/assets/imgs/logo/a3a-title.png";
import BgYellow01 from "@/assets/imgs/download/bg-yellow01.png";
import BgYellow02 from "@/assets/imgs/download/bg-yellow02.png";
import DownloadGoogle from "@/assets/imgs/download/download-google.png";
import DownloadApk from "@/assets/imgs/download/download-apk.png";
import PeopleImg from "@/assets/imgs/download/people-img.png";
import GameDescribe from "@/assets/imgs/download/game-describe.png";

const View: React.FC = () => {
	// 下载链接
	const [gameDownload] = useState<any[]>([
		{
			link: DownloadGameData.gameGoogle.link,
			img: DownloadGoogle,
		},
		{
			link: DownloadGameData.gameApk.link,
			img: DownloadApk,
		},
	]);
	// 下载
	const onDownload = (link: any) => {
		if (link) {
			window.open(link, "_blank");
		}
	};
	return (
		<>
			<div className="w-full h-full ">
				{/* header */}
				<header className="w-full max-w-[720px] fixed top-0 left-1/2 -translate-x-1/2 ">
					<img src={BgYellow01} className="w-full h-auto object-cover" />
					<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex justify-center items-center gap-4">
						<img src={A3aLogo} className="h-[80%] w-full object-cover" />
						<img src={A3aTitle} className="h-[80%] w-full object-cover" />
						<img src={A3aIcon} className="h-[80%] w-full object-cover" />
					</div>
				</header>
				{/* 内容区 */}
				<div className="w-full max-w-[720px] h-full mx-auto">
					<img src={PeopleImg} className="w-full h-auto object-cover" />
					<img src={GameDescribe} className="w-[80%] h-auto object-cover] mx-auto mt-10" />
					<p className="mt-7 sm:mt-12 text-sm sm:text-2xl px-10 sm:px-16 font-regular">
						All-Star 3PT Apex (A3A) is a casual basketball mini game that combines QTE-based 3-point
						shooting with idle RPG-style progression. You’ll train your players, level up your team,
						and work your way to the top as a true 3-point master!
					</p>
					<div className="mt-24 sm:mt-40"></div>
				</div>
				{/* footer */}
				<footer className="w-full max-w-[720px] fixed bottom-0 left-1/2 -translate-x-1/2 ">
					<img src={BgYellow02} className="w-full h-auto object-cover" />
					<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex justify-center items-center gap-4">
						{gameDownload.map((item, index) => (
							<img
								key={index}
								src={item.img}
								className="h-[68%] w-full object-cover cursor-pointer"
								onClick={() => {
									onDownload(item.link);
								}}
							/>
						))}
					</div>
				</footer>
			</div>
		</>
	);
};

export default View;
