// collection
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spin } from "antd";

import { chainData } from "@/utils/wallet";
import { ethers } from "ethers"; //ethers
import { ipfsGatewayURL } from "@/utils/wallet"; //ipfs
import { getCollections, getListByGroup } from "@/http/modules/collections"; //接口

import ContractItem from "./contract-item/index";

import ItemCard from "@/components/item-card/index"; //item-card
import IsloadingView from "@/components/isloading-view/index"; //is-loading
import NoFound from "@/components/no-found/index"; //no-found

const View: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	const [spinning, setSpinning] = React.useState<boolean>(false); //Spinning
	const navigate = useNavigate(); //路由跳转
	const params = useParams(); //路由参数
	// const navigate = useNavigate(); //路由跳转
	// const params = useParams(); //路由参数
	const [collectionData, setCollectionData] = useState({});
	// 合约数据-数据
	const getContract = () => {
		setSpinning(true); //Spinning
		setIsLoading(false); //Loading
		const objs = {
			contract_address: params.param1, //合约地址
			network: "", //网络
		};
		getCollections(objs)
			.then((res: any) => {
				if (res.code === 0) {
					console.log(res);
					if (res.data.list.length > 0) {
						const data = res.data.list[0];
						// 处理网络
						if (data.network == chainData.arbitumOne.id) {
							data.childImg = chainData.arbitumOne.icon;
							data.childLink = chainData.arbitumOne.link;
						} else if (data.network == chainData.arbitrumSepolia.id) {
							data.childImg = chainData.arbitrumSepolia.icon;
							data.childLink = chainData.arbitrumSepolia.link;
						} else {
							data.childImg = chainData.arbitumOne.icon;
							data.childLink = chainData.arbitumOne.link;
						}
						console.log(data);
						setCollectionData(data);
					} else {
						navigate("/404");
					}
				}
				setSpinning(false); //Spinning
				setIsLoading(true); //Loading
			})
			.catch(() => {
				navigate("/404");
				setSpinning(false); //Spinning
			});
	};
	useEffect(() => {
		getContract();
	}, []);
	const [isLoadingCard, setIsLoadingCard] = useState<boolean>(false); //Loading
	const [noFoundText] = useState<string>("No collections found"); //noFound
	// 游戏数据
	const [itemCardData, setItemCardData] = useState<any[]>([]);
	// 合约数据-数据
	const getContractCard = async () => {
		setIsLoadingCard(false); //Loading
		const objs = {
			user_address: "", //
			contract_address: params.param1, //合约地址
			token_id: "", //token_id
			network: "", //chain
		};
		getListByGroup(objs).then((res: any) => {
			if (res.code === 0) {
				console.log(res);
				const data = res.data.list;
				const currentArray = data.map((item: any) => {
					item.raw_data = JSON.parse(item.raw_data);
					item.cover = ipfsGatewayURL + "/" + item.cover.substring("ipfs://".length); //获取ipfs图片
					// 处理价格
					if (item.price_token_address == import.meta.env.VITE_CONTRACT_DUNKTOKEN_ADDR) {
						item.mint_price = ethers.formatUnits(item.mint_price, 6);
						item.priceUnit = "Dunk";
					} else if (item.price_token_address == import.meta.env.VITE_CONTRACT_USDTTOKEN_ADDR) {
						item.mint_price = ethers.formatUnits(item.mint_price, 6);
						item.priceUnit = "USDT";
					} else {
						item.mint_price = ethers.formatEther(String(item.mint_price));
						item.priceUnit = "ETH";
					}
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
				setItemCardData(currentArray);
			}
			setIsLoadingCard(true); //Loading
		});
	};
	useEffect(() => {
		getContractCard();
	}, []);
	return (
		<>
			<Spin spinning={spinning} fullscreen />
			{isLoading && (
				<>
					<section className="main">
						<ContractItem collectionData={collectionData} />
					</section>
					<div className="bg-primary h-0.5 w-full my-10"></div>
					{isLoadingCard ? (
						<section className="main">
							{itemCardData.length === 0 && (
								<div className="my-20">
									<NoFound noFoundText={noFoundText} />
								</div>
							)}
							{itemCardData.length > 0 && (
								<div className="flex flex-wrap gap-7">
									{itemCardData.map((item, index) => {
										return (
											<div key={index}>
												<ItemCard itemCards={item} />
											</div>
										);
									})}
								</div>
							)}
						</section>
					) : (
						<div className="py-10">
							<IsloadingView />
						</div>
					)}
				</>
			)}
			<div className="pt-20"></div>
		</>
	);
};

export default View;
