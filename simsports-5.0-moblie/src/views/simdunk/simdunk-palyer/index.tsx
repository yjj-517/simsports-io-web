// simdunk-palyer
import React, { useState, useEffect } from "react";
import "./index.less";
import { useNavigate } from "react-router-dom"; //router

import { Image } from "antd-mobile";

import palyerBgImgSr from "@/assets/imgs/simdunk/palyer/palyer-bg-img-sr.png";
import palyerHeadSr from "@/assets/imgs/simdunk/palyer/palyer-head-sr.png";
// import palyerBgImgR from "@/assets/imgs/simdunk/palyer/palyer-bg-img-r.png";
// import palyerHeadR from "@/assets/imgs/simdunk/palyer/palyer-head-r.png";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const [link] = useState<string>(""); //按钮跳转至/mint
	// palyer默认展示数据
	const [initialPalyer, setInitialPalyerData] = useState({
		palyerBgImg: palyerBgImgSr,
		palyerHeadImg: palyerHeadSr,
		text: "SR",
		state: true,
	});
	// palyer展示数据
	const [palyerData, setPalyerData] = useState([
		{
			palyerBgImg: palyerBgImgSr,
			palyerHeadImg: palyerHeadSr,
			text: "SR",
			state: false,
		},
		// {
		// 	palyerBgImg: palyerBgImgR,
		// 	palyerHeadImg: palyerHeadR,
		// 	text: "R",
		// 	state: false,
		// },
	]);
	// 修改数据
	const changeInitialPalyer = (num: number) => {
		setInitialPalyerData(palyerData[num]);
		const upPalyerData = palyerData.map((item: any, index: any) => {
			return {
				...item,
				state: num === index,
			};
		});
		setPalyerData(upPalyerData);
	};
	useEffect(() => {
		changeInitialPalyer(0);
	}, []);
	return (
		<div className="simdunk-palyer">
			<Image src={initialPalyer.palyerBgImg} className="palyer-bg-img" />
			<div className="simdunk-palyer-box">
				<div className="main">
					<h2 className="fillet-h2-title">SimDunk Alpha Player Profile</h2>
					<div className="simdunk-palyer-avatar">
						{palyerData.map((item, index) => {
							return (
								<Image
									key={index}
									src={item.palyerHeadImg}
									className={"avatar-box " + (item.state ? "active" : "")}
									onClick={() => {
										changeInitialPalyer(index);
									}}
								/>
							);
						})}
					</div>
					{link ? (
						<button
							className="fillet-diamond-button"
							onClick={() => {
								navigate(link); //到MINT
							}}
						>
							VIEW MORE
						</button>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default View;
