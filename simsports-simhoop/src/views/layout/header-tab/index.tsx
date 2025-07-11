// header-tab
import React from "react";
import "./index.less";
import { Link } from "react-router-dom";

import simhoopLogo from "@/assets/imgs/layout/simhoop-logo.svg";
import openingSoon from "@/assets/imgs/layout/opening-soon.svg";
const View: React.FC = () => {
	return (
		<>
			<header className="header-box">
				<div className="header-box-main">
					<Link to="/home">
						<img src={simhoopLogo} alt="LOGO" className="simhoop-logo" />
					</Link>
					<button>
						<img src={openingSoon} alt="LOGO" className="opening-soon" />
					</button>
				</div>
			</header>
		</>
	);
};

export default View;
