// <!-- layout -->
import React from "react";

import { Outlet } from "react-router-dom";

import HeaderView from "./header-view";
import FooterView from "./footer-view";

const View: React.FC = () => {
	return (
		<>
			<main className="relative z-50 max-w-[100vw] w-full overflow-x-hidden">
				<HeaderView />
				<main className="relative w-full min-h-[calc(100vh-var(--sm-layout-height))]">
					<Outlet />
				</main>
				<FooterView />
			</main>
		</>
	);
};

export default View;
