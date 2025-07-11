import React from "react";
import { Outlet } from "react-router-dom";

import HeaderView from "./header-view";
import FooterView from "./footer-view";

const View: React.FC = () => {
	return (
		<>
			<HeaderView />
			<div style={{ backgroundColor: "#151c1d", paddingTop: "0.65rem" }}>
				<Outlet></Outlet>
			</div>
			<FooterView />
		</>
	);
};

export default View;
