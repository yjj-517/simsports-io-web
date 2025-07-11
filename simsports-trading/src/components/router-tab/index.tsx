// simdunk
import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

interface RouterTabDataProps {
	path: string;
	title: string;
}
interface RouterTabProps {
	routerTabData: Array<RouterTabDataProps>;
	routerTabPath: string;
}

const View: React.FC<RouterTabProps> = ({ routerTabData, routerTabPath }: RouterTabProps) => {
	const location = useLocation(); // router
	const navigate = useNavigate(); //路由跳转

	const [tabPath, setTabPath] = useState<string>(routerTabPath); //tab
	// 处理路由高亮
	const routerId = () => {
		const pathname = location.pathname;
		if (pathname === routerTabPath) {
			navigate(routerTabData[0].path);
		} else {
			setTabPath(pathname);
		}
	};
	useEffect(() => {
		routerId();
	}, [location.pathname]);
	return (
		<>
			<div className="flex trove-scrollbar">
				{routerTabData.map((item, index) => {
					return (
						<div key={index} className="mr-12 flex flex-col">
							<button
								className={`${item.path === tabPath ? "text-primary" : ""} text-lg font-bold hover:text-primary`}
								onClick={() => {
									navigate(item.path);
								}}
							>
								{item.title}
							</button>
							{item.path === tabPath ? (
								<span className="mt-1 w-full h-0.5 rounded-sm bg-gradient-to-r from-primary to-secondary"></span>
							) : (
								<></>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default View;
