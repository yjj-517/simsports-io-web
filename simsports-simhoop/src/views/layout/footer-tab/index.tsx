// footer-tab
import React from "react";
import "./index.less";
import { Link } from "react-router-dom";

import simhoopLogo from "@/assets/imgs/layout/simhoop-logo02.svg";
const View: React.FC = () => {
	return (
		<>
			<footer className="footer-box">
				<div className="main nav-box">
					<Link to="/home">
						<img src={simhoopLogo} alt="LOGO" className="simhoop-logo" />
					</Link>
					<p className="fillet-paragraph-text03">© Copyright 2024 SimHoop. All Rights Reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default View;
