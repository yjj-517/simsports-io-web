// <!-- show-view -->
import React from "react";
import { useNavigate } from "react-router-dom";

import IconArrowPulldown from "@/assets/imgs/layout/common/icon-arrow-pulldown.svg?react";

interface ViewProps {
	tradeShowData: any;
}
const View: React.FC<ViewProps> = ({ tradeShowData }) => {
	const navigate = useNavigate(); //路由跳转
	// items图片展示信息
	const items = [];
	for (let i = 0; i < tradeShowData.count; i++) {
		items.push(
			<div key={i} className="max-w-[240px]">
				<img src={tradeShowData.showImg} className="max-w-[240px]" />
			</div>,
		);
	}
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="mt-3 flex flex-wrap justify-center items-center gap-5">{items}</div>
				<p className="mt-10 font-Quantico font-bold text-lg ">Your transaction has been completed!</p>
				<p className="mt-3 flex gap-2 flex-wrap">
					<span className="text-text-100">View transaction records:</span>
					<a href={tradeShowData.link + "/tx/" + tradeShowData.hash} target="_blank" rel="nofollow noopener noreferrer">
						<span className="text-primary font-bold hover:underline">
							{tradeShowData.hash.slice(0, 6) + "..." + tradeShowData.hash.slice(-4)}
						</span>
					</a>
				</p>
				<button
					className="mt-6 flex items-center text-primary"
					onClick={() => {
						navigate("/account/collections");
					}}
				>
					<span>View my collections</span>
					<IconArrowPulldown className="rotate-[270deg] size-4" />
				</button>
			</div>
		</>
	);
};

export default View;
