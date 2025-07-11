// <!-- game -->
import React, { useState, useEffect } from "react";

import YoutubeLiveView from "@/components/youtube-live/index";
import MarketsListView from "./markets-list-view/index";

import { PredictplayAbiContract } from "@/contract/predictplay/index";

const View: React.FC = () => {
	// 市场交易list选择
	const [marketsList, setMarketsList] = useState<any[]>();
	const [isLoading, setIsLoading] = useState<boolean>(false); //loading
	// 获取合约参数
	const onContract = async () => {
		const PredictplayContract = await PredictplayAbiContract();
		console.log(PredictplayContract);
		if (PredictplayContract.marketsArr.length > 0) {
			setMarketsList(PredictplayContract.marketsArr);
		}
		setIsLoading(true);
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
			<div className="mx-auto">
				<YoutubeLiveView />
			</div>
			<MarketsListView marketsList={marketsList} isLoading={isLoading} />
		</section>
	);
};

export default View;
