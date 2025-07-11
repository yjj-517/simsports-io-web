// collection-series
import React from "react";

interface CollectionDataProps {
	collectionData: any;
}

const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	return (
		<>
			<div className="flex items-stretch">
				<div className="w-2 bg-gradient-to-b from-primary to-secondary"></div>
				<div className="flex flex-col ml-3.5 gap-3 self-stretch">
					<div className="flex items-center">
						<img src={collectionData.childImg} className=" size-6 " />
						<p className="ml-1 text-primary">{collectionData.collection_name}</p>
					</div>
					<p className="text-3xl font-bold">
						<span>{collectionData.name}</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default View;
