// <!-- markets-list -->
import React from "react";
import { useNavigate } from "react-router-dom"; //router

import IsloadingView from "@/components/isloading-view/index"; //loading

interface ViewProps {
	marketsList: any; //交易市场
	isLoading: boolean; //加载
}

import CuntdownTimerView from "@/components/cuntdown-timer/index";

const View: React.FC<ViewProps> = ({ marketsList, isLoading }: ViewProps) => {
	const navigate = useNavigate(); //路由跳转
	return (
		<div className="py-10">
			{isLoading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<>
						{marketsList
							?.slice()
							.reverse()
							.map((item: any, index: React.Key | null | undefined) => (
								<div
									key={index}
									className="min-w-[300px] cursor-pointer border border-bgcolor-200 rounded-lg flex justify-between flex-col gap-5 p-3 hover:bg-primary hover:shadow-lg shadow-primary/50"
									onClick={e => {
										e.stopPropagation();
										navigate("/game-event/tid/" + item.market_id);
									}}
								>
									<div className="flex-1 flex justify-between gap-2">
										<p className="text-2xl font-bold break-all">{item.name}</p>
										<div className="flex justify-between items-center px-1 text-xs rounded-sm h-[22px] bg-white/10">
											<CuntdownTimerView endTime={item.end_time} />
										</div>
									</div>
									<div className="flex-between">
										{item.priceArr.map((t: any, i: React.Key | null | undefined) => (
											<div
												key={i}
												className={`${t.id === 1 ? "bg-secondary" : "bg-disabled"} text-white flex-center gap-1 min-w-30 p-2 font-primary rounded-md`}
											>
												<p>{t.name}</p>
												<p>
													<span>{t.price}</span>
													<span className="text-sm">(SUI)</span>
												</p>
											</div>
										))}
									</div>
								</div>
							))}
					</>
				</div>
			) : (
				<div className="py-10">
					<IsloadingView />
				</div>
			)}
		</div>
	);
};

export default View;
