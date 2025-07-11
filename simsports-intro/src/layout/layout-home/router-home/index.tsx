// router-home
import React from "react";

import MenuPcView from "./menu-pc-view";

import IconArrow from "@/assets/imgs/common/icon-arrow.svg?react"; //icon-向下提示

interface ViewProps {
	ToggleMenu: (state: any) => void;
	ShowMenuMobile: boolean;
}

const View: React.FC<ViewProps> = ({ ToggleMenu, ShowMenuMobile }: ViewProps) => {
	return (
		<>
			<MenuPcView />
			<button
				className="lg:hidden flex justify-center items-center rounded-full size-6 bg-white/20 group"
				onClick={() => {
					ToggleMenu(!ShowMenuMobile);
				}}
			>
				<IconArrow
					className={`${ShowMenuMobile ? " rotate-[270deg] " : " rotate-90 "} size-4 group-hover:text-primary `}
				/>
			</button>
		</>
	);
};

export default View;
