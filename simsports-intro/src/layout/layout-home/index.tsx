// router-home
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderView from "../header-view";
import FooterView from "../footer-view";
import RouterHome from "./router-home/index";

import MenuMobileView from "@/layout/layout-home/router-home/menu-mobile-view/index";

const View: React.FC = () => {
	const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false); //menu-mob弹窗
	const toggleMenu = (state: boolean) => {
		setShowMenuMobile(state);
	};
	return (
		<>
			<div className="relative z-50 max-w-[100vw] font-primary">
				<div className="relative w-full overflow-x-hidden">
					<HeaderView>
						<RouterHome ToggleMenu={toggleMenu} ShowMenuMobile={showMenuMobile} />
					</HeaderView>
					<div className="relative w-full min-h-[calc(100vh-var(--sm-home-footer-height))]">
						<Outlet />
					</div>
					<FooterView />
				</div>
			</div>
			{showMenuMobile && <MenuMobileView ToggleMenu={toggleMenu} />}
		</>
	);
};

export default View;
