// collection
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { chainData } from "@/utils/wallet";

import CollectionImg from "./collection-img/index";
import CollectionAttributes from "./collection-attributes/index";
import CollectionSeries from "./collection-series/index";
import CollectionOwner from "./collection-owner/index";
import CollectionPrice from "./collection-price/index";
import CollectionDescription from "./collection-description/index";
import CollectionCollection from "./collection-collection/index";
import CollectionDetails from "./collection-details/index";

import { ethers } from "ethers"; //ethers

import { ipfsGatewayURL } from "@/utils/wallet"; //ipfs
import { getNftDetail } from "@/http/modules/collections"; //接口

const View: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	const [spinning, setSpinning] = React.useState<boolean>(false); //Spinning
	const navigate = useNavigate(); //路由跳转
	const params = useParams(); //路由参数
	const [collectionData, setCollectionData] = useState({});
	// 合约数据-数据
	const getContract = () => {
		setSpinning(true); //Spinning
		setIsLoading(false); //Loading
		const objs = {
			contract_address: params.param1, //contract
			token_id: params.param2, //token_id
			user_address: "", //user-address
			network: "", //chain
		};
		getNftDetail(objs)
			.then((res: any) => {
				if (res.code === 0) {
					// console.log(res);
					res.data.raw_data = JSON.parse(res.data.raw_data);
					res.data.cover = ipfsGatewayURL + "/" + res.data.cover.substring("ipfs://".length); //获取ipfs图片
					// 处理价格
					if (res.data.price_token_address == import.meta.env.VITE_CONTRACT_DUNKTOKEN_ADDR) {
						res.data.mint_price = ethers.formatUnits(res.data.mint_price, 6);
						res.data.priceUnit = "Dunk";
					} else if (res.data.price_token_address == import.meta.env.VITE_CONTRACT_USDTTOKEN_ADDR) {
						res.data.mint_price = ethers.formatUnits(res.data.mint_price, 6);
						res.data.priceUnit = "USDT";
					} else {
						res.data.mint_price = ethers.formatEther(String(res.data.mint_price));
						res.data.priceUnit = "ETH";
					}
					// 处理网络
					if (res.data.network == chainData.arbitumOne.id) {
						res.data.childImg = chainData.arbitumOne.icon;
						res.data.childLink = chainData.arbitumOne.link;
					} else if (res.data.network == chainData.arbitrumSepolia.id) {
						res.data.childImg = chainData.arbitrumSepolia.icon;
						res.data.childLink = chainData.arbitrumSepolia.link;
					} else {
						res.data.childImg = chainData.arbitumOne.icon;
						res.data.childLink = chainData.arbitumOne.link;
					}
					console.log(res);
					setCollectionData(res.data); //数据重置
				} else {
					navigate("/404");
				}
				setSpinning(false); //Spinning
				setIsLoading(true); //Loading
			})
			.catch(() => {
				navigate("/404");
				setIsLoading(true); //Loading
			});
	};
	useEffect(() => {
		getContract();
	}, []);
	return (
		<>
			<Spin spinning={spinning} fullscreen />
			<section className="main mt-10">
				{isLoading ? (
					<div className="flex items-start gap-10 flex-col lg:flex-row">
						<div className="w-full lg:w-[40%] bg-black rounded-xl overflow-hidden">
							<CollectionImg collectionData={collectionData} />
							<div className="p-4 hidden lg:block">
								<CollectionAttributes collectionData={collectionData} />
							</div>
						</div>
						<div className="w-full lg:w-[60%] flex flex-col gap-10">
							<CollectionSeries collectionData={collectionData} />
							<CollectionOwner collectionData={collectionData} />
							<CollectionPrice collectionData={collectionData} />
							<CollectionDescription collectionData={collectionData} />
							<CollectionCollection collectionData={collectionData} />
							<div className="block lg:hidden">
								<CollectionAttributes collectionData={collectionData} />
							</div>
							<CollectionDetails collectionData={collectionData} />
						</div>
					</div>
				) : (
					<></>
				)}
				<div className="pt-20"></div>
			</section>
		</>
	);
};

export default View;
