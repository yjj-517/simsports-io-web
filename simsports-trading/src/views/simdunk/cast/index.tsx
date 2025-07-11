// cast
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import iconArbitumSepolia from "@/assets/imgs/wallet/icon-chain-arbitum-sepolia.svg";

import castBgImg from "@/assets/imgs/game/simdunk/cast/cast-bg-img.png";
import rBoxImg from "@/assets/imgs/mint/energy-tuner/r-box.gif";
const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	// cast介绍
	const [castIntroduceData] = useState([
		"Underground in tidal city, the perpetual motion machines are constantly absorbing the emotions that humans unleash in competitions and converting them into energy.",
		"The energy tuner can capture some of the produced energy and store it. Carry it to participate in ranked matches, and get a share of the huge wealth!",
	]);
	// cast活动
	const [castData] = useState([
		{
			chainImg: iconArbitumSepolia,
			imgurl: rBoxImg,
			contractName: "SimDunk-PELC Alpha2 Game Items",
			tokenName: "Energy Tuner R",
			linkurl: "/cast/energy-tuner-r",
		},
	]);

	return (
		<>
			<section className="main">
				<div className="mt-8 max-w-[1040px] flex flex-col">
					<img src={castBgImg} className="w-full h-auto rounded-2xl" />
					<div className="mt-10 p-4 w-full bg-bgcolor-700 rounded-xl flex flex-col gap-6">
						{castIntroduceData.map((item, index) => {
							return (
								<p key={index} className="text-text-200">
									{item}
								</p>
							);
						})}
					</div>
				</div>
				<div className="w-full h-0.5 bg-bgcolor-200 mt-16"></div>
				<div className="mt-16 flex flex-wrap gap-7">
					{castData.map((item, index) => {
						return (
							<div key={index} className="w-[240px] bg-bgcolor-400 rounded-xl relative">
								<div
									className="w-[240px] h-[240px] overflow-hidden rounded-lg relative cursor-pointer"
									onClick={() => {
										navigate(item.linkurl);
									}}
								>
									<div className="absolute m-2 size-6 rounded z-10 bg-bgcolor-400 flex items-center justify-center">
										<img src={item.chainImg} className="size-[18px]" />
									</div>
									<img src={item.imgurl} className="scale-img size-[240px]" />
								</div>
								<div className="px-2 py-3 flex flex-col">
									<p className="mt-1 truncate">{item.contractName}</p>
									<p className="mt-1 truncate">{item.tokenName}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default View;
