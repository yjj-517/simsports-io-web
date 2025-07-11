// layout
import React, { useState } from "react";

import { OfficialLink, CommunityData } from "@/utils/medialink"; //medialink

const View: React.FC = () => {
	const [communityList] = useState<any[]>([
		{
			title: OfficialLink.officialSite.name,
			icon: OfficialLink.officialSite.icon,
			arrLink: [{ link: OfficialLink.officialSite.link, name: OfficialLink.officialSite.name }],
		},
		{
			title: CommunityData.telegra.name,
			icon: CommunityData.telegra.icon,
			arrLink: [{ link: CommunityData.telegra.link, name: CommunityData.telegra.name }],
		},
		{
			title: CommunityData.twitter.name,
			icon: CommunityData.twitter.icon,
			arrLink: [
				{ link: CommunityData.twitter.link, name: "SIMSPORTS" },
				{ link: CommunityData.twitterSimdunk.link, name: "SIMDUNK" },
			],
		},
		{
			title: CommunityData.discord.name,
			icon: CommunityData.discord.icon,
			arrLink: [{ link: CommunityData.discord.link, name: CommunityData.discord.name }],
		},
		{
			title: CommunityData.medium.name,
			icon: CommunityData.medium.icon,
			arrLink: [{ link: CommunityData.medium.link, name: CommunityData.medium.name }],
		},
	]);

	return (
		<>
			<div className=" flex items-center gap-3 md:gap-6">
				{communityList.map((item, index) => {
					const commonStyles =
						"cursor-pointer min-w-[52px] h-[52px] flex justify-center items-center border  rounded-lg bg-primary md:bg-transparent border-primary md:border-white/80 group-hover:bg-primary group-hover:border-primary ";
					return (
						<div key={index} className="relative group">
							{item.arrLink.length === 1 ? (
								<a
									href={item.arrLink.length === 1 ? item.arrLink[0].link : "/"}
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<div className={commonStyles}>
										<img src={item.icon} className="size-8 animate-rotateY-360 " />
									</div>
								</a>
							) : item.arrLink.length > 1 ? (
								<>
									<div className={commonStyles}>
										<img src={item.icon} className="size-8 animate-rotateY-360" />
									</div>
									<div className="pb-1 hidden group-hover:block absolute bottom-full left-1/2 translate-x-[-50%]">
										<div className="bg-black/40 backdrop-blur-lg rounded-sm px-2 py-3 flex flex-col justify-center items-center gap-2">
											{item.arrLink.map((t: any, i: React.Key | null | undefined) => (
												<a
													href={t.link}
													target="_blank"
													rel="nofollow noopener noreferrer"
													key={i}
													className="text-xs hover:text-primary"
												>
													{t.name}
												</a>
											))}
										</div>
									</div>
								</>
							) : (
								<></>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default View;
