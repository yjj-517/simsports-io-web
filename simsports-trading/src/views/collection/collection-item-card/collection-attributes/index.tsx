// collection-attributes
import React, { useState } from "react";

import { formatTimestamp } from "@/utils/util";
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
					<span>Attributes</span>
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
						{collectionData.raw_data.attributes && (
							<>
								{collectionData.raw_data.attributes.map((item: any, index: any) => {
									return (
										<div key={index} className="p-2 rounded-lg  bg-black lg:bg-bgcolor-100">
											<p className="text-text-100">{item.trait_type}</p>
											<p className="flex items-center font-bold">
												<span className="text-lg">
													{item.trait_type === "Season #1" ? <>{formatTimestamp(item.value * 1000)}</> : <>{item.value}</>}
												</span>
												{/* <span className="text-sm text-primary ml-1">{item.value}</span> */}
											</p>
										</div>
									);
								})}
							</>
						)}
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default View;
