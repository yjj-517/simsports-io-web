// <!-- menu-pc-view -->
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; //router

import { routerList } from "../menu"; //routerlist

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const [routerArr] = useState<any[]>(routerList);
	// 跳转
	const goRouter = (item: any) => {
		// router-link
		if (item.path) {
			navigate(item.path);
		}
	};
	return (
		<div className="hidden lg:flex flex-center">
			{routerArr.map((item, index) => (
				<div
					key={index}
					className="cursor-pointer hover:bg-white/10 font-primary text-2xl font-medium text-text-200 px-3 rounded-lg"
					onClick={() => {
						goRouter(item);
					}}
				>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default View;
