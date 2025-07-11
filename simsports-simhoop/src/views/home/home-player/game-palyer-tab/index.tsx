// game-palyer-tab
import React, { useState } from "react";
import "./index.less";

import tabBg from "@/assets/imgs/home/player/game-tab/tab-bg.png";
import iconTarrow from "@/assets/imgs/home/player/game-tab/icon-tarrow.png";
import iconPlayerNotavailableyet from "@/assets/imgs/home/player/game-tab/icon-player-notavailableyet.png";
import rectangleBottomImg from "@/assets/imgs/home/player/game-tab/rectangle-bottom-img.png";
import rectangleTopImg from "@/assets/imgs/home/player/game-tab/rectangle-top-img.png";

import gameplayerSelectionbarUr from "@/assets/imgs/home/player/game-tab/game-player-selectionbar-ur.png";
import gameplayerSelectionbarSsr from "@/assets/imgs/home/player/game-tab/game-player-selectionbar-ssr.png";
import gameplayerSelectionbarSr from "@/assets/imgs/home/player/game-tab/game-player-selectionbar-sr.png";
import gameplayerSelectionbarR from "@/assets/imgs/home/player/game-tab/game-player-selectionbar-r.png";
import gameplayerSelectionbarN from "@/assets/imgs/home/player/game-tab/game-player-selectionbar-n.png";
interface InputProps {
	display: boolean;
	onHandleViewChange: (display: boolean, gemeType: string) => void;
}
const View: React.FC<InputProps> = ({ display, onHandleViewChange }: InputProps) => {
	// gamepalyer-tab展示数据
	const [gameTabData] = useState([
		{
			type: "UR",
			gameplayerSelectionbar: gameplayerSelectionbarUr, //TAB
			rectangleImg: rectangleBottomImg, //遮罩层
			notavailable: iconPlayerNotavailableyet, //是否有数据-无
			iconTarrow: "", //是否有数据-有
		},
		{
			type: "SSR",
			gameplayerSelectionbar: gameplayerSelectionbarSsr,
			rectangleImg: rectangleTopImg,
			notavailable: iconPlayerNotavailableyet,
			iconTarrow: "",
		},
		{
			type: "SR",
			gameplayerSelectionbar: gameplayerSelectionbarSr,
			rectangleImg: rectangleBottomImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
		{
			type: "R",
			gameplayerSelectionbar: gameplayerSelectionbarR,
			rectangleImg: rectangleTopImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
		{
			type: "N",
			gameplayerSelectionbar: gameplayerSelectionbarN,
			rectangleImg: rectangleBottomImg,
			notavailable: "",
			iconTarrow: iconTarrow,
		},
	]);
	// 点击图片
	const handleViewChange = (item: any) => {
		if (item.iconTarrow) {
			onHandleViewChange(!display, item.type);
		}
	};
	return (
		<>
			<div className="game-palyer-tab">
				<div className="game-palyer-tab-bg">
					<img src={tabBg} alt="" className="tab-bg" />
				</div>
				<div className="main">
					<h2 className="fillet-h2-title">SimHoop Player Profile</h2>
					<div className="game-palyer-tab-list">
						{gameTabData.map((item, index) => {
							return (
								<div
									key={index}
									className={"list-box " + (item.notavailable ? "list-box-important-no" : "list-box-important")}
									onClick={() => {
										handleViewChange(item);
									}}
								>
									<img src={item.gameplayerSelectionbar} alt="img" className="gameplayer-selectionbar" />
									{item.notavailable ? <img src={item.notavailable} alt="img" className="notavailable-img" /> : <></>}
									{item.iconTarrow ? <img src={item.iconTarrow} alt="img" className="icon-tarrow" /> : <></>}
									<img src={item.rectangleImg} alt="img" className="rectangle-img" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default View;
