import React from "react";
import { Outlet } from "react-router-dom";

import HeaderView from "./header-view";
import FooterView from "./footer-view";

const View: React.FC = () => {
	return (
		<>
			<div className="w-full h-full relative">
				<HeaderView />
				<div className="flex-1 flex flex-col w-full min-h-[100vh]">
					<main className="flex flex-col min-h-[100vh] w-full h-full relative">
						<Outlet />
					</main>
				</div>
				<FooterView />
			</div>
		</>
	);
};

export default View;
