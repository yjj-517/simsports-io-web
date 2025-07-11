// home-player
import React, { useState, useEffect } from "react";

import GamePalyerTab from "./game-palyer-tab/index";
import GamePalyer from "./game-palyer/index";

import { urPlayerDate, ssrPlayerDate, srPlayerDate, rPlayerDate, nPlayerDate } from "./gamepalyer"; //game-palyer数据

const View: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true); //等待数据加载完毕
	const [display, setDisplay] = useState<boolean>(true); //定义显示组件
	const [playerType, setPlayerType] = useState<string>(""); //定义player类型
	const [palyerData, setPalyerData] = useState({}); //定义player数据
	// 修改player数据
	const changPlayerType = () => {
		setLoading(true);
		if (playerType === "UR") {
			setPalyerData(urPlayerDate);
			setLoading(false);
		} else if (playerType === "SSR") {
			setPalyerData(ssrPlayerDate);
			setLoading(false);
		} else if (playerType === "SR") {
			setPalyerData(srPlayerDate);
			setLoading(false);
		} else if (playerType === "R") {
			setPalyerData(rPlayerDate);
			setLoading(false);
		} else if (playerType === "N") {
			setPalyerData(nPlayerDate);
			setLoading(false);
		}
	};
	// 修改playerType数据
	const handleViewChange = (display: boolean, gameType: string) => {
		setDisplay(display);
		setPlayerType(gameType);
	};
	// 监听playerType的变换
	useEffect(() => {
		changPlayerType();
	}, [playerType]);
	return (
		<>
			{display ? (
				<GamePalyerTab display={display} onHandleViewChange={handleViewChange} />
			) : (
				<>{loading ? <></> : <GamePalyer display={display} onHandleViewChange={handleViewChange} palyerData={palyerData} />}</>
			)}
		</>
	);
};

export default View;
