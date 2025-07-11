// simdunk
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ViewProps {
	contractCards: any;
}

const View: React.FC<ViewProps> = ({ contractCards }: ViewProps) => {
	const navigate = useNavigate(); //路由跳转
	const [moreState, setMoreState] = useState<boolean>(true); //moer
	return (
		<>
			<div className="flex flex-col w-[240px] h-full bg-bgcolor-400 rounded-xl overflow-hidden">
				<div
					className="w-[240px] h-[240px] overflow-hidden rounded-lg relative cursor-pointer group"
					onClick={() => {
						navigate("/collection/" + contractCards.address);
					}}
				>
					<div className="absolute m-2 z-10 flex items-center justify-center gap-1">
						<div className="size-6 rounded bg-bgcolor-400 flex items-center justify-center">
							<img src={contractCards.childImg} className="size-[18px]" />
						</div>
					</div>
					<img src={contractCards.cover} className="scale-img size-[240px]" />
				</div>
				<div className="px-2 py-3 flex flex-col gap-2">
					<div className="flex flex-col gap-1">
						<p
							className="font-Quantico cursor-pointer text-lg hover:underline"
							onClick={() => {
								navigate("/collection/" + contractCards.address);
							}}
						>
							{contractCards.collection_name}
						</p>
					</div>
					<div>
						<span className="text-text-200">
							{moreState
								? contractCards.collection_desc.length > 40
									? contractCards.collection_desc.slice(0, 40) + "..."
									: contractCards.collection_desc
								: contractCards.collection_desc}
						</span>
						{contractCards.collection_desc.length > 40 ? (
							<button
								className="text-primary"
								onClick={() => {
									setMoreState(!moreState);
								}}
							>
								{moreState ? "More" : "Less"}
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default View;
