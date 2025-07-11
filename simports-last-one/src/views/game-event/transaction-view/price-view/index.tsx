// <!-- price-view -->
import React, { useEffect } from "react";

interface ViewProps {
	transactionsCard: any; //价格数组
	priceId: any; //选中价格
	changePriceId: (item: any) => void; //修改交易价格
}

const View: React.FC<ViewProps> = ({ transactionsCard, priceId, changePriceId }: ViewProps) => {
	useEffect(() => {
		changePriceId(transactionsCard.priceArr[0]); // 先访问 pickingId[0]，再访问 priceArr
	}, []);
	return (
		<div className="flex flex-col gap-4 pb-2 border-b-2 border-bgcolor-200">
			{/* 选择价格 */}
			<div className="flex-between gap-3">
				{transactionsCard.priceArr.map((item: any, index: React.Key | null | undefined) => (
					<div
						key={index}
						className={`${
							priceId.id === item.id
								? item.id === 1
									? "bg-secondary text-white"
									: item.id === 2
										? "bg-disabled text-white"
										: "bg-bgcolor-200 text-text-200"
								: "bg-bgcolor-200 text-text-200"
						} cursor-pointer w-[140px] h-12 rounded-lg flex justify-center items-center gap-1 font-bold text-lg font-primary`}
						onClick={() => {
							changePriceId(item);
						}}
					>
						<span>{item.name}</span>
						<span>
							<span>{item.price}</span>
							<span className="text-sm">(SUI)</span>
						</span>
						<span></span>
					</div>
				))}
			</div>
			{/* 确定价格 */}
			<div className="flex-between text-xl">
				<p>Price:</p>
				<p className="font-primary">
					<span>{priceId.price}</span>
					<span className="text-base">(SUI)</span>
				</p>
			</div>
		</div>
	);
};

export default View;
