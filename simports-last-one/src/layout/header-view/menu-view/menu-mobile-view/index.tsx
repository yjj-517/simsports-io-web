// <!-- menu-mobile-view -->
import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; //router
import { routerList } from "../menu"; //routerlist

// import LogoIcon from "@/assets/imgs/logo/logo-icon.svg?react";
import IconClose from "@/assets/imgs/common/icon-close.svg?react"; //logo
import LogoIcon from "@/assets/imgs/logo/logo.gif";

interface ViewProps {
	onClose: (state: any) => void;
}

const View: React.FC<ViewProps> = ({ onClose }: ViewProps) => {
	const navigate = useNavigate(); //路由跳转
	const [routerArr] = useState<any[]>(routerList);
	// 跳转
	const goRouter = (item: any) => {
		// router-link
		if (item.path) {
			navigate(item.path);
			onClose(false);
		}
	};
	return (
		<div className="fixed top-0 left-0 w-screen h-screen z-50 flex lg:hidden flex-col bg-bgcolor-100 ">
			<div className="h-full flex flex-col justify-between ">
				{/* logo */}
				<div className="flex justify-between items-center p-4 border-b border-bgcolor-200">
					<div className="flex items-center gap-1 h-[30px]">
						<img src={LogoIcon} className="h-full w-auto object-cover" />
					</div>
					<button
						onClick={() => {
							onClose(false);
						}}
						className="cursor-pointer"
					>
						<IconClose className="size-5 hover:text-primary" />
					</button>
				</div>
				{/* router */}
				<div className="flex-1 flex flex-col p-6 trove-scrollbar">
					{routerArr.map((item: any, index: React.Key | null | undefined) => {
						return (
							<div
								key={index}
								className="cursor-pointer hover:bg-white/10 font-primary text-2xl font-medium text-text-200 px-3 py-1 rounded-lg"
								onClick={() => {
									goRouter(item);
								}}
							>
								{item.name}
							</div>
						);
					})}
				</div>
				{/* footer */}
				<div className="flex-between p-4 border-t border-bgcolor-200 gap-1">
					<div className="flex items-center gap-1 h-[30px]">
						<img src={LogoIcon} className="h-full w-auto object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default View;
