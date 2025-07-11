// energy-tuner-R
import React, { useState, useEffect } from "react";
import { message, Spin } from "antd";

import { chainData } from "@/utils/wallet";
import { ArbitrumOne, ArbitrumSepolia } from "@particle-network/chains"; //chain
import { switchWalletChain } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //ethers
import { GameItemAbi } from "@/wallet/gameItem/index"; //contract

import { getTicketItems } from "@/http/modules/collections"; //接口
import { walletStores, accountStores, layoutStores } from "@/store/index"; //store

import TradeResultDialog from "@/components/trade-result-dialog/index"; //交易-弹窗
import IconSpin from "@/assets/imgs/common/icon-spin.svg?react"; //IconSpin

import iconArbitumSepolia from "@/assets/imgs/wallet/icon-chain-arbitum-sepolia.svg";

import boxImg from "@/assets/imgs/mint/energy-tuner/r-box.png";
import rBoxImg from "@/assets/imgs/mint/energy-tuner/r-box.gif";

import bgLineImg from "@/assets/imgs/mint/energy-tuner/bg-line-img.png";
import titleImg from "@/assets/imgs/mint/energy-tuner/title-img.png";
import bgImg from "@/assets/imgs/mint/energy-tuner/r-bg-img.png";
import boxBg from "@/assets/imgs/mint/energy-tuner/r-box-bg.png";
import titleImg02 from "@/assets/imgs/mint/energy-tuner/r-title-img.png";

const View: React.FC = () => {
	const { userState } = accountStores(); //account
	const { setWalletConnectDialog } = layoutStores(); //layout
	const { walletIfon } = walletStores(); //wallet
	const [showModal, setShowModal] = useState<boolean>(false); //成功弹窗
	// 修改弹窗状态
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	// 成功数据
	const [mintShowData, setMintShowData] = useState({
		state: 0, //mint 0-动画/1-成功/2-失败
		showImg: rBoxImg, //图片
		count: 1, //数量
		hash: "", //交易hash
		link: "", //区块链网络标头
		failedText: "Sorry, your mint has failed!", //报错文字
	});
	// 合约数据
	const [contractData, setContractData] = useState({
		contract: import.meta.env.VITE_CONTRACT_GAMEITEM_ADDR, //合约地址
		tokenId: 110, //tokenid
		chainImg: iconArbitumSepolia, //主网图片
		chainId: "421614", //chain
		imgurl: boxImg, //盒子图片
		priceImg: iconArbitumSepolia, //价格图片
		name: "Energy Tuner R", //合约名字
		price: "0.002", //价格
		priceUnit: "ETH", //单位
		mintNum: [1, 3, 5], //mint-num
		connt: 0, //已售
		total: 15000, //总数
		childLink: chainData.arbitrumSepolia.link, //区块链网络标头
	});

	const [spinning, setSpinning] = useState<boolean>(true); //Spinning
	const [disabledButton, setdisabledButton] = useState<boolean>(false); //禁止点击
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	const [mintNum, setMintNum] = useState<number>(1); //mint-num
	// 合约数据-数据
	const getContract = () => {
		setSpinning(true); //Spinning
		// tid：tokenID  高级身份通证-101/初级身份通证-102/排位赛赏金通证
		const objs = {
			token_id: contractData.tokenId,
		};
		getTicketItems(objs).then((res: any) => {
			if (res.code === 0) {
				// console.log(res);
				const data = res.data.list[0];
				console.log(data);
				// 处理价格
				if (data.price_token_address == import.meta.env.VITE_CONTRACT_DUNKTOKEN_ADDR) {
					data.mint_price = ethers.formatUnits(data.mint_price, 6);
					data.priceUnit = "Dunk";
				} else if (data.price_token_address == import.meta.env.VITE_CONTRACT_USDTTOKEN_ADDR) {
					data.mint_price = ethers.formatUnits(data.mint_price, 6);
					data.priceUnit = "USDT";
				} else {
					data.mint_price = ethers.formatEther(String(data.mint_price));
					data.priceUnit = "ETH";
				}
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
				setContractData({
					...contractData,
					price: data.mint_price, //价格
					chainImg: data.childImg, //主网
					chainId: data.network, //chainId
					priceUnit: data.priceUnit, //单位
					mintNum: data.one_time_count, //mint-num
					connt: data.mint_count, //已售
					total: data.total_count, //总数
					childLink: data.childLink, //区块链网络标头
				});
				if (data.mint_count < data.total_count) {
					setdisabledButton(true); //判断是否还能mint
				}
				setSpinning(false); //Spinning
			}
		});
	};
	useEffect(() => {
		if (!showModal) {
			getContract();
		}
	}, [showModal]);
	// mint
	const mintBlindBox = async () => {
		if (!isLoading) {
			setIsLoading(true); //Loading
			const count = mintNum; //mint数量
			const GameItemContract = await GameItemAbi(contractData.tokenId); //构建game合约
			// console.log(GameItemContract);
			if (GameItemContract.items.TokenAddress == ethers.ZeroAddress) {
				// 支付主链币购买的
				const unitPrice = Number(ethers.formatEther(GameItemContract.items.price)); //单价
				const price = ethers.parseEther(String(unitPrice * count)); //购买价格
				await GameItemContract.GameItemSigner.mint(contractData.tokenId, count, { value: price })
					.then(async (res: any) => {
						setIsLoading(false); //Loading
						setShowModal(true); //开启弹窗
						setMintShowData({ ...mintShowData, state: 0 }); //开启动画
						await res
							.wait()
							.then(async (r: any) => {
								// console.log(r);
								setMintShowData({
									...mintShowData,
									state: 1, //mint 0-动画/1-成功/2-失败
									showImg: GameItemContract.items.mintImg, //图片
									link: contractData.childLink, //区块链网络标头
									count: count, //数量
									hash: r.hash, //交易hash
								}); //开启动画
							})
							.catch((err: any) => {
								console.log(err);
								setMintShowData({
									...mintShowData,
									state: 2, //mint 0-动画/1-成功/2-失败
								}); //开启动画
							});
					})
					.catch(() => {
						message.warning("Unknown Error.");
						setIsLoading(false); //Loading
					});
			} else {
				message.warning("Unknown Error.");
				setIsLoading(false); //Loading
			}
		}
	};
	// 点击mint
	const mintBlind = async () => {
		if (disabledButton) {
			if (userState) {
				if (contractData.chainId == walletIfon.chainId) {
					mintBlindBox();
				} else {
					// chainId网络不对
					message.loading("Please switch chain.");
					if (contractData.chainId == chainData.arbitumOne.id) {
						await switchWalletChain(ArbitrumOne);
					} else if (contractData.chainId == chainData.arbitrumSepolia.id) {
						await switchWalletChain(ArbitrumSepolia);
					}
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
			<div className="relative min-h-[920px] overflow-hidden ">
				<div className="w-[1920px] absolute left-2/4 translate-x-[-50%]">
					<img src={bgImg} className="h-[920px]" />
				</div>
				<section className="main">
					<div className="absolute h-[920px] top-0 left-0">
						<img src={bgLineImg} className="w-full h-[920px]" />
					</div>
					<div className="flex justify-between flex-col gap-5 items-center md:flex-row">
						<div className="relative w-[644px] min-w-[300px] h-[916px] overflow-hidden flex flex-col">
							<div className="max-w-[280px] z-10 m-auto animate-rotate-x-2d-10">
								<img src={contractData.imgurl} className="w-full" />
							</div>
							<div className="absolute left-2/4 translate-x-[-50%] w-[644px]">
								<img src={boxBg} className="h-[916px]" />
							</div>
						</div>
						<div className="flex flex-col max-w-[476px]">
							<div className="flex gap-5">
								<div className="max-h-[180px]">
									<img src={titleImg} className="max-h-[180px]" />
								</div>
								<div className="max-h-[180px]">
									<img src={titleImg02} className="max-h-[180px]" />
								</div>
							</div>
							<div className="mt-16 p-3 flex flex-col bg-bgcolor-1000 rounded-xl gap-2">
								<p className="text-primary font-bold">
									<span>Mint Price </span>
									<span>({contractData.priceUnit})</span>
								</p>
								<div className="flex justify-between items-center text-6xl">
									<p className="font-Quantico">{contractData.price}</p>
									<img src={contractData.chainImg} className="w-[60px]" />
								</div>
								<div className="flex gap-1">
									<span>QUANTITY:</span>
									<span>
										{contractData.connt}/{contractData.total}
									</span>
								</div>
							</div>
							<div className="mt-6 p-3 flex flex-col bg-bgcolor-1000 rounded-xl gap-2">
								<p className="text-primary font-bold">Amount of Mint</p>
								<div className="flex gap-3">
									{contractData.mintNum.map((item, index) => {
										return (
											<button
												key={index}
												onClick={() => {
													setMintNum(item);
												}}
												className={`${item === mintNum ? "bg-primary border-primary" : "bg-bgcolor-500 text-text-100 hover:border-dotted hover:border-primary "} rounded-sm size-9 font-bold border border-bgcolor-1000`}
											>
												{item}
											</button>
										);
									})}
								</div>
							</div>
							<button
								className={`${disabledButton ? "" : " cursor-not-allowed "} fillet-button mt-14 py-2.5 text-lg mb-10 `}
								onClick={() => {
									mintBlind();
								}}
							>
								{isLoading ? <IconSpin className="size-7 text-primary animate-spin-slow-1" /> : <span>Mint</span>}
							</button>
						</div>
					</div>
				</section>
			</div>
			{showModal ? <TradeResultDialog onClose={toggleModal} tradeShowData={mintShowData} /> : <></>}
		</>
	);
};

export default View;
