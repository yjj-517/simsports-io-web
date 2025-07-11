import React from "react";
import { Outlet } from "react-router-dom";

import HeaderTab from "./header-tab/index";
import FooterTab from "./footer-tab/index";

const View: React.FC = () => {
	return (
		<>
			<HeaderTab />
			<Outlet></Outlet>
			<FooterTab />
		</>
	);
};

export default View;
