// community-view
import React, { useState } from "react";
import { userCommunityData } from "@/utils/medialink";
import { layoutStores } from "@/store/index"; //store

const View: React.FC = () => {
	const { layoutMenuState } = layoutStores(); //layout
	// community
	const [communityData] = useState([
		userCommunityData.discord,
		userCommunityData.twitter,
		userCommunityData.zealy,
		// useCommunityData.mirror,
		// useCommunityData.link3,
	]);

	return (
		<>
			<div
				className={`${layoutMenuState ? "flex-row" : "flex-col"} shrink-0 py-6 flex gap-5 justify-around items-center border-t-2 border-bgcolor-200`}
			>
				{communityData.map((item, index) => {
					return (
						<a key={index} href={item.link} target="_blank" rel="nofollow noopener noreferrer">
							<img src={item.imgurl} />
						</a>
					);
				})}
			</div>
		</>
	);
};

export default View;
