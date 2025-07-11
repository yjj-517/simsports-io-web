// collection-img
import React from "react";

interface CollectionDataProps {
	collectionData: any;
}

const View: React.FC<CollectionDataProps> = ({ collectionData }: CollectionDataProps) => {
	return (
		<>
			<div className="w-full rounded-xl overflow-hidden">
				<img src={collectionData.cover} className="w-full" />
			</div>
		</>
	);
};

export default View;
