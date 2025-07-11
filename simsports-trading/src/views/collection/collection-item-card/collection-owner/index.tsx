// collection-owner
import React from "react";

import IconUserscardItems from "@/assets/imgs/common/icon-userscard-items.svg?react";
import IconUserscardOwner from "@/assets/imgs/common/icon-userscard-owner.svg?react";

interface CollectionDataProps {
	collectionData: any;
}
const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col">
					<div className="flex items-center gap-1">
						<IconUserscardOwner className="size-5 min-w-5" />
						{collectionData.owner.length == 1 ? (
							<div className="flex items-center text-text-100 gap-1">
								<span>Owner: </span>
								<span className="break-all hidden md:inline-block">{collectionData.owner}</span>
								<span className="break-all md:hidden">
									{collectionData.owner[0].slice(0, 6) + "..." + collectionData.owner[0].slice(-4)}
								</span>
							</div>
						) : (
							<div className="flex items-center text-text-100 gap-1">
								<span>{collectionData.owner.length}</span>
								<span>Owners</span>
							</div>
						)}
					</div>
					<div className="flex items-center gap-1">
						<IconUserscardItems className="size-5 min-w-5" />
						<div className="flex items-center text-text-100 gap-1">
							<span>{collectionData.amount}</span>
							<span>Items</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default View;
