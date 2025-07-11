// build-simsports
import React, { useState } from "react";
import "./index.less";

import { Image } from "antd-mobile";
import iconSkip from "@/assets/imgs/layout/icon-skip.png";
import buildSimsports01 from "@/assets/imgs/build/build-simsports/build-simsports01.png";
import buildSimsports02 from "@/assets/imgs/build/build-simsports/build-simsports02.png";
import buildSimsports03 from "@/assets/imgs/build/build-simsports/build-simsports03.png";
import buildSimsports04 from "@/assets/imgs/build/build-simsports/build-simsports04.png";
import buildSimsports05 from "@/assets/imgs/build/build-simsports/build-simsports05.png";
const View: React.FC = () => {
	// 展示数据
	const [builData] = useState([
		{
			title: "Become a SimSports Partner",
			listimg: buildSimsports01,
			linkUrl: "https://forms.gle/M7g2QgX6FS1bHh4k8",
		},
		{
			title: "Open Source",
			listimg: buildSimsports02,
			linkUrl: "",
		},
		{
			title: "Documentation",
			listimg: buildSimsports03,
			linkUrl: "https://docs.simsports.io/simsports",
		},
		{
			title: "Infrastructure",
			listimg: buildSimsports04,
			linkUrl: "",
		},
		{
			title: "AI Technology",
			listimg: buildSimsports05,
			linkUrl: "",
		},
	]);
	// 点击跳转
	const goBuildLink = (link: string) => {
		if (link) {
			window.open(link, "_blank");
		}
	};
	return (
		<div className="main build-simsports">
			<h2 className="fillet-h2-title" style={{ textAlign: "left" }}>
				Build with Simsports
			</h2>
			<p className="fillet-paragraph-text02">
				Leveraging Web3 blockchain and Al technologies, the SimSports gaming platform offers developers an all-in-one
				decentralized game distribution tool for development, creation/IP, operation, and promotion. Simultaneously, it provides
				players with a diverse range of Web3 games, ensuring a fair and asset-protected gaming experience.
			</p>
			<div className="simsports-box">
				{builData.map((item, index) => {
					return (
						<div
							className="list-box"
							key={index}
							onClick={() => {
								goBuildLink(item.linkUrl);
							}}
						>
							<Image src={item.listimg} className="build-simsports-img" />
							<p className="list-box-title">{item.title}</p>
							<div className="list-box-line"></div>
							{item.linkUrl ? <Image src={iconSkip} className="icon-skip" /> : <></>}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default View;
