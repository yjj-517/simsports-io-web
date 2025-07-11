// home-top
import React from "react";
import "./index.less";

import { Image } from "antd-mobile";
import homeBg from "@/assets/imgs/home/top/home-bg.png";
import simsportsImgWhite from "@/assets/imgs/logo/simsports-img-white.svg";
import iconPlayLink from "@/assets/imgs/layout/icon-play-link.png";

import { importantLink } from "@/utils/medialink";

const View: React.FC = () => {
	return (
		<div className="home-top">
			<Image src={homeBg} className="home-bg" />
			<div className="home-top-box">
				<Image src={simsportsImgWhite} className="simsports-img-white" />
				<p className="home-top-title">Built on Community and Ownership Play by Mainstream Economy</p>
				<button className="fillet-diamond-button applink">
					<a href={importantLink.appOfficialSite} target="_blank" rel="nofollow noopener noreferrer" className="link-play">
						<span>Start Playing</span>
						<Image src={iconPlayLink} className="link-img" />
					</a>
				</button>
			</div>
		</div>
	);
};

export default View;
