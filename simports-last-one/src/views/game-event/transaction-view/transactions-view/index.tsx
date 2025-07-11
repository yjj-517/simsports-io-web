// <!-- transactions-view -->
import React, { useState, useEffect } from "react";

import CuntdownTimerView from "@/components/cuntdown-timer/index";

interface ViewProps {
	transactionsCard: any; //交易card
	transactionsId: any; //交易方式
	changeTransactionsId: (item: any) => void; //修改交易方式
	slippageNum: number; //交易差价滑块
	changeSlippageNum: (num: number) => void; //修改滑块数据
}

const View: React.FC<ViewProps> = ({
	transactionsCard,
	transactionsId,
	changeTransactionsId,
	slippageNum,
	changeSlippageNum,
}: ViewProps) => {
	// console.log(pickingId);
	// 选中交易方式
	const [transactions] = useState<any[]>([
		{
			id: 1,
			name: "Buy",
		},
		{
			id: 2,
			name: "Sell",
		},
	]);
	useEffect(() => {
		changeTransactionsId(transactions[0]);
	}, []);
	// 改变滑块的值
	const handleInputSlippageNum = (event: any) => {
		const { value } = event.target;
		if (value === "") {
			changeSlippageNum(0);
			return;
		}
		const num = parseFloat(value);
		if (isNaN(num) || num < 0) {
			changeSlippageNum(0);
		} else {
			changeSlippageNum(num);
		}
	};
	return (
		<>
			<div className=" flex justify-between gap-2">
				<p className="text-2xl font-bold break-all">{transactionsCard.name}</p>
				<div className="flex justify-between items-center px-1 text-sm rounded-sm h-[28px] bg-white/10">
					<CuntdownTimerView endTime={transactionsCard.end_time} />
				</div>
			</div>
			{/* 切换交易方式 */}
			<div className="font-primary flex-between border-b-2 border-bgcolor-200 py-2">
				{/* 选中交易方式 */}
				<div className="flex items-center gap-3 font-bold text-lg ">
					{transactions.map((item, index) => (
						<button
							key={index}
							className={`${transactionsId?.id === item.id ? "border-white" : "border-transparent text-text-100"} cursor-pointer border-b-2`}
							onClick={() => {
								changeTransactionsId(item);
							}}
						>
							{item.name}
						</button>
					))}
				</div>
				{/* 修改交易差价 */}
				<div className="flex justify-center items-center gap-2">
					<p>Slippage(%):</p>
					<input
						type="text"
						className="bg-bgcolor-200 h-[28px] px-2 rounded-lg w-[50px] border text-center border-bgcolor-200 focus:outline-hidden focus:border-bgcolor-200"
						placeholder="%"
						onChange={handleInputSlippageNum}
						value={slippageNum}
					/>
				</div>
			</div>
		</>
	);
};

export default View;
