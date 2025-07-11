// simdunk-top
import React, { useState } from "react";

import { userCommunityData, importantLink } from "@/utils/medialink";

import simdunkTopBg from "@/assets/imgs/game/simdunk/simdunk-top-bg.png";
import simdunkLogo from "@/assets/imgs/logo/simdunk-logo.png";
import iconSimsport from "@/assets/imgs/home/common/icon-simsport.png";
import iconDiscord from "@/assets/imgs/home/common/icon-discord.png";
import iconTwitter from "@/assets/imgs/home/common/icon-twitter.png";
// import iconWhitepaper from "@/assets/imgs/home/common/icon-whitepaper.png";

const View: React.FC = () => {
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
			<div className="relative h-[340px] overflow-hidden bg-black">
				<div className="w-[1920px] absolute left-2/4 translate-x-[-50%]">
					<img src={simdunkTopBg} className="h-[340px]" />
				</div>
				<section className="main">
					<div className="flex w-full h-full flex-col justify-end ">
						<div className="flex justify-between items-end flex-wrap pb-10">
							<img src={simdunkLogo} className="w-[110px]" />
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
