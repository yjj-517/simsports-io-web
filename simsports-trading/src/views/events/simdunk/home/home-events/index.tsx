// home-events
import React from "react";
import { useNavigate } from "react-router-dom";

import iconLink from "@/assets/imgs/common/icon-link.png";

import { simdunkEventsData } from "@/views/events/simdunk/components/events";
const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	return (
		<>
			<section className="main mt-20">
				<h2 className="text-lg font-bold">Ongoing Events</h2>
				<div className="flex flex-wrap gap-x-5 gap-y-10 mt-8">
					{simdunkEventsData.map((item, index) => {
						return (
							<div key={index} className="bg-bgcolor-400 w-full md:max-w-[416px] px-3 pt-3 pb-5 rounded-xl flex flex-col">
								<div className="h-[268px] overflow-hidden rounded-lg">
									<img src={item.imgurl} className="scale-img h-full object-cover" />
								</div>
								<p className="mt-5 text-text-100">{item.time}</p>
								<p className="text-lg ">{item.title}</p>
								<p className="flex">
									<span className="mt-3 px-3 py-1 bg-bgcolor-300 text-primary rounded">{item.award}</span>
								</p>
								<div className="flex justify-between items-center mt-5">
									<button
										className="fillet-button-hollow text-lg px-8 py-2.5"
										onClick={() => {
											navigate(item.path);
										}}
									>
										Learn More
									</button>
									<a href={"https://twitter.com/"} target="_blank" rel="nofollow noopener noreferrer">
										<img src={iconLink} className="w-[32px]" />
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default View;
