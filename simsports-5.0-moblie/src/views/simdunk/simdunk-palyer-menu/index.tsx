// simdunk-game
import React, { useState, useEffect } from "react";

import GamePalyerMenu from "./game-palyer-menu/index";
import GamePalyer from "./game-palyer/index";

import { urPlayerDate, ssrPlayerDate, srPlayerDate, rPlayerDate, nPlayerDate } from "./simdunkpalyer"; //simdunkpalyer数据
const View: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true); //等待数据加载完毕
	const [display, setDisplay] = useState<boolean>(true); //定义显示组件
	const [palyerType, setPalyerType] = useState<string>(""); //定义palyer类型
	const [palyerData, setPalyerData] = useState({}); //定义palyer数据
	// 修改Palyer数据
	const changPalyer = () => {
		setLoading(true);
		if (palyerType === "UR") {
			setPalyerData(urPlayerDate);
			setLoading(false);
		} else if (palyerType === "SSR") {
			setPalyerData(ssrPlayerDate);
			setLoading(false);
		} else if (palyerType === "SR") {
			setPalyerData(srPlayerDate);
			setLoading(false);
		} else if (palyerType === "R") {
			setPalyerData(rPlayerDate);
			setLoading(false);
		} else if (palyerType === "N") {
			setPalyerData(nPlayerDate);
			setLoading(false);
		}
	};
	// 修改PalyerType数据
	const handlePalyerChange = (display: boolean, palyerType: string) => {
		setDisplay(display);
		setPalyerType(palyerType);
	};
	// 监听PalyerType的变换
	useEffect(() => {
		changPalyer();
	}, [palyerType]);
	return (
		<>
			<div className="simdunk-game">
				{display ? (
					<GamePalyerMenu display={display} onHandlePalyerChange={handlePalyerChange} />
				) : (
					<>
						{loading ? <></> : <GamePalyer display={display} onHandlePalyerChange={handlePalyerChange} palyerData={palyerData} />}
					</>
				)}
			</div>
		</>
	);
};

export default View;
