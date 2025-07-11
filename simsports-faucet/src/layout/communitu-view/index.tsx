// community-view
import React from "react";

import { useCommunityData } from "@/utils/medialink"; //medialink

const View: React.FC = () => {
	const CommunityList = [
		useCommunityData.discord,
		useCommunityData.twitter,
		useCommunityData.medium,
		useCommunityData.telegram,
	];
	return (
		<>
			{CommunityList.map((item, index) => {
				return (
					<a
						key={index}
						href={item.link}
						target="_blank"
						rel="nofollow noopener noreferrer"
						className="flex"
					>
						<div className="w-[32px] h-[38px] overflow-hidden relative group">
							<div className="w-full h-full flex flex-col absolute top-0 transition-transform duration-500 transform -translate-y-full md:group-hover:-translate-y-full md:translate-y-0">
								<img src={item.imgurlWhite} className="w-full h-auto object-cover" />
								<img src={item.imgurl} className="w-full h-auto object-cover" />
							</div>
						</div>
					</a>
				);
			})}
		</>
	);
};

export default View;
