// home-more
import React, { useState } from "react";

import { whitePaperData } from "@/utils/medialink";
import IconArrowPulldown from "@/assets/imgs/layout/common/icon-arrow-pulldown.svg?react";
import more01 from "@/assets/imgs/home/more/more-01.png";
import more02 from "@/assets/imgs/home/more/more-02.png";
import more03 from "@/assets/imgs/home/more/more-03.png";
const View: React.FC = () => {
	// more-数据
	const [moreData] = useState([
		{
			imgurl: more01,
			text: "SimDunk Whitepaper",
			link: whitePaperData.simdunk.link,
		},
		{
			imgurl: more02,
			text: "SimSports Platform Whitepaper",
			link: whitePaperData.simsports.link,
		},
		{
			imgurl: more03,
			text: "Limited SSR Tulani Player Profile",
			link: whitePaperData.simdunkPlayerProfile.link,
		},
	]);
	return (
		<>
			<section className="main mt-20">
				<h2 className="text-lg font-bold">Discover More</h2>
				<div className="flex justify-between gap-5 flex-wrap md:flex-nowrap">
					{moreData.map((item, index) => {
						return (
							<div key={index} className="mt-8 mr-0 bg-bgcolor-400 rounded-xl flex flex-col justify-between w-full">
								<div className="overflow-hidden w-full rounded-xl">
									<img src={item.imgurl} className="scale-img" />
								</div>
								<div className="px-3">
									<p className="mt-5 text-lg">{item.text}</p>
									<button className="fillet-button-hollow mt-4 mb-5 px-5 py-1">
										<a href={item.link} target="_blank" rel="nofollow noopener noreferrer" className="flex items-center">
											<span>More</span>
											<IconArrowPulldown className="rotate-[270deg] size-4" />
										</a>
									</button>
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
