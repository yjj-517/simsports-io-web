// collections
import React, { useState, useEffect } from "react";

import ItemCard from "@/components/item-card/index"; //item-card
import IsloadingView from "@/components/isloading-view/index"; //is-loading
import NoFound from "@/components/no-found/index"; //no-found

import { ethers } from "ethers"; //ethers
import { chainData } from "@/utils/wallet";

import { ipfsGatewayURL } from "@/utils/wallet"; //ipfs
import { getListByGroup } from "@/http/modules/collections"; //接口

import { walletStores } from "@/store/index"; //store

const View: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	const [noFoundText] = useState<string>("No collections found"); //noFound
	// 游戏数据
	const [itemCardData, setItemCardData] = useState<any[]>([]);
	// 合约数据-数据
	const getContract = async () => {
		setIsLoading(false); //Loading
		// 道具
		const gameItemObjs = {
			user_address: walletStores.getState().walletIfon.address, //userInfo-address-
			contract_address: import.meta.env.VITE_CONTRACT_GAMEITEM_ADDR, //contract
			token_id: "", //token_id
			network: "", //chain
		};
		// // 联赛
		// const ticketsObjs = {
		// 	user_address: walletStores.getState().walletIfon.address, //userInfo-address-
		// 	contract_address: import.meta.env.VITE_CONTRACT_SPECIALTICKET_ADDR, //contract
		// 	token_id: "", //token_id
		// 	network: "", //chain
		// };
		// game
		const gameObjs = {
			user_address: walletStores.getState().walletIfon.address, //userInfo-address-
			contract_address: import.meta.env.VITE_CONTRACT_GAMENFT_ADDR, //contract
			token_id: "", //token_id
			network: "", //chain
		};
		try {
			// 获取相应的道具数据
			const res01 = await getListByGroup(gameItemObjs);
			// const res02 = await getListByGroup(ticketsObjs);
			const res03 = await getListByGroup(gameObjs);
			const resArr = res01.data.list.concat(res03.data.list);
			// console.log(resArr);
			const currentArray = resArr.map((item: any) => {
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
			setIsLoading(true); //Loading
		} catch (err) {
			setIsLoading(true); //Loading
		}
	};
	useEffect(() => {
		getContract();
	}, []);
	return (
		<>
			<section className="main mt-8">
				{isLoading ? (
					<>
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
