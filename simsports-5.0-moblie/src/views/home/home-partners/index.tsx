// home-partners
import React from "react";
import "./index.less";

import { Image } from "antd-mobile";
import soonImg from "@/assets/imgs/home/partners/soon-img.png";
import wemade from "@/assets/imgs/home/partners/wemade.png";
import finewill from "@/assets/imgs/home/partners/finewill.png";
const View: React.FC = () => {
	return (
		<div className="main home-partners">
			<h2 className="home-h2-title">PARTNERS</h2>
			<p className="fillet-paragraph-text02">
				More collaborators and supporters are participating in the construction of our esports gaming metaverse.
			</p>
			<div className="partners-content">
				<div className="content-list content-list-left">
					<div className="list-box color-c">
						<Image src={soonImg} className="soon-img" />
					</div>
					<div className="list-box color-l">
						<Image src={soonImg} className="soon-img" />
					</div>
					<div className="list-box color-c">
						<Image src={finewill} className="soon-img" />
					</div>
				</div>
				<div className="content-list content-list-right">
					<div className="list-box">
						<Image src={soonImg} className="soon-img" />
					</div>
					<div className="list-box">
						<Image src={wemade} className="soon-img" />
					</div>
					<div className="list-box color-l">
						<Image src={soonImg} className="soon-img" />
					</div>
				</div>
				<div className="content-list content-list-left">
					<div className="list-box color-c">
						<Image src={soonImg} className="soon-img" />
					</div>
					<div className="list-box color-l">
						<Image src={soonImg} className="soon-img" />
					</div>
					<div className="list-box color-c">
						<Image src={soonImg} className="soon-img" />
					</div>
				</div>
				<div className="content-list content-list-right">
					<div className="list-box">
						<Image src={soonImg} className="soon-img" />
					</div>
					<div className="list-box color-l">
						<div className="soon-img">...</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default View;
