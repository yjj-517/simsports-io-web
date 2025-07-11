// collection-price
import React from "react";

import iconClock from "@/assets/imgs/common/icon-clock.png";

interface CollectionDataProps {
	collectionData: any;
}
const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	return (
		<>
			<div className="flex flex-col p-3 bg-black rounded-lg">
				<p className="text-4xl font-bold">
					<span>{collectionData.mint_price}</span>
					<span className="ml-2">{collectionData.priceUnit}</span>
				</p>
				<div className="mt-3 flex items-center text-text-100">
					<p>Last sale</p>
					<img src={iconClock} className="size-[32px] cursor-pointer" />
				</div>
			</div>
		</>
	);
};

export default View;
