// aside-view
import React from "react";
import { useNavigate } from "react-router-dom";
import { layoutStores } from "@/store/index"; //store

import Menuview from "./menu-view";
import CommunityView from "./community-view";

import IconArrowPulldown from "@/assets/imgs/layout/common/icon-arrow-pulldown.svg?react";
import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
import SimsportsLogoText from "@/assets/imgs/logo/simsports-logo-text.svg?react";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const { layoutMenuState, setLayoutMenuState } = layoutStores(); //layout
	return (
		<>
			<div className="px-4 flex flex-col w-full h-full border-r-2 border-bgcolor-200 bg-bgcolor-100 relative">
				<button
					className="absolute top-7 right-0 z-40 hidden rounded-sm size-6 bg-bgcolor-400 lg:flex justify-center items-center"
					onClick={() => {
						setLayoutMenuState(!layoutMenuState);
					}}
				>
					<IconArrowPulldown className={`${layoutMenuState ? "rotate-90" : "rotate-[270deg]"} size-5 transition-transform `} />
				</button>
				<div
					className="text-primary py-5 shrink-0 flex cursor-pointer"
					onClick={() => {
						navigate("/");
					}}
				>
					<SimsportsLogo />
					{layoutMenuState ? <SimsportsLogoText /> : <></>}
				</div>
				<Menuview />
				<CommunityView />
			</div>
		</>
	);
};

export default View;
