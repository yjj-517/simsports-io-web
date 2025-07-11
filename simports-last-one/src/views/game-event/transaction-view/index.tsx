// <!-- transaction-view -->
import React, { useState, useEffect } from "react";

import TransactionsView from "./transactions-view/index";
import PrcieView from "./price-view/index";
import SharesView from "./shares-view/index";
import TotalView from "./total-view/index";
import TransactionButton from "./transaction-button/index";

import CollectionTransactionRecords from "@/components/collection-transaction-records/index";

import toast from "react-hot-toast";

import {
	PredictplayAddr,
	PredictplayObjectId,
	PredictplayAbiContractTotal,
} from "@/contract/predictplay/index";

import { useWallet, useAccountBalance } from "@suiet/wallet-kit";
import { Transaction } from "@mysten/sui/transactions";
import { MIST_PER_SUI } from "@mysten/sui/utils";

interface ViewProps {
	transactionsCard: any; //选中交易
}

const View: React.FC<ViewProps> = ({ transactionsCard }: ViewProps) => {
	console.log(transactionsCard);
	const wallet = useWallet();
	const { balance } = useAccountBalance();

	const [isLoading, setIsLoading] = useState<boolean>(false); //loading
	const [showModal, setShowModal] = useState<boolean>(false); //交易完成弹窗
	// 修改弹窗状态
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	// 交易方式
	const [transactionsId, setTransactionId] = useState<any>();
	// 确定交易方式
	const changeTransactionsId = (item: any) => {
		setTransactionId(item);
	};
	// 交易差价滑块
	const [slippageNum, setSlippageNum] = useState<number>(2.5);
	// 选中交易价格
	const [priceId, setPriceId] = useState<any>({});
	// 选中交易价格事件
	const changePriceId = (item: any) => {
		setPriceId(item);
	};
	// 交易份额
	const [sharesNum, setSharesNum] = useState<number>(0);
	// 修改交易份额
	const changeSharesNum = (num: number) => {
		setSharesNum(num);
	};
	// 交易总价
	const [totalPrice, setTotalPrice] = useState<number>(0);
	// 修改交易总价
	const changeTotalPrice = () => {
		if (priceId.price) {
			const priceNum = sharesNum * Number(priceId.price);
			console.log(priceNum);
			setTotalPrice(priceNum);
		}
	};
	useEffect(() => {
		changeTotalPrice();
	}, [sharesNum, priceId.price]);
	//用户已经购买的数量
	const [sharesTotalNum, setSharesTotalNum] = useState<any>({});
	const onPredictplayContractTotal = async () => {
		if (wallet.account?.address) {
			const PredictplayContractTotal = await PredictplayAbiContractTotal(
				wallet.account?.address,
				transactionsCard.market_id,
			);
			setSharesTotalNum(PredictplayContractTotal.sharesNum);
		}
	};
	useEffect(() => {
		onPredictplayContractTotal();
	}, [transactionsId, transactionsCard]);
	// 交易结果展示
	const [tradeShowData, setTradeShowData] = useState<any>({
		state: 0, //cast 0-动画/1-成功/2-失败
		hash: "", //交易hash
		chainApp: "https://testnet.suivision.xyz/", //区块链网络标头
	});
	// buy
	const buyTx = (price: bigint, marketId: string, isYes: boolean) => {
		// 购买需要的价格
		if (balance && balance > price) {
			const tx = new Transaction();
			const MARKETS_OBJECT_ID = tx.object(PredictplayObjectId); //合约地址
			const MARKET_ID = tx.pure.u64(marketId); //list-id
			const IS_YES = tx.pure.bool(isYes); //true 买 YES false 买 NO
			const SUI_COIN_OBJECT_ID = tx.splitCoins(tx.gas, [tx.pure.u64(price)]); //购买价格
			const CLOCK_OBJECT_ID = tx.object("0x6"); //OBJECT_ID
			const SLIPPAGE_NUMBER = tx.pure.u64(slippageNum * 100); //OBJECT_ID
			tx.moveCall({
				target: `${PredictplayAddr}::predictplay::buy_shares`,
				arguments: [
					MARKETS_OBJECT_ID, // ObjectId
					MARKET_ID, // 指定类型为 u64
					IS_YES, // 指定类型为 bool
					SUI_COIN_OBJECT_ID, // ObjectId
					CLOCK_OBJECT_ID, // ObjectId
					SLIPPAGE_NUMBER, // u64
				],
				typeArguments: [], // 如有类型参数可在此传入
			});
			return tx;
		} else {
			setIsLoading(false); //loading
			toast.error("Insufficient Balance!");
		}
	};
	// sell
	const sellTx = (marketId: any, sharesNumber: number, isYes: boolean) => {
		let state: boolean = false; //判断sell的数量是否大于拥有数量
		if (isYes) {
			if (sharesTotalNum.yesShares > sharesNum) {
				state = true;
			} else {
				toast.error("You don't have enough!");
				setIsLoading(false); //loading
			}
		} else {
			if (sharesTotalNum.noShares > sharesNum) {
				state = true;
			} else {
				toast.error("You don't have enough!");
				setIsLoading(false); //loading
			}
		}
		// sell交易
		if (state) {
			if (balance && balance > 0) {
				const sharesNumberBigNumber = BigInt(Math.floor(sharesNumber * Number(MIST_PER_SUI)));
				const tx = new Transaction();
				const MARKETS_OBJECT_ID = tx.object(PredictplayObjectId); //合约地址
				const MARKET_ID = tx.pure.u64(marketId); //list-id
				const IS_YES = tx.pure.bool(isYes); //true 买 YES false 买 NO
				const SHARES_AMOUNT = tx.pure.u64(sharesNumberBigNumber); //卖出数量
				const CLOCK_OBJECT_ID = tx.object("0x6"); //OBJECT_ID
				const SLIPPAGE_NUMBER = tx.pure.u64(slippageNum * 100); //OBJECT_ID
				tx.moveCall({
					target: `${PredictplayAddr}::predictplay::sell_shares`,
					arguments: [
						MARKETS_OBJECT_ID, // ObjectId
						MARKET_ID, // 指定类型为 u64
						IS_YES, // 指定类型为 bool
						SHARES_AMOUNT, // ObjectId
						CLOCK_OBJECT_ID, // ObjectId
						SLIPPAGE_NUMBER, // u64
					],
					typeArguments: [], // 如有类型参数可在此传入
				});
				return tx;
			} else {
				toast.error("Insufficient Balance!");
				setIsLoading(false); //loading
			}
		}
	};
	// 点击按钮调用合约
	const onContract = async () => {
		// 购买价格
		const price = BigInt(Math.floor(totalPrice * Number(MIST_PER_SUI)));
		const marketId = transactionsCard.market_id;
		// 交易选择/yes-true/no-false
		// console.log(priceId);
		let isYes: boolean = true;
		if (priceId.id === 1) {
			isYes = true;
		} else if (priceId.id === 2) {
			isYes = false;
		}
		// 交易判断/1-buy/2-sell
		// console.log(transactionsId);
		let txb = null;
		if (transactionsId.id === 1) {
			//buy
			txb = buyTx(price, marketId, isYes);
		} else if (transactionsId.id === 2) {
			// 交易数量
			const sharesNumber = sharesNum;
			// sell
			txb = sellTx(marketId, sharesNumber, isYes);
		}
		if (txb) {
			setTradeShowData((prevData: any) => ({
				...prevData,
				state: 0, // 动画
				hash: "", // 交易 hash
			}));
			await wallet
				.signAndExecuteTransaction({
					transaction: txb,
				})
				.then(async (res: any) => {
					console.log(res);
					setIsLoading(false); //loading
					setShowModal(true); //开启brrn-动画弹窗
					setTradeShowData((prevData: any) => ({
						...prevData,
						state: 1, // 动画
						hash: res.digest, // 交易 hash
					}));
				})
				.catch((err: any) => {
					console.log(err);
					toast.error("Transaction failed!");
					setIsLoading(false); //loading
				});
		}
	};
	// 点击按钮
	const onClickButton = () => {
		// 判断连接网络是否正确
		if (wallet?.chain?.id === "sui:testnet") {
			// shares--购买数量>0
			if (sharesNum > 0) {
				// 交易时间是否结束
				const now = Date.now();
				const timeBool = transactionsCard.end_time - now;
				if (timeBool > 0) {
					if (!isLoading) {
						setIsLoading(true); //loading
						onContract();
					}
				} else {
					toast.error("The transaction has ended!");
				}
			} else {
				toast.error("Shares quantity greater than 0!");
			}
		} else {
			toast.error("Please switch to a blockchain network!");
		}
	};
	return (
		<>
			<div className="w-full border border-bgcolor-200 p-4 flex flex-col rounded-xl shadow-lg gap-4 shadow-black">
				{/* 交易方式 */}
				<TransactionsView
					transactionsCard={transactionsCard}
					transactionsId={transactionsId}
					changeTransactionsId={changeTransactionsId}
					slippageNum={slippageNum}
					changeSlippageNum={setSlippageNum}
				/>
				<PrcieView
					transactionsCard={transactionsCard}
					priceId={priceId}
					changePriceId={changePriceId}
				/>
				<SharesView
					sharesNum={sharesNum}
					changeSharesNum={changeSharesNum}
					transactionsId={transactionsId}
					priceId={priceId}
					sharesTotalNum={sharesTotalNum}
				/>
				<TotalView totalPrice={totalPrice} />
				<TransactionButton
					isLoading={isLoading}
					onClickButton={onClickButton}
					transactionsId={transactionsId}
				/>
			</div>
			{showModal && (
				<CollectionTransactionRecords onClose={toggleModal} tradeShowData={tradeShowData} />
			)}
		</>
	);
};

export default View;
