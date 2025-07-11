// overview-download
import React, { useState } from "react";

import { downloadGameData } from "@/utils/medialink"; //共用链接

import simdunkappImg from "@/assets/imgs/game/simdunk/simdunkapp-img.png";
import iconArbitrum from "@/assets/imgs/common/icon-arbitrum.png";
import iconSimsports from "@/assets/imgs/logo/simsports-logo.png";
import iconIphone from "@/assets/imgs/common/icon-iphone.png";
import iconAndroid from "@/assets/imgs/common/icon-android.png";

const View: React.FC = () => {
	// downloadGame
	const [downloadData] = useState([downloadGameData.gameGoogle, downloadGameData.gameTestFlight]);
	//展示数据-simdunk数据
	const [simdunkData] = useState([
		{
			title: "CHAIN(S)",
			text: "",
			iconImg: [iconArbitrum],
		},
		{
			title: "DEVELOPED BY",
			text: "",
			iconImg: [iconSimsports],
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
	//download
	const downloadGame = (item: any) => {
		if (item.link) {
			window.open(item.link, "_blank");
		}
	};
	return (
		<>
			<div className="p-5 bg-bgcolor-700 rounded-xl flex flex-col w-full xl:w-[30%] h-full">
				<div className="flex items-center">
					<img src={simdunkappImg} className="w-[44px] rounded-lg" />
					<p className="ml-3 font-bold">SIMDUNK</p>
				</div>
				<ul className="mt-5 flex flex-col gap-1.5">
					{simdunkData.map((item, index) => {
						return (
							<li key={index} className="flex justify-between items-center">
								<span className="text-sm">{item.title}</span>
								<div className="flex justify-end">
									{item.iconImg.map((t, i) => {
										return <img key={i} src={t} className="w-[16px] ml-3" />;
									})}
									{item.text ? (
										<span className="text-xs px-2.5 py-px bg-bgcolor-200 rounded-xl border-[1px] border-bgcolor-800">
											{item.text}
										</span>
									) : (
										<></>
									)}
								</div>
							</li>
						);
					})}
				</ul>
				<div className="mt-10 flex flex-col gap-5">
					{downloadData[0].link ? (
						<>
							{downloadData.map((item, index) => {
								return (
									<button
										key={index}
										className="fillet-button gap-2 py-1.5"
										onClick={() => {
											downloadGame(item);
										}}
									>
										<img src={item.img} className="h-[34px]" />
										<span>{item.name}</span>
									</button>
								);
							})}
						</>
					) : (
						// download-opening
						<button className="fillet-button-trumpet-disabled gap-2 py-2.5">
							<span>Opening Soon</span>
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default View;
