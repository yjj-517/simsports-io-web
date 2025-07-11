// <!-- shares-view -->
import React from "react";

import { useWallet } from "@suiet/wallet-kit";

interface ViewProps {
	sharesNum: number; //价格数组
	changeSharesNum: (num: number) => void; //修改交易价格
	transactionsId: any; //交易方式
	priceId: any; //交易价格
	sharesTotalNum: any; //用户购买的数量
}

const View: React.FC<ViewProps> = ({
	sharesNum,
	changeSharesNum,
	transactionsId,
	priceId,
	sharesTotalNum,
}: ViewProps) => {
	const { connected } = useWallet();

	// 定义 Shares 的步长常量
	const SHARES_STEP = 0.01;

	// 修改交易份额
	const handleInputSlippageNum = (event: any) => {
		const { value } = event.target;
		if (value === "") {
			changeSharesNum(0);
			return;
		}
		const num = parseFloat(value); // 使用 parseFloat 支持小数
		// 检查是否为 NaN 或负数
		if (isNaN(num) || num < 0) {
			changeSharesNum(0);
		} else {
			// 四舍五入到最近的步长倍数，以确保准确性
			const roundedNum = Math.round(num / SHARES_STEP) * SHARES_STEP;
			changeSharesNum(Number(roundedNum.toFixed(2))); // 保留两位小数
		}
	};
	return (
		<div className="pb-4 border-b-2 border-bgcolor-200 flex flex-col gap-1">
			<div className="flex justify-between items-start text-xl">
				<p>Shares</p>
				<input
					className="bg-bgcolor-200 h-[26px] p-4 rounded-lg w-[120px] border-2 text-center border-bgcolor-200 focus:outline-hidden focus:border-text-100"
					type="number" // 改为 number
					step={SHARES_STEP} // 使用常量
					min="0" // 设置最小值为 0
					placeholder="Shares"
					onChange={handleInputSlippageNum}
					value={sharesNum}
				/>
			</div>
			{transactionsId?.id === 2 && (
				<div className="font-primary flex-between text-text-200">
					<p>Your Total:</p>
					{connected ? (
						<p>
							{priceId.id === 1
								? (Math.floor(sharesTotalNum.yesShares * 100) / 100).toFixed(2)
								: (Math.floor(sharesTotalNum.noShares * 100) / 100).toFixed(2)}
						</p>
					) : (
						<p>0</p>
					)}
				</div>
			)}
		</div>
	);
};

export default View;
