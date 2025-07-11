// collection-details
import React, { useState } from "react";

import iconMinus from "@/assets/imgs/common/icon-minus.png";
import iconPlus from "@/assets/imgs/common/icon-plus.png";
import iconLink from "@/assets/imgs/common/icon-link.png";

interface CollectionDataProps {
	collectionData: any;
}

const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	const [display, setDispaly] = useState<boolean>(true);
	return (
		<>
			<div className=" flex flex-col">
				<div className="text-xl font-bold flex justify-between items-center h-14 border-b border-bgcolor-800">
					<span>Details</span>
					<img
						src={display ? iconMinus : iconPlus}
						className="h-[30px] cursor-pointer"
						onClick={() => {
							setDispaly(!display);
						}}
					/>
				</div>
				{display ? (
					<div className="mt-3 grid gap-x-2 gap-y-4 grid-cols-2 xl:grid-cols-3">
						<div className="bg-black p-3 rounded-lg flex flex-col gap-2">
							<p className="text-primary">Contract</p>
							<a
								href={collectionData.childLink + "/token/" + collectionData.contract}
								target="_blank"
								rel="nofollow noopener noreferrer"
								className="flex items-center font-bold"
							>
								<span className="text-lg">{collectionData.contract.slice(0, 5) + "..." + collectionData.contract.slice(-4)}</span>
								<img src={iconLink} className="ml-2 size-[24px] cursor-pointer" />
							</a>
						</div>
						<div className="bg-black p-3 rounded-lg flex flex-col gap-2">
							<p className="text-[#01B5CD]">Token Standard</p>
							<p className="flex items-center font-bold">
								<span className="text-lg">ERC{collectionData.erc_type}</span>
							</p>
						</div>
						<div className="bg-black p-3 rounded-lg flex flex-col gap-2">
							<p className="text-[#905AFB]">Token ID</p>
							<p className="flex items-center font-bold">
								<span className="text-lg">{collectionData.token_id}</span>
							</p>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default View;
