// menu-view
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { layoutStores } from "@/store/index"; //store

import DrawerView from "@/components/drawer-view/index";
import Menuview from "@/layout/aside-view/index";

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
import IconArrowPulldown from "@/assets/imgs/layout/common/icon-arrow-pulldown.svg?react";
const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const { setLayoutMenuState, drawerMenuState, setDrawerMenuState } = layoutStores(); //layout
	const toggleDrawerk = () => {
		setDrawerMenuState(!drawerMenuState);
	};
	useEffect(() => {
		// 监听屏幕宽度显示menu
		const updateScreenWidth = () => {
			if (window.innerWidth > 976) {
				setDrawerMenuState(false);
				setLayoutMenuState(true);
			}
		};
		window.addEventListener("resize", updateScreenWidth);
		// 清除函数
		return () => {
			window.removeEventListener("resize", updateScreenWidth);
		};
	}, []);
	return (
		<>
			<div className="flex lg:hidden justify-center items-center gap-1">
				<button
					onClick={() => {
						navigate("/");
					}}
				>
					<SimsportsLogo className="text-primary w-[34px] h-full" />
				</button>
				<button className="rounded-full bg-bgcolor-400 p-1" onClick={toggleDrawerk}>
					<IconArrowPulldown className="rotate-[270deg] size-4" />
				</button>
			</div>
			{drawerMenuState && (
				<DrawerView onClose={toggleDrawerk} value="left">
					<div className="w-[240px] h-screen flex">
						<Menuview />
					</div>
				</DrawerView>
			)}
		</>
	);
};

export default View;
