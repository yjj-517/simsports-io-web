// menu-mobile-view
import React, { useEffect } from "react";

import { OfficialLink } from "@/utils/medialink";
import { routerList, handleScroll } from "../menu"; //routerlist

import IconClose from "@/assets/imgs/common/icon-close.svg?react"; //icon-关闭
import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";

interface ViewProps {
	ToggleMenu: (state: any) => void;
}

const View: React.FC<ViewProps> = ({ ToggleMenu }: ViewProps) => {
	useEffect(() => {
		//监听滚动条事件
		if (document.body && document.body.style) {
			if (document.body.style.overflow === "hidden") {
				return;
			}
			document.body.style.overflow = "hidden"; // 禁用页面滚动
		}
		return () => {
			document.body.style.overflow = ""; // 恢复页面滚动
		};
	}, []);
	return (
		<>
			<div className="fixed top-0 left-0 w-screen h-screen z-50 flex lg:hidden flex-col bg-bgcolor-100 ">
				<div className="h-full flex flex-col justify-between ">
					{/* logo */}
					<div className="flex justify-between items-center p-6 border-b border-white/30">
						<SimsportsLogo className="text-primary w-auto h-[38px] object-cover" />
						<button
							onClick={() => {
								ToggleMenu(false);
							}}
						>
							<IconClose className="size-5 text-gray-400 hover:text-primary" />
						</button>
					</div>
					{/* router */}
					<div className="flex-1 flex flex-col p-6 trove-scrollbar gap-3">
						{routerList.map((item, index) => (
							<div
								key={index}
								className="text-xl cursor-pointer hover:text-primary"
								onClick={() => {
									handleScroll(item.id);
									ToggleMenu(false);
								}}
							>
								{item.name}
							</div>
						))}
					</div>
					{/* 跳转 */}
					<a
						href={OfficialLink.officialSite.link}
						target="_blank"
						rel="nofollow noopener noreferrer"
						className="border-t border-white/30 p-2"
						onClick={() => {
							ToggleMenu(false);
						}}
					>
						<button className="primary-button w-full h-10">Go to website</button>
					</a>
				</div>
			</div>
		</>
	);
};

export default View;
