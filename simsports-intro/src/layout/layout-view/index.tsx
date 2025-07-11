// layout
import React from "react";
import { Outlet } from "react-router-dom";

import HeaderView from "../header-view";
import FooterView from "../footer-view";

const View: React.FC = () => {
	return (
		<>
			<div className="relative z-50 max-w-[100vw] font-primary">
				<div className="relative w-full overflow-x-hidden">
					<HeaderView />
					<div className="relative w-full min-h-[calc(100vh-var(--sm-home-footer-height))]">
						<Outlet />
					</div>
					<FooterView />
				</div>
			</div>
		</>
	);
};

export default View;
