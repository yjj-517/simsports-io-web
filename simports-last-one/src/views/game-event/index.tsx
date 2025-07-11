// <!-- game-event -->
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; //router

import YoutubeLiveView from "@/components/youtube-live/index";
import TransactionView from "./transaction-view/index";
import TransactionResultView from "./transaction-result/index";

import IsloadingView from "@/components/isloading-view/index"; //loading

import { PredictplayAbiContract } from "@/contract/predictplay/index";

const View: React.FC = () => {
	const params = useParams(); //路由参数
	const navigate = useNavigate(); //路由跳转
	const [isLoading, setIsLoading] = useState<boolean>(false); //loading
	// 交易card
	const [transactionsCard, setTransactionCard] = useState<any>();
	// 获取合约数据
	const onContract = async () => {
		const PredictplayContract = await PredictplayAbiContract();
		if (PredictplayContract.marketsArr.length > 0) {
			const matchedItem = await PredictplayContract.marketsArr.find(
				(item: any) => item.market_id == params.param1,
			);
			if (matchedItem) {
				setIsLoading(true);
				setTransactionCard(matchedItem);
			} else {
				navigate("*");
			}
		} else {
			setIsLoading(true);
		}
	};
	useEffect(() => {
		const interval = setInterval(() => {
			onContract();
		}, 5000); // 每5秒调用一次
		// 初始先调用一次
		onContract();
		// 清除定时器
		return () => clearInterval(interval);
	}, []);
	return (
		<section className="main py-10">
			{isLoading ? (
				<>
					<div className="flex justify-between items-start gap-10 flex-col lg:flex-row">
						<div className="flex-1 w-full">
							<YoutubeLiveView />
						</div>
						<div className="lg:w-[360px] w-full flex flex-col gap-10">
							<TransactionView transactionsCard={transactionsCard} />
							<TransactionResultView transactionsCard={transactionsCard} />
						</div>
					</div>
				</>
			) : (
				<div className="py-40">
					<IsloadingView />
				</div>
			)}
		</section>
	);
};

export default View;
