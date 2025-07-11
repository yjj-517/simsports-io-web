// collection-description
import React, { useState } from "react";

import iconMinus from "@/assets/imgs/common/icon-minus.png";
import iconPlus from "@/assets/imgs/common/icon-plus.png";

interface CollectionDataProps {
	collectionData: any;
}

const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	const [display, setDispaly] = useState<boolean>(true);
	return (
		<>
			<div className=" flex flex-col">
				<div className="text-xl font-bold flex justify-between items-center h-14 border-b border-bgcolor-800">
					<span>Description</span>
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
						{collectionData.raw_data.description && (
							<div className="mt-3 text-text-100">{collectionData.raw_data.description}</div>
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
