import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.png";

const View: React.FC = () => {
	const location = useLocation(); // router
	const navigate = useNavigate(); //路由跳转
	// router-list
	const [routerList] = useState([
		{
			title: "Mantle Sepolia",
			path: "/faucets/mantle-sepolia",
		},
	]);
	const [routerId, setRouterId] = useState(""); //路由id
	// 处理路由高亮
	const getRouterId = () => {
		const pathname = location.pathname;
		setRouterId(pathname);
	};
	useEffect(() => {
		getRouterId();
	}, [location.pathname]);
	return (
		<>
			<header className="fixed top-0 left-0 w-full h-[76px] px-2 flex justify-between items-center gap-10 z-50 backdrop-opacity-10 backdrop-invert bg-black/40">
				<div className="max-w-[140px]">
					<img
						src={SimsportsLogo}
						className="w-[140px] h-auto cursor-pointer"
						onClick={() => {
							navigate("/");
						}}
					/>
				</div>
				<div className="max-w-[1440px] flex justify-center items-center gap-5 md:gap-10">
					{routerList.map((item, index) => {
						return (
							<button
								key={index}
								className={`${item.path === routerId ? "bg-white text-primary" : " hover:text-primary "} px-2  py-1.5 rounded-lg font-bold  `}
								onClick={() => {
									navigate(item.path);
								}}
							>
								{item.title}
							</button>
						);
					})}
				</div>
				<div className="w-[140px]"></div>
			</header>
		</>
	);
};

export default View;
