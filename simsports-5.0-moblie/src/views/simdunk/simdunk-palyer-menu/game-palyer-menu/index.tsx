// game-palyer-menu
import React, { useState } from "react";
import "./index.less";

import { Image } from "antd-mobile";
import tabBg from "@/assets/imgs/simdunk/game/game-tab/tab-bg.png";
import gameplayerSelectionbarUr from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-ur.png";
import gameplayerSelectionbarSsr from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-ssr.png";
import gameplayerSelectionbarSr from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-sr.png";
import gameplayerSelectionbarR from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-r.png";
import gameplayerSelectionbarN from "@/assets/imgs/simdunk/game/game-tab/game-player-selectionbar-n.png";
interface InputProps {
	display: boolean;
	onHandlePalyerChange: (display: boolean, palyerType: string) => void;
}
const View: React.FC<InputProps> = ({ display, onHandlePalyerChange }: InputProps) => {
	// palyerMenu展示数据
	const [palyerMenuData] = useState([
		{
			type: "N",
			gameplayerSelectionbar: gameplayerSelectionbarN,
			state: true,
		},
		{
			type: "R",
			gameplayerSelectionbar: gameplayerSelectionbarR,
			state: true,
		},
		{
			type: "SR",
			gameplayerSelectionbar: gameplayerSelectionbarSr,
			state: true,
		},
		{
			type: "SSR",
			gameplayerSelectionbar: gameplayerSelectionbarSsr,
			state: true,
		},
		{
			type: "UR",
			gameplayerSelectionbar: gameplayerSelectionbarUr,
			state: false,
		},
	]);
	// 点击图片
	const handleViewChange = (item: any) => {
		if (item.state) {
			onHandlePalyerChange(!display, item.type);
		}
	};
	return (
		<>
			<div className="game-palyer-menu">
				<Image src={tabBg} className="game-palyer-menu-bg" />
				<div className="game-palyer-menu-box">
					<div className="main game-palyer-menu-list">
						{palyerMenuData.map((item, index) => {
							return (
								<Image
									key={index}
									src={item.gameplayerSelectionbar}
									onClick={() => {
										handleViewChange(item);
									}}
									className="game-palyer-img"
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default View;
