// collection useState,
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ContractProps {
	collectionData: any;
}
import { userCommunityData, importantLink } from "@/utils/medialink";

import iconLink from "@/assets/imgs/common/icon-link.png";
import iconSimsport from "@/assets/imgs/home/common/icon-simsport.png";
import iconDiscord from "@/assets/imgs/home/common/icon-discord.png";
import iconTwitter from "@/assets/imgs/home/common/icon-twitter.png";
// import iconWhitepaper from "@/assets/imgs/home/common/icon-whitepaper.png";
const View: React.FC<ContractProps> = ({ collectionData }: ContractProps) => {
	console.log(collectionData);
	const navigate = useNavigate(); //路由跳转
	const [dataLinkData] = useState([
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
			<div className="mt-4 flex flex-col gap-5 md:flex-row">
				<div className="size-[206px] overflow-hidden rounded-lg">
					<img src={collectionData.cover} className="w-full h-auto object-cover" />
				</div>
				<div className="flex-1 p-3 bg-black flex flex-col gap-3 rounded-xl">
					<div>
						<p
							className="cursor-pointer text-lg text-primary hover:underline"
							onClick={() => {
								navigate("/simdunk");
							}}
						>
							SimDunk
						</p>
						<p className="text-3xl font-bold">{collectionData.collection_name}</p>
					</div>

					<div className=" flex flex-row flex-wrap gap-3 items-center">
						{dataLinkData.map((item, index) => {
							return (
								<a key={index} href={item.link} target="_blank" rel="nofollow noopener noreferrer" className="flex items-center">
									<img className="w-7" src={item.iconimg} />
								</a>
							);
						})}
					</div>
					<p className="text-text-100">{collectionData.collection_desc}</p>
				</div>
			</div>
			<div className="mt-5 flex flex-wrap gap-2">
				<div className="w-[212px] h-[84px] bg-black p-3 rounded-lg flex flex-col gap-2">
					<p className="">Items</p>
					<p className="flex items-center font-bold">
						<span className="text-lg">{collectionData.mint_count}</span>
					</p>
				</div>
				<div className="w-[212px] h-[84px] bg-black p-3 rounded-lg flex flex-col gap-2">
					<p className="text-primary">Contract</p>
					<a
						href={collectionData.childLink + "/token/" + collectionData.address}
						target="_blank"
						rel="nofollow noopener noreferrer"
						className="flex items-center font-bold"
					>
						<span className="text-lg">{collectionData.address.slice(0, 5) + "..." + collectionData.address.slice(-4)}</span>
						<img src={iconLink} className="ml-2 size-[24px] cursor-pointer" />
					</a>
				</div>
				<div className="w-[212px] h-[84px] bg-black p-3 rounded-lg flex flex-col gap-2">
					<p className="text-[#01B5CD]">Token Standard</p>
					<p className="flex items-center font-bold">
						<span className="text-lg">ERC{collectionData.erc_type}</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default View;
