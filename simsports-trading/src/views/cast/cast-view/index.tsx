// cast-view
import React, { useState, useEffect } from "react";
import { walletStores, accountStores, layoutStores } from "@/store/index"; //store
import NoFound from "@/components/no-found/index"; //no-found

import { ethers } from "ethers"; //ethers
import { StakingAbi } from "@/wallet/staking/index"; //contract
import { ipfsGatewayURL } from "@/utils/wallet"; //ipfs
import { chainData } from "@/utils/wallet"; //chain
import { switchWalletChain } from "@/wallet/wallet"; //钱包
import { ArbitrumOne, ArbitrumSepolia } from "@particle-network/chains"; //chain
import { getNftDetail, getListByGroup } from "@/http/modules/collections"; //接口

import TradeResultDialog from "@/components/trade-result-dialog/index"; //交易-弹窗

import { message, Spin } from "antd";

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react"; //IconSpin
import iconArbitumSepolia from "@/assets/imgs/wallet/icon-chain-arbitum-sepolia.svg";
import rBoxImg from "@/assets/imgs/mint/energy-tuner/r-box.gif";

const View: React.FC = () => {
	const { setWalletConnectDialog } = layoutStores(); //layout
	const { userState } = accountStores(); //account
	const { walletIfon } = walletStores(); //account
	const [noFoundText] = useState<string>("No collections found"); //noFound
	const [showModal, setShowModal] = useState<boolean>(false); //成功弹窗
	// 修改弹窗状态
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	// cast介绍
	const [castIntroduceData] = useState([
		"Can enable NFT Player to have the ability to earn qualifying points, participate in qualifying competitions, and earn qualifying points!",
	]);
	// 合约数据
	const [contractData, setContractData] = useState({
		contract: import.meta.env.VITE_CONTRACT_GAMEITEM_ADDR, //合约地址
		tokenId: "110", //tokenid
		chainImg: iconArbitumSepolia, //主网图片
		chainId: "421614", //chain
		imgurl: rBoxImg, //盒子图片
		collectionName: "Alpha Game Items", //合约名字
		name: "Energy Tuner R", //NFT-NAME
		childLink: chainData.arbitrumSepolia.link, //区块链网络标头
	});
	const [spinning, setSpinning] = useState<boolean>(false); //Spinning
	const [disabledButton] = useState<boolean>(true); //禁止点击
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	// 道具合约数据-数据
	const getContract = () => {
		setSpinning(true); //Spinning
		const objs = {
			contract_address: import.meta.env.VITE_CONTRACT_GAMEITEM_ADDR, //contract
			token_id: "110", //token_id
			user_address: "", //user-address
			network: "", //chain
		};
		getNftDetail(objs).then((res: any) => {
			console.log(res);
			if (res.code === 0) {
				console.log(res);
				res.data.cover = ipfsGatewayURL + "/" + res.data.cover.substring("ipfs://".length); //获取ipfs图片
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
				setContractData({
					...contractData,
					tokenId: res.data.token_id, //tokenid
					chainImg: res.data.childImg, //主网图片
					chainId: res.data.network, //chain
					imgurl: res.data.cover, //盒子图片
					collectionName: res.data.collection_name, //合约名字
					name: res.data.name, //合约名字
					childLink: res.data.childLink, //区块链网络标头
				});
			}
			setSpinning(false); //Spinning
		});
	};
	useEffect(() => {
		getContract();
	}, []);
	// 用户拥有道具数据
	const [contractNum, setContractNum] = useState("-");
	// 道具合约数据-数据
	const getContractNum = () => {
		const objs = {
			contract_address: import.meta.env.VITE_CONTRACT_GAMEITEM_ADDR, //contract
			token_id: "110", //token_id
			user_address: walletStores.getState().walletIfon.address, //user-address
			network: "", //chain
		};
		getNftDetail(objs).then((res: any) => {
			console.log(res);
			if (res.code === 0) {
				setContractNum(res.data.amount);
			} else if (res.code === 65) {
				setContractNum("0");
			} else {
				setContractNum("-");
			}
		});
	};
	useEffect(() => {
		if (userState) {
			getContractNum();
		} else {
			setContractNum("-");
		}
	}, [showModal, accountStores.getState().userState, walletStores.getState().walletIfon.address]);
	// show-gameitem-数据
	const [gameItemsData, setGameItemsData] = useState([]);
	// gameitems合约数据-数据
	const getGameItems = () => {
		const objs = {
			user_address: walletStores.getState().walletIfon.address, //wallet-address-
			contract_address: import.meta.env.VITE_CONTRACT_GAMENFT_ADDR, //contract
			token_id: "", //token_id
			network: "", //chain
		};
		getListByGroup(objs).then((res: any) => {
			const data = res.data.list;
			// 处理数据
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
			console.log(currentArray);
			// 删除数据
			const itemArray = currentArray.filter((item: any) => {
				const res = item.raw_data.attributes.some((obj: any) => obj.trait_type === "Season #1");
				if (res) {
					return false;
				} else {
					return true;
				}
			});
			console.log(itemArray);
			setGameItemsData(itemArray);
		});
	};
	useEffect(() => {
		if (userState) {
			getGameItems();
		} else {
			setGameItemsData([]);
		}
	}, [accountStores.getState().userState, walletStores.getState().walletIfon.address]);
	//选中gameItem-的值
	const [selGameItems, setSelGameItems] = useState<any>({});
	// 成功数据
	const [castShowData, setCastShowData] = useState({
		state: 0, //cast 0-动画/1-成功/2-失败
		showImg: "", //图片
		count: 1, //数量
		hash: "", //交易hash
		link: "", //区块链网络标头
		failedText: "Sorry, your cast has failed!", //报错文字
	});
	// 调用cast合约
	const castGameItem = async (selGameItems: any) => {
		if (!isLoading) {
			setIsLoading(true); //Loading
			console.log(selGameItems);
			const itemCards = selGameItems;
			const SpecialTicketContract = await StakingAbi(); //构建SpecialTicket合约
			await SpecialTicketContract.StakingSigner.updateSeasonByItem(itemCards.token_id, contractData.tokenId)
				.then(async (res: any) => {
					setIsLoading(false); //Loading
					setShowModal(true); //开启弹窗
					setCastShowData({ ...castShowData, state: 0 }); //开启动画
					await res
						.wait()
						.then(async (r: any) => {
							console.log(r);
							setCastShowData({
								...castShowData,
								state: 1, //mint 0-动画/1-成功/2-失败
								showImg: itemCards.cover, //图片
								link: contractData.childLink, //区块链网络标头
								hash: r.hash, //交易hash
							}); //开启动画
						})
						.catch((err: any) => {
							console.log(err);
							setCastShowData({
								...castShowData,
								state: 2, //mint 0-动画/1-成功/2-失败
							}); //开启动画
						});
				})
				.catch(() => {
					message.warning("Unknown Error.");
					setIsLoading(false); //Loading
				});
		}
	};
	// 点击cast按钮
	const onCast = async () => {
		if (disabledButton) {
			if (userState) {
				if (Number(contractNum) > 0) {
					if (selGameItems.token_id) {
						if (contractData.chainId == walletIfon.chainId) {
							castGameItem(selGameItems);
						} else {
							message.loading("Please switch chain.");
							// chainId网络不对
							if (contractData.chainId == chainData.arbitumOne.id) {
								await switchWalletChain(ArbitrumOne);
							} else if (contractData.chainId == chainData.arbitrumSepolia.id) {
								await switchWalletChain(ArbitrumSepolia);
							}
						}
					} else {
						// 没有选择gameitem
						message.loading("No game character selected.");
					}
				} else {
					// 没有道具
					message.loading("No Energy Tuner R.");
				}
			} else {
				// 未登录
				setWalletConnectDialog(true); //打开wallet
			}
		}
	};
	return (
		<>
			<Spin spinning={spinning} fullscreen />
			<section className="main">
				<div className="mt-10 flex justify-between items-start flex-col gap-10 md:flex-row">
					<div className="w-full md:w-[45%] flex justify-between flex-col gap-10 md:flex-row">
						<div className="w-full md:w-[90%]">
							<div className="w-full bg-bgcolor-400 rounded-xl relative">
								<div className="w-full overflow-hidden rounded-lg relative cursor-pointer">
									<div className="absolute m-2 size-8 rounded z-10 bg-bgcolor-400 flex items-center justify-center">
										<img src={contractData.chainImg} className="size-[24px]" />
									</div>
									<img src={contractData.imgurl} className="scale-img w-full h-auto" />
								</div>
								<div className="p-3 w-full flex  justify-between gap-2">
									<div className="text-lg font-bold flex flex-col gap-3">
										<p className="text-primary">{contractData.tokenId}</p>
										<p className="">{contractData.collectionName}</p>
										<p className="">{contractData.name}</p>
									</div>
									<div className="flex flex-col gap-3 text-right">
										<p className="text-primary">QUANTITY</p>
										<p className={`${contractNum === "-" ? "" : "font-bold "} font-Quantico text-6xl `}>{contractNum}</p>
									</div>
								</div>
							</div>

							<button
								className={`${disabledButton ? "" : " cursor-not-allowed "} fillet-button mt-10 w-full py-2.5 `}
								onClick={() => {
									onCast();
								}}
							>
								{isLoading ? <IconSpin className="size-7 text-primary animate-spin-slow-1" /> : <span>CAST</span>}
							</button>
						</div>
						<div className="bg-bgcolor-200 w-full h-0.5 md:w-0.5 md:h-auto"></div>
					</div>
					<div className="w-full md:w-[50%] flex flex-wrap gap-5 max-h-[500px] sm:max-h-[1000px] trove-scrollbar">
						{gameItemsData.length > 0 ? (
							<>
								{gameItemsData.map((item: any, index) => {
									return (
										<div
											key={index}
											className={`${selGameItems.token_id === item.token_id ? "border-primary " : "border-bgcolor-100 "} w-[196px] bg-bgcolor-400 rounded-xl relative border-2 `}
											onClick={() => {
												setSelGameItems(item);
											}}
										>
											<div className="w-full overflow-hidden rounded-lg relative cursor-pointer">
												<div className="absolute m-2 size-6 rounded z-10 bg-bgcolor-400 flex items-center justify-center">
													<img src={item.childImg} className="size-[18px]" />
												</div>
												<img src={item.cover} className="scale-img size-[196px]" />
											</div>
											<div className="p-2 w-full flex flex-col gap-1">
												<p className="text-primary text-sm font-bold">{item.token_id}</p>
												<p className="">{item.collection_name}</p>
												<p className="">{item.name}</p>
											</div>
										</div>
									);
								})}
							</>
						) : (
							<div className="w-full h-[500px] flex justify-center items-center">
								<NoFound noFoundText={noFoundText} />
							</div>
						)}
					</div>
				</div>
				<div className="mt-16 p-4 w-full bg-bgcolor-700 rounded-xl flex flex-col gap-6">
					{castIntroduceData.map((item, index) => {
						return (
							<p key={index} className="text-text-200">
								{item}
							</p>
						);
					})}
				</div>
			</section>
			<div className="pt-40"></div>
			{showModal ? <TradeResultDialog onClose={toggleModal} tradeShowData={castShowData} /> : <></>}
		</>
	);
};

export default View;
