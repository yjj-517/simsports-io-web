// collection-collection
import React, { useState } from "react";

import { userCommunityData } from "@/utils/medialink";
import simdunkLogo from "@/assets/imgs/logo/simdunk-logo.png";
import iconMinus from "@/assets/imgs/common/icon-minus.png";
import iconPlus from "@/assets/imgs/common/icon-plus.png";
import iconTwitter from "@/assets/imgs/home/common/icon-twitter.png";
interface CollectionDataProps {
	collectionData: any;
}

const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	const [display, setDispaly] = useState<boolean>(true);
	return (
		<>
			<div className=" flex flex-col">
				<div className="text-xl font-bold flex justify-between items-center h-14 border-b border-bgcolor-800">
					<span>Collection</span>
					<img
						src={display ? iconMinus : iconPlus}
						className="h-[30px] cursor-pointer"
						onClick={() => {
							setDispaly(!display);
						}}
					/>
				</div>
				{display ? (
					<>
						{collectionData.collection_desc && (
							<div className="mt-3">
								<div className="flex justify-between items-center">
									<div className="flex items-center">
										<img src={simdunkLogo} className="size-[24px] cursor-pointer" />
										<p className="ml-2">{collectionData.collection_name}</p>
									</div>
									<a href={userCommunityData.twitter.link} target="_blank" rel="nofollow noopener noreferrer">
										<img src={iconTwitter} className="size-[24px] cursor-pointer" />
									</a>
								</div>
								<p className="mt-3 text-text-100">{collectionData.collection_desc}</p>
							</div>
						)}
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default View;
