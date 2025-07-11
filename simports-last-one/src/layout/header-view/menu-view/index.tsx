// <!-- menu-view -->
import React from "react";

import MenuPcView from "./menu-pc-view/index";
import IconArrow from "@/assets/imgs/common/icon-arrow.svg?react"; //icon-向下提示

interface ViewProps {
	onClose: (state: any) => void;
	closable: boolean; //导航栏状态
}

const View: React.FC<ViewProps> = ({ onClose, closable }: ViewProps) => {
	return (
		<>
			<MenuPcView />
			<button
				className="lg:hidden flex justify-center cursor-pointer items-center rounded-full size-6 bg-white/10 group"
				onClick={() => {
					onClose(!closable);
				}}
			>
				<IconArrow
					className={`${closable ? " rotate-[270deg] " : " rotate-90 "} size-4 group-hover:text-primary `}
				/>
			</button>
		</>
	);
};

export default View;
