// home-show
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import iconArbitum from "@/assets/imgs/wallet/icon-chain-arbitum.svg";
import iconArbitumSepolia from "@/assets/imgs/wallet/icon-chain-arbitum-sepolia.svg";
import iconDunk from "@/assets/imgs/wallet/icon-simdunk-dunk.svg";

import boxBuleImg from "@/assets/imgs/mint/simdunk-chrono-cube/box-bule-img.gif";
import boxGoldImg from "@/assets/imgs/mint/simdunk-chrono-cube/box-gold-img.gif";
import rBoxImg from "@/assets/imgs/mint/energy-tuner/r-box.gif";
import genesisImg from "@/assets/imgs/mint/genesis-nft/genesis-img.png";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	// show-数据
	const [showData] = useState([
		{
			chainImg: iconArbitumSepolia,
			imgurl: boxBuleImg,
			priceImg: iconArbitumSepolia,
			collectionName: "SimDunk-PELC Alpha2 Game Items",
			name: "Chrono Cube I",
			price: "0.001",
			priceUnit: "ETH",
			linkurl: "/mint/simdunk-chrono-cube",
		},
		{
			chainImg: iconArbitumSepolia,
			imgurl: boxGoldImg,
			priceImg: iconDunk,
			collectionName: "SimDunk-PELC Alpha2 Game Items",
			name: "Chrono Cube II",
			price: "100",
			priceUnit: "Dunk",
			linkurl: "/mint/simdunk-chrono-cube",
		},
		{
			chainImg: iconArbitumSepolia,
			imgurl: rBoxImg,
			priceImg: iconArbitumSepolia,
			collectionName: "SimDunk-PELC Alpha2 Game Items",
			name: "Energy Tuner R",
			price: "0.002",
			priceUnit: "ETH",
			linkurl: "/mint/energy-tuner-r",
		},
		{
			chainImg: iconArbitumSepolia,
			imgurl: genesisImg,
			priceImg: iconArbitumSepolia,
			collectionName: "SimDunk Alpha2 Player NFT",
			name: "SimDunk Alpha2 Collection Player",
			price: "0.002",
			priceUnit: "ETH",
			linkurl: "/mint/simdunk-alpha2-player-nft",
		},
		// {
		// 	chainImg: iconArbitum,
		// 	imgurl: mBoxImg,
		// 	priceImg: iconArbitum,
		// 	collectionName: "Energy Tuner M",
		// 	name: "Energy Tuner M",
		// 	price: "30",
		// 	priceUnit: "USDT",
		// 	linkurl: "/mint/energy-tuner-m",
		// },
	]);

	useEffect(() => {}, []);
	return (
		<>
			<section className="main mt-20">
				<h2 className="text-lg font-bold">Available Mints</h2>
				<div className="flex flex-wrap mt-8 gap-7">
					{showData.map((item, index) => {
						return (
							<div key={index} className="w-[240px] bg-bgcolor-400 rounded-2xl relative">
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
								<div className="p-3 flex flex-col gap-2">
									<p className="font-bold">{item.collectionName}</p>
									<p className="font-bold">{item.name}</p>
									<div className="flex items-center gap-1 text-text-100">
										<img src={item.priceImg} className="size-4 mt-[-2px]" />
										<span>Mint Price:</span>
										<span>{item.price}</span>
										<span>{item.priceUnit}</span>
									</div>
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
