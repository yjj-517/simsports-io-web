// <!-- home -->
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; //router

import { categories, mockMarketData } from "./markets";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	// 选中的分类
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	// 过滤市场数据
	const filteredMarkets =
		selectedCategory === "all"
			? mockMarketData
			: mockMarketData.filter(
					market => market.category.toLowerCase() === selectedCategory.toLowerCase(),
				);
	return (
		<section className="main py-10">
			<h1 className="text-3xl font-bold">Prediction Markets</h1>
			{/* type-title */}
			<div className="flex gap-4 trove-scrollbar py-4">
				{categories.map((item: any, index) => (
					<button
						key={index}
						className={`${selectedCategory === item.id.toLowerCase() ? "bg-primary " : "bg-white/20 hover:bg-white/50"} cursor-pointer rounded-2xl px-4 py-1 `}
						onClick={() => setSelectedCategory(item.id.toLowerCase())}
					>
						{item.name}
					</button>
				))}
			</div>
			{/* geme-Markets */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
				{filteredMarkets.map((item, index) => (
					<div
						key={index}
						className="p-4 border border-bgcolor-200 rounded-lg flex justify-between flex-col gap-4 hover:shadow-lg shadow-white/30"
						onClick={() => {
							navigate("/game");
						}}
					>
						{/* title */}
						<div className="flex-between">
							<p className="text-2xl font-bold text-primary">{item.name}</p>
							<p className="rounded-lg bg-white/10 px-2 py-1">{item.category}</p>
						</div>
						{/* 预测项 */}
						<div className="flex-1 flex flex-col gap-1.5 p-2 border-b border-t border-bgcolor-200">
							{item.predictions.map((t, i) => (
								<div key={i} className="flex-between">
									<p className="cursor-pointer hover:underline">{t.name}</p>
									<p className={`${t.isYes ? "bg-secondary " : "bg-disabled"} rounded-md px-1`}>
										{t.value}
									</p>
								</div>
							))}
						</div>
						{/* 交易量 */}
						<div className="flex-between">
							<p className="text-xs bg-white/10 p-1 rounded-md">{item.volume}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default View;
