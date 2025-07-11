// governance-top
import React from "react";
import "./index.less";

import { Image } from "antd-mobile";
import governanceBg from "@/assets/imgs/governance/governance-bg.png";
import governanceTitle from "@/assets/imgs/governance/governance-title.png";

const View: React.FC = () => {
	return (
		<div className="governance-top">
			<Image src={governanceBg} className="governance-bg" />
			<div className="main governance-top-box">
				<Image src={governanceTitle} className="governance-title" />
				<p className="fillet-paragraph-text02">
					SimSports is a community and game asset-driven platform, with $Bravo at its core, embodying this concept in practice.
				</p>
			</div>
		</div>
	);
};

export default View;
