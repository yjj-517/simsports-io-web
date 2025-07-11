// <!-- transaction-result -->
import React, { useState, useEffect } from "react";

import CuntdownTimerView from "@/components/cuntdown-timer/index";
import CollectionTransactionRecords from "@/components/collection-transaction-records/index";
import ConnectWalletButton from "@/wallet/connect-wallet-botton";

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";

import {
	PredictplayAbiContractTotal,
	PredictplayAddr,
	PredictplayObjectId,
} from "@/contract/predictplay/index"; //contract

import { useWallet } from "@suiet/wallet-kit";
import { Transaction } from "@mysten/sui/transactions";

import toast from "react-hot-toast";

interface ViewProps {
	transactionsCard: any; //选中交易
}

const View: React.FC<ViewProps> = ({ transactionsCard }: ViewProps) => {
	const { connected } = useWallet();
	const wallet = useWallet();
	const [showModal, setShowModal] = useState<boolean>(false); //交易完成弹窗
	// 修改弹窗状态
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	//用户已经购买的数量
	const [sharesTotalNum, setSharesTotalNum] = useState<any>({
		noShares: "0",
		yesShares: "0",
	});
	const onPredictplayContractTotal = async () => {
		if (wallet.account?.address) {
			const PredictplayContractTotal = await PredictplayAbiContractTotal(
				wallet.account?.address,
				transactionsCard.market_id,
			);
			setSharesTotalNum(PredictplayContractTotal.sharesNum);
			console.log(sharesTotalNum);
		}
	};
	useEffect(() => {
		onPredictplayContractTotal();
	}, [transactionsCard]);

	const [isLoading, setIsLoading] = useState<boolean>(false); //loading
	// 交易结果展示
	const [tradeShowData, setTradeShowData] = useState<any>({
		state: 0, //cast 0-动画/1-成功/2-失败
		hash: "", //交易hash
		chainApp: "https://testnet.suivision.xyz/", //区块链网络标头
	});
	// 点击按钮调用合约
	const onContract = async () => {
		const tx = new Transaction();
		tx.moveCall({
			target: `${PredictplayAddr}::predictplay::claim_winnings`,
			arguments: [
				tx.object(PredictplayObjectId),
				tx.pure.u64(transactionsCard.market_id.replace("0x", "")),
			],
		});
		setTradeShowData((prevData: any) => ({
			...prevData,
			state: 0, // 动画
			hash: "", // 交易 hash
		}));
		await wallet
			.signAndExecuteTransaction({
				transaction: tx,
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
	};
	// 点击领取按钮
	const onClickButton = () => {
		// 判断连接网络是否正确
		if (wallet?.chain?.id === "sui:testnet") {
			// 交易时间是否结束
			const now = Date.now();
			const timeBool = transactionsCard.end_time - now;
			if (timeBool < 0) {
				if (transactionsCard.resolved_outcome !== null) {
					// 判断用户是否能领奖
					const hasShares =
						(transactionsCard.resolved_outcome && sharesTotalNum.yesShares > 0) ||
						(!transactionsCard.resolved_outcome && sharesTotalNum.noShares > 0);
					if (hasShares) {
						if (!isLoading) {
							setIsLoading(true);
							onContract();
						}
					} else {
						toast.error("You have no shares!");
					}
				} else {
					toast.error("Not yet started receiving!");
				}
			} else {
				toast.error("The transaction has not started yet!");
			}
		} else {
			toast.error("Please switch to a blockchain network!");
		}
	};

	const SharesBox = ({ label, value }: { label: string; value: number | string }) => (
		<div
			className={`${label === "YES" ? "bg-secondary" : "bg-disabled"} font-bold text-xl rounded-sm w-full flex flex-col justify-between items-center p-2`}
		>
			<p>{label}</p>
			<p>{(Math.floor(Number(value) * 1000) / 1000).toFixed(3)}</p>
		</div>
	);
	return (
		<>
			<div className="w-full border border-bgcolor-200 p-4 flex flex-col rounded-xl shadow-lg gap-4 shadow-black">
				<div className="flex justify-between items-start border-b-2 border-bgcolor-200 py-2">
					<p className="text-2xl font-bold break-all">{transactionsCard.name}</p>
					<div className="flex justify-between items-center px-2 rounded-sm bg-white/10">
						<CuntdownTimerView endTime={transactionsCard.end_time} />
					</div>
				</div>
				<div className="flex-between border-b-2 border-bgcolor-200 py-2">
					<p className="text-xl">Final Result:</p>
					<p
						className={`${transactionsCard.resolved_outcome === null ? "bg-bgcolor-200" : transactionsCard.resolved_outcome ? "bg-secondary" : "bg-disabled"} font-bold text-xl px-2 rounded-sm`}
					>
						{transactionsCard.resolved_outcome === null
							? "In Progress"
							: transactionsCard.resolved_outcome
								? "YES"
								: "NO"}
					</p>
				</div>
				<div className="text-xl">Your Shares:</div>
				<div className="flex justify-between items-center gap-4">
					<SharesBox label="YES" value={sharesTotalNum.yesShares} />
					<SharesBox label="NO" value={sharesTotalNum.noShares} />
				</div>
				{connected ? (
					<button
						className="primary-button w-full p-2 text-lg"
						onClick={() => {
							onClickButton();
						}}
					>
						{isLoading ? <IconSpin className="size-7 animate-spin" /> : <span>Claim Rewards</span>}
					</button>
				) : (
					<ConnectWalletButton />
				)}
			</div>
			{showModal && (
				<CollectionTransactionRecords onClose={toggleModal} tradeShowData={tradeShowData} />
			)}
		</>
	);
};

export default View;
