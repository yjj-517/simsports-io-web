// simdunk-collections
import React, { useState, useEffect } from "react";

import { chainData } from "@/utils/wallet"; //chain

import { getCollections } from "@/http/modules/collections"; //接口
import ContractCard from "@/components/contract-card/index"; //contract-card
import IsloadingView from "@/components/isloading-view/index"; //is-loading
import NoFound from "@/components/no-found/index"; //no-found

const View: React.FC = () => {
	const [noFoundText] = useState<string>("No collections found"); //noFound
	// show-数据
	const [showData, setShowData] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	// 合约数据-数据
	const getContract = async () => {
		setIsLoading(false); //Loading
		const objs = {
			contract_address: "", //合约地址
			network: "", //网络
		};
		getCollections(objs).then((res: any) => {
			if (res.code === 0) {
				console.log(res);
				const data = res.data.list;
				console.log(data);
				const dataArr = data.map((item: any) => {
					// 处理网络
					if (item.network == chainData.arbitumOne.id) {
						item.childImg = chainData.arbitumOne.icon;
						item.childLink = chainData.arbitumOne.link;
					} else if (item.network == chainData.arbitrumSepolia.id) {
						item.childImg = chainData.arbitrumSepolia.icon;
						item.childLink = chainData.arbitrumSepolia.link;
					} else {
						item.childImg = chainData.arbitumOne.icon;
						item.childLink = chainData.arbitumOne.link;
					}

					return item;
				});
				setShowData(dataArr);
			}
			setIsLoading(true); //Spinning
		});
	};
	useEffect(() => {
		getContract();
	}, []);
	return (
		<>
			<section className="main">
				{isLoading ? (
					<>
						{showData.length === 0 && (
							<div className="my-20">
								<NoFound noFoundText={noFoundText} />
							</div>
						)}
						{showData.length > 0 && (
							<div className=" mt-8 flex flex-wrap gap-7 items-stretch">
								{showData.map((item, index) => {
									return (
										<div key={index}>
											<ContractCard contractCards={item} />
										</div>
									);
								})}
							</div>
						)}
					</>
				) : (
					<div className="py-10">
						<IsloadingView />
					</div>
				)}
			</section>
		</>
	);
};

export default View;
