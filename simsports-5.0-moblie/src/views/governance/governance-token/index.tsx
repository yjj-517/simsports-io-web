// governance-token
import React from "react";
import "./index.less";

import { Image } from "antd-mobile";
import governanceGroup from "@/assets/imgs/governance/governance-group.png";
const View: React.FC = () => {
	return (
		<div className="main governance-token">
			<h2 className="fillet-h2-title" style={{ textAlign: "left" }}>
				$Bravo Token
			</h2>
			<p className="fillet-paragraph-text02">
				Players can earn $bravo through gaming and participate in governing the SimSports platform, engaging in the development of
				gaming infrastructure and exploring a variety of gaming experiences available on SimSports.
			</p>
			<div className="governance-token-box">
				<Image src={governanceGroup} className="governance-group" />
				<div className="governance-token-box-content">
					<h3 className="fillet-h3-title01" style={{ textAlign: "left" }}>
						$Bravo is for the Web3 Sports Economy
					</h3>
					<p className="fillet-paragraph-text04">
						E-Sports has enter a new generation in Web3 through games, events, metaverse and decentralized ID.
					</p>
					<p className="fillet-paragraph-text04">
						The possibilities for blockchain impact on E-Sports are so endless that they can’ t possibly all be predicted yet.
					</p>
					<p className="fillet-paragraph-text04">
						$Bravo is a token made to support the future, controlled and built on by the community.
					</p>
					<p className="fillet-paragraph-text04">
						It will serve as a decentralized protocol laver for blockchain consensus, Web3 gaming creation, and community-led
						initiatives that drive ESports into the age of metaverse.
					</p>
				</div>
			</div>
		</div>
	);
};

export default View;
