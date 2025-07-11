// energy-tuner-R
import React, { useState, useEffect, useRef } from "react";
import { message, Spin } from "antd";

import { chainData } from "@/utils/wallet";
import { ArbitrumOne, ArbitrumSepolia } from "@particle-network/chains"; //chain
import { switchWalletChain } from "@/wallet/wallet"; //钱包
import { ethers } from "ethers"; //ethers
import { MintGameGenesisAbi } from "@/wallet/mintGameGenesis/index"; //contract-mint
import { GameNftAbi } from "@/wallet/gameNft/index"; //contract-gamenft
import { DunkTokenAbi } from "@/wallet/dunkToken/index"; //contract-dunk

import { getAlpha2Mintinfo } from "@/http/modules/collections"; //接口
import { walletStores, accountStores, layoutStores } from "@/store/index"; //store

import { Carousel } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./index.css"; //修改Carousel 的css

import TradeResultDialog from "@/components/trade-result-dialog/index"; //交易-弹窗
import IconSpin from "@/assets/imgs/common/icon-spin.svg?react"; //IconSpin

import iconArbitumSepolia from "@/assets/imgs/wallet/icon-chain-arbitum-sepolia.svg";
import bgImg from "@/assets/imgs/mint/genesis-nft/bg-img.png";
import titleImg from "@/assets/imgs/mint/genesis-nft/title-img.png";

import nftCardEffy from "@/assets/imgs/mint/genesis-nft/nft-card-effy.png";
import nftCardJovani from "@/assets/imgs/mint/genesis-nft/nft-card-jovani.png";
import nftCardYonatan from "@/assets/imgs/mint/genesis-nft/nft-card-yonatan.png";
import iconChangeLeft from "@/assets/imgs/mint/genesis-nft/icon-change-left.png";
import iconChangeRight from "@/assets/imgs/mint/genesis-nft/icon-change-right.png";

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
		showImg: "", //图片
		count: 1, //数量
		hash: "", //交易hash
		link: "", //区块链网络标头
		failedText: "Sorry, your mint has failed!", //报错文字
	});
	// 合约数据
	const [contractData, setContractData] = useState({
		contract: import.meta.env.VITE_GENESIS_MINT_ADDR, //合约地址
		chainImg: iconArbitumSepolia, //主网图片
		chainId: "421614", //chain
		priceImg: iconArbitumSepolia, //价格图片
		mintNum: [1], //mint-num
		childLink: chainData.arbitrumSepolia.link, //区块链网络标头
		connt: 0, //已售
		total: 0, //总数
		price: "0", //价格
		priceUnit: "ETH", //单位
	});

	const [spinning, setSpinning] = useState<boolean>(true); //Spinning
	const [disabledButton, setdisabledButton] = useState<boolean>(false); //禁止点击
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	const [mintNum] = useState<number>(1); //mint-num
	// nft-球员数据-轮播图
	const [swiperData, setSwiperData] = useState([
		{
			sourceUrl: nftCardYonatan, //player-img
			playerId: 99040502, //player-id
			speedPrice: "0", //speed-price
			speedMax: 0, //speed-max
			speedMint: 0, //speed-mint
			whitePrice: "0", //white-price
			whiteMax: 0, //white-max
			whiteMint: 0, //white-mint
			dunkPrice: "0", //dunk-price
			dunkMax: 0, //dunk-max
			dunkMint: 0, //dunk-mint
		},
		{
			sourceUrl: nftCardEffy,
			playerId: 99010701,
			speedPrice: "0", //speed-price
			speedMax: 0, //speed-max
			speedMint: 0, //speed-mint
			whitePrice: "0", //white-price
			whiteMax: 0, //white-max
			whiteMint: 0, //white-mint
			dunkPrice: "0", //dunk-price
			dunkMax: 0, //dunk-max
			dunkMint: 0, //dunk-mint
		},
		{
			sourceUrl: nftCardJovani,
			playerId: 99011101,
			speedPrice: "0", //speed-price
			speedMax: 0, //speed-max
			speedMint: 0, //speed-mint
			whitePrice: "0", //white-price
			whiteMax: 0, //white-max
			whiteMint: 0, //white-mint
			dunkPrice: "0", //dunk-price
			dunkMax: 0, //dunk-max
			dunkMint: 0, //dunk-mint
		},
	]);
	const myCarousel = useRef<any>(null); //轮播图
	const [mintPlayerId, setMintPlayerId] = useState(swiperData[0].playerId); //mint-player-id
	// 切换轮播图的回调
	const handleSlideChange = (num: number) => {
		// console.log(num);
		swiperData.map((item, index) => {
			if (index === num) {
				setMintPlayerId(item.playerId);
			}
		});
	};

	// 合约数据-数据
	const getContract = async () => {
		setSpinning(true); //Spinning
		getAlpha2Mintinfo().then((res: any) => {
			if (res.code === 0) {
				const data = res.data;
				// console.log(data);
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
					chainImg: data.childImg, //主网
					chainId: data.network, //chainId
					childLink: data.childLink, //区块链网络标头
				});
				// 处理数据
				const updatedSwiperData = swiperData.map(swiperItem => {
					const changeItem = data.list.find((dataItem: any) => dataItem.player_id === swiperItem.playerId);
					if (changeItem) {
						return {
							...swiperItem,
							speedPrice: ethers.formatEther(String(changeItem.speed_price)), //speed-price
							speedMax: changeItem.speed_max, //speed-max
							speedMint: changeItem.speed_mint, //speed-mint
							whitePrice: ethers.formatEther(String(changeItem.white_price)), //white-price
							whiteMax: changeItem.white_max, //white-max
							whiteMint: changeItem.white_mint, //white-mint
							dunkPrice: ethers.formatUnits(changeItem.dunk_price, 6), //dunk-price
							dunkMax: changeItem.dunk_max, //dunk-max
							dunkMint: changeItem.dunk_mint, //dunk-mint
							// 添加其他属性
						};
					} else {
						// 如果没有找到匹配项，保持原样
						return swiperItem;
					}
				});
				setSwiperData(updatedSwiperData);
				setSpinning(false); //Spinning
			}
		});
	};
	useEffect(() => {
		if (!showModal) {
			getContract();
		}
	}, [showModal]);

	//nft - mint的 方式
	const [mintNftType] = useState({
		currency: [
			{
				name: "DUNK",
				id: 200,
			},
			{
				name: "ETH",
				id: 100,
			},
		],
		whitelist: [
			{
				name: "NO",
				id: 102,
			},
			{
				name: "YES",
				id: 101,
			},
		],
	});
	const [mintCurrencyType, setMintCurrencyType] = useState<number>(mintNftType.currency[0].id); //mint-Currency 方式
	const [mintWhitelistType, setMintWhitelistType] = useState<number>(mintNftType.whitelist[0].id); //mint-whitelist 方式
	const [useMintNftType, setUseMintNftType] = useState<number>(0); //use-mint-nft 方式
	// useMintNftType情况
	const changeContractData = async () => {
		// 1-白名单mint  2-拼手速  3-使用dunkmint
		if (useMintNftType === 1) {
			const data: any = swiperData.find((item: any) => mintPlayerId === item.playerId);
			if (data.whiteMint < data.whiteMax) {
				setdisabledButton(true);
			} else {
				setdisabledButton(false);
			}
			setContractData({
				...contractData,
				connt: data.whiteMint, //已售
				total: data.whiteMax, //总数
				price: data.whitePrice, //价格
				priceUnit: "ETH", //单位
			});
		} else if (useMintNftType === 2) {
			const data: any = swiperData.find((item: any) => mintPlayerId === item.playerId);
			if (data.speedMint < data.speedMax) {
				setdisabledButton(true);
			} else {
				setdisabledButton(false);
			}
			setContractData({
				...contractData,
				connt: data.speedMint, //已售
				total: data.speedMax, //总数
				price: data.speedPrice, //价格
				priceUnit: "ETH", //单位
			});
		} else if (useMintNftType === 3) {
			const data: any = swiperData.find((item: any) => mintPlayerId === item.playerId);
			if (data.dunkMint < data.dunkMax) {
				setdisabledButton(true);
			} else {
				setdisabledButton(false);
			}
			setContractData({
				...contractData,
				connt: data.dunkMint, //已售
				total: data.dunkMax, //总数
				price: data.dunkPrice, //价格
				priceUnit: "DUNK", //单位
			});
		}
	};
	useEffect(() => {
		if (!spinning) {
			changeContractData();
		}
	}, [spinning, swiperData, useMintNftType, mintPlayerId]);
	// useMintNftType情况
	const useMintNftTypeFn = async () => {
		// 1-白名单mint  2-拼手速  3-使用dunkmint
		if (mintCurrencyType === 200) {
			setUseMintNftType(3);
		} else if (mintCurrencyType === 100) {
			if (mintWhitelistType === 101) {
				setUseMintNftType(1);
			} else if (mintWhitelistType === 102) {
				setUseMintNftType(2);
			}
		}
	};
	useEffect(() => {
		useMintNftTypeFn();
	}, [spinning, mintCurrencyType, mintWhitelistType]);
	// mint
	const mintBlindBox = async () => {
		if (!isLoading) {
			setIsLoading(true); //Loading
			const count = mintNum; //mint数量
			// mint 参数
			const mintObj = {
				mintType: useMintNftType,
				mintPlayerid: mintPlayerId,
				mintAddress: walletStores.getState().walletIfon.address,
			};
			const MintGameGenesisContract = await MintGameGenesisAbi(mintObj.mintType, mintObj.mintPlayerid, mintObj.mintAddress); //构建mint合约
			// 1-白名单mint  2-拼手速  3-使用dunkmint
			if (mintObj.mintType === 1) {
				if (MintGameGenesisContract.items.whitelist) {
					// 白名单mint-支付主链币购买的
					const unitPrice = Number(ethers.formatEther(MintGameGenesisContract.items.price)); //单价
					const price = ethers.parseEther(String(unitPrice * count)); //购买价格
					console.log(unitPrice);
					await MintGameGenesisContract.MintGameGenesisSigner.mintWhiteList(mintObj.mintPlayerid, { value: price })
						.then(async (res: any) => {
							// console.log(res);
							setIsLoading(false); //Loading
							setShowModal(true); //开启弹窗
							setMintShowData({ ...mintShowData, state: 0 }); //开启动画
							await res
								.wait()
								.then(async (r: any) => {
									console.log(r);
									const GameNftContract = await GameNftAbi(r.logs[1].args[3]); //构建game-nft合约--获取mint成功图片
									setMintShowData({
										...mintShowData,
										state: 1, //mint 0-动画/1-成功/2-失败
										showImg: GameNftContract.items.mintImg, //图片
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
					// 没有白名单资格
					message.warning("You're not whitelisted!");
					setIsLoading(false); //Loading
				}
			} else if (mintObj.mintType === 2) {
				// 2-拼手速mint-支付主链币购买的
				const unitPrice = Number(ethers.formatEther(MintGameGenesisContract.items.price)); //单价
				const price = ethers.parseEther(String(unitPrice * count)); //购买价格
				await MintGameGenesisContract.MintGameGenesisSigner.mintBuy(mintObj.mintPlayerid, { value: price })
					.then(async (res: any) => {
						// console.log(res);
						setIsLoading(false); //Loading
						setShowModal(true); //开启弹窗
						setMintShowData({ ...mintShowData, state: 0 }); //开启动画
						await res
							.wait()
							.then(async (r: any) => {
								console.log(r);
								const GameNftContract = await GameNftAbi(r.logs[1].args[3]); //构建game-nft合约--获取mint成功图片
								setMintShowData({
									...mintShowData,
									state: 1, //mint 0-动画/1-成功/2-失败
									showImg: GameNftContract.items.mintImg, //图片
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
			} else if (mintObj.mintType === 3) {
				//  3-使用dunkmint-支付dunk购买的
				// 判断dunk地址是否正确
				if (MintGameGenesisContract.items.dunkContract == import.meta.env.VITE_CONTRACT_DUNKTOKEN_ADDR) {
					const DunkTokenContract = await DunkTokenAbi(walletStores.getState().walletIfon.address); //构建DUNK合约
					const dunkBalance = Number(ethers.formatUnits(DunkTokenContract.items.balance, 6)); //dunk 余额
					const unitPrice = Number(ethers.formatUnits(MintGameGenesisContract.items.price, 6)); //单价
					const mintPrice = unitPrice * count; //购买价格 //购买价格
					if (dunkBalance >= mintPrice) {
						// 获取授权dunk
						const allowDunk = await DunkTokenContract.DunkTokenProvider.allowance(
							walletStores.getState().walletIfon.address, //wallet-address
							contractData.contract, //mintnft-address
						);
						if (Number(ethers.formatUnits(allowDunk, 6)) < mintPrice) {
							// 需要授权道具合约操作dunk权限
							try {
								await DunkTokenContract.DunkTokenSigner.approve(contractData.contract, ethers.parseUnits(String(mintPrice), 6));
							} catch {
								// 拒绝授权
								setIsLoading(false); //Loading
								return;
							}
						}
						// mint调用
						await MintGameGenesisContract.MintGameGenesisSigner.mintDunk(mintObj.mintPlayerid)
							.then(async (res: any) => {
								// console.log(res);
								setIsLoading(false); //Loading
								setShowModal(true); //开启弹窗
								setMintShowData({ ...mintShowData, state: 0 }); //开启动画
								await res
									.wait()
									.then(async (r: any) => {
										console.log(r);
										const GameNftContract = await GameNftAbi(r.logs[2].topics[3]); //构建game-nft合约--获取mint成功图片
										setMintShowData({
											...mintShowData,
											state: 1, //mint 0-动画/1-成功/2-失败
											showImg: GameNftContract.items.mintImg, //图片
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
						// dunk不足
						setIsLoading(false); //Loading
						message.warning("Insufficient balance of dunk!");
					}
				} else {
					setIsLoading(false); //Loading
					message.warning("Unknown Error.");
				}
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
	const [mintWhitelistState, setMintWhitelistState] = useState<string>("-"); ////mint-whitelist-use-state
	// whitelist情况
	const whitelistFn = async () => {
		if (!spinning) {
			if (walletStores.getState().walletState) {
				// 连接钱包
				if (contractData.chainId == walletStores.getState().walletIfon.chainId) {
					// 是否网络正确
					const MintGameGenesisContract = await MintGameGenesisAbi(
						useMintNftType,
						mintPlayerId,
						walletStores.getState().walletIfon.address,
					);
					// 注意-这里的查询结果之以白名单为准/价格是错误的
					// console.log(MintGameGenesisContract);
					if (MintGameGenesisContract.items.whitelist) {
						setMintWhitelistState("YES");
					} else {
						setMintWhitelistState("NO");
					}
				} else {
					setMintWhitelistState("-");
				}
			} else {
				setMintWhitelistState("-");
			}
		}
	};
	useEffect(() => {
		whitelistFn();
	}, [
		spinning,
		walletStores.getState().walletIfon.chainId,
		walletStores.getState().walletIfon.address,
		mintPlayerId,
		useMintNftType,
	]);
	return (
		<>
			<Spin spinning={spinning} fullscreen />
			<div className="relative min-h-[1004px] overflow-hidden ">
				<div className="w-[1920px] absolute left-2/4 translate-x-[-50%]">
					<img src={bgImg} className="h-[1004px]" />
				</div>
				<section className="main">
					<div className="flex justify-between flex-col gap-5 items-center md:flex-row">
						{/* 球员 */}
						<div className="relative w-[600px] min-w-[200px] overflow-hidden flex flex-col h-[700px]  md:h-[820px]">
							<div className="w-[320px] mx-auto mt-[160px] z-10 relative carousel-box">
								<img
									src={iconChangeLeft}
									className="absolute top-2/4 translate-y-[-50%] z-20 size-[32px] left-[-32px] hover:cursor-pointer hidden sm:block"
									onClick={() => {
										myCarousel?.current?.prev();
									}}
								/>
								<img
									src={iconChangeRight}
									className="absolute top-2/4 translate-y-[-50%] z-20 size-[32px] right-[-32px] hover:cursor-pointer hidden sm:block"
									onClick={() => {
										myCarousel?.current?.next?.();
									}}
								/>
								<Carousel ref={myCarousel} afterChange={handleSlideChange} autoplay={false} infinite dots>
									{swiperData.map((item, index) => {
										return (
											<div key={index}>
												<img src={item.sourceUrl} className="w-[320px]" />
											</div>
										);
									})}
								</Carousel>
								<div className="flex justify-center items-center gap-40 "></div>
							</div>
						</div>
						{/* mint 选择 */}
						<div className="flex flex-col max-w-[536px]">
							<div className="flex gap-5">
								<div className="max-h-[180px]">
									<img src={titleImg} className="max-h-[180px]" />
								</div>
							</div>
							{/* mint 方式-选择 */}
							<div className="mt-16 p-3 flex flex-col bg-bgcolor-1000 rounded-xl gap-3">
								{/* 币种选择 */}
								<div className="flex flex-wrap gap-4">
									<p className="font-bold">Mint Currency :</p>
									<div className="flex-1 font-bold flex items-center gap-10">
										{mintNftType.currency.map((item, index) => {
											return (
												<div key={index} className="flex justify-center items-center gap-2">
													<p>{item.name}</p>
													<div
														className={`${item.id === mintCurrencyType ? "bg-primary " : ""} size-4 border rounded-full border-primary overflow-hidden flex items-center cursor-pointer `}
														onClick={() => {
															setMintCurrencyType(item.id);
														}}
													>
														{mintCurrencyType === item.id && <CheckOutlined className="size-3.5" />}
													</div>
												</div>
											);
										})}
									</div>
								</div>

								{mintCurrencyType === 100 && (
									<>
										{/* 白名单选择 */}
										<div className="flex flex-wrap gap-4">
											<p className="font-bold">Mint Whitelist :</p>
											<div className="flex-1 font-bold flex items-center gap-10">
												{mintNftType.whitelist.map((item, index) => {
													return (
														<div key={index} className="flex justify-center items-center gap-2">
															<p>{item.name}</p>
															<div
																className={`${item.id === mintWhitelistType ? "bg-primary " : ""} size-4 border rounded-full border-primary overflow-hidden flex items-center cursor-pointer `}
																onClick={() => {
																	setMintWhitelistType(item.id);
																}}
															>
																{mintWhitelistType === item.id && <CheckOutlined className="size-3.5" />}
															</div>
														</div>
													);
												})}
											</div>
										</div>
										{mintWhitelistType === 101 && (
											<>
												{/* 白名单展示 */}
												<div className="flex flex-wrap gap-4">
													<p className="font-bold">Whitelist :</p>
													<div
														className={`${mintWhitelistState == "YES" ? " text-primary " : mintWhitelistState == "NO" ? " text-disabled " : " text-white "} font-bold `}
													>
														{mintWhitelistState}
													</div>
												</div>
											</>
										)}
									</>
								)}
							</div>
							{/* mint 数据展示 */}
							<div className="mt-5 p-3 flex flex-col bg-bgcolor-1000 rounded-xl gap-2">
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
