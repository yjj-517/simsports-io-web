// home-top
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userCommunityData, importantLink } from "@/utils/medialink";

import gameVideo from "@/assets/video/game-video.mp4"; //游戏视频

import iconArbitrum from "@/assets/imgs/common/icon-arbitrum.png";
import iconIphone from "@/assets/imgs/common/icon-iphone.png";
import iconAndroid from "@/assets/imgs/common/icon-android.png";
import simdunkLogo from "@/assets/imgs/logo/simdunk-logo.png";
import iconSimsport from "@/assets/imgs/home/common/icon-simsport.png";
import iconDiscord from "@/assets/imgs/home/common/icon-discord.png";
import iconTwitter from "@/assets/imgs/home/common/icon-twitter.png";
// import iconWhitepaper from "@/assets/imgs/home/common/icon-whitepaper.png";
const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const [topLinkData] = useState([
		{
			iconimg: iconSimsport,
			link: importantLink.officialSite + "/game/simdunk",
		},
		{
			iconimg: iconDiscord,
			link: userCommunityData.discord.link,
		},
		{
			iconimg: iconTwitter,
			link: userCommunityData.twitterSimdunk.link,
		},
		// {
		// 	iconimg: iconWhitepaper,
		// 	link: whitePaperData.simdunk.link,
		// },
	]);
	return (
		<>
			<div className="relative w-full h-[780px] overflow-hidden">
				<div className="absolute w-full left-2/4 translate-x-[-50%] opacity-60">
					<video className="h-[780px] mx-auto object-cover" autoPlay muted playsInline loop>
						<source src={gameVideo} type="video/mp4" />
					</video>
				</div>
				<section className="main">
					<div className="py-10 flex flex-col justify-between h-full md:px-10">
						<div className="flex gap-3">
							<img src={iconArbitrum} className="w-[24px]" />
							<span>|</span>
							<img src={iconIphone} className="w-[24px]" />
							<img src={iconAndroid} className="w-[24px]" />
						</div>
						<div className="flex justify-between items-end flex-wrap gap-5 mb-10">
							<div className="flex flex-col">
								<img src={simdunkLogo} className="w-[110px]" />
								<h2 className="mt-3 text-2xl">SimDunk</h2>
								<p className="mt-2 text-text-200 max-w-[530px]">
									3v3 real-time street basketball with NFT characters in a virtual world. Earn $Dunk tokens, level up, join
									esports events, and trade NFTs for profits.
								</p>
								<button
									className="fillet-button mt-4 py-1.5 w-[160px]"
									onClick={() => {
										navigate("/simdunk");
									}}
								>
									Free to Play
								</button>
							</div>
							<div className="flex gap-3">
								{topLinkData.map((item, index) => {
									return (
										<a key={index} href={item.link} target="_blank" rel="nofollow noopener noreferrer">
											<img src={item.iconimg} className="w-[28px] h-[28px]" />
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
