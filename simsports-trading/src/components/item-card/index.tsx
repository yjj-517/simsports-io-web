// simdunk
import React from "react";
import { useNavigate } from "react-router-dom";

interface ViewProps {
	itemCards: any;
}

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
const View: React.FC<ViewProps> = ({ itemCards }: ViewProps) => {
	const navigate = useNavigate(); //路由跳转
	return (
		<>
			<div className="flex flex-col w-[240px] h-full bg-bgcolor-400 rounded-xl">
				<div
					className="w-[240px] h-[240px] overflow-hidden rounded-lg relative cursor-pointer group"
					onClick={() => {
						navigate("/collection/" + itemCards.contract + "/" + itemCards.token_id);
					}}
				>
					<div className="absolute m-2 z-10 flex items-center justify-center gap-1">
						<div className="size-6 rounded bg-bgcolor-400 flex items-center justify-center">
							<img src={itemCards.childImg} className="size-[18px]" />
						</div>
						{itemCards.amount > 1 && (
							<div className="h-6 px-2 text-sm rounded bg-bgcolor-400 hidden group-hover:flex  items-center justify-center opacity-80 ">
								<span>{itemCards.amount}</span>
							</div>
						)}
					</div>
					<img src={itemCards.cover} className="scale-img size-[240px]" />
				</div>
				<div className="px-2 py-3 flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<a
							href={itemCards.childLink + "/token/" + itemCards.contract}
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="flex items-center font-bold"
						>
							<SimsportsLogo className="text-primary w-[18px] h-auto" />
						</a>
						<p className="text-primary font-bold font-Quantico truncate">{itemCards.token_id}</p>
					</div>
					<div className="flex flex-col gap-1">
						<p
							className="truncate font-Quantico cursor-pointer text-lg hover:underline"
							onClick={() => {
								navigate("/collection/" + itemCards.contract);
							}}
						>
							{itemCards.collection_name}
						</p>
						<p
							className="truncate cursor-pointer hover:underline"
							onClick={() => {
								navigate("/collection/" + itemCards.contract + "/" + itemCards.token_id);
							}}
						>
							{itemCards.name}
						</p>
					</div>
					{/* <p className="text-text-100 truncate">
						<span>Last sale:</span>
						<span>{itemCards.mint_price}</span>
						<span className="ml-1">{itemCards.priceUnit}</span>
					</p> */}
				</div>
			</div>
		</>
	);
};

export default View;
