// home-top
import React from "react";
import "./index.less";

import topBg from "@/assets/imgs/home/top/top-bg.png";
import simhoopLogo from "@/assets/imgs/home/top/simhoop-logo.png";

const View: React.FC = () => {
	return (
		<>
			<div className="home-top">
				<div className="home-bg">
					<img src={topBg} className="top-bg" />
				</div>
				<div className="main content">
					<img src={simhoopLogo} alt="LOGO" className="simhoop-logo" />
					<p className="top-text">Individuality, Passion, and Freedom, redefining the charm of street basketball</p>
				</div>
			</div>
		</>
	);
};

export default View;
