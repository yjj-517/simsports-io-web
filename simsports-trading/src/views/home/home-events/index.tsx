// home-top
import React from "react";
import { useNavigate } from "react-router-dom";

import { simdunkEventsData } from "@/views/events/simdunk/components/events"; //events
const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	return (
		<>
			<section className="main mt-20">
				<h2 className="text-lg font-bold">Popular Game Events</h2>
				<div className="mt-8 pb-3 flex gap-x-3 gap-y-3 md:gap-x-8 trove-scrollbar">
					{simdunkEventsData.map((item, index) => {
						return (
							<div key={index} className="min-w-[320px] px-3 pt-3 pb-6 bg-bgcolor-400 rounded-2xl md:min-w-[480px]">
								<div className="overflow-hidden rounded-lg h-[140px] md:h-[216px]">
									<img src={item.imgurl} className="scale-img h-full object-cover" />
								</div>
								<p className="mt-5 text-text-100 truncate">{item.time}</p>
								<p className="mt-2 text-lg font-bold truncate">{item.title}</p>
								<button
									className="mt-6 w-full py-2.5 text-lg fillet-button-trumpet"
									onClick={() => {
										navigate(item.path);
									}}
								>
									Learn More
								</button>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default View;
