// header-view
import React, { useState, useEffect } from "react";

import LoginModal from "@/views/login/index";

import { OfficialLink } from "@/utils/medialink";

import SimsportsLogoIcon from "@/assets/imgs/logo/simsports-logo-icon.svg?react"; //logo
import SimsportsLogoText from "@/assets/imgs/logo/simsports-logo-text.svg?react"; //logo

const View: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
	// 登录显示
	const [showLoginModal, setShowLoginModal] = useState<boolean>(false); //LOGIN
	// 修改弹窗状态
	const toggleModal = (state: boolean) => {
		setShowLoginModal(state);
	};
	useEffect(() => {
		// 监听用户是否登录
		const SimIntroEmail = localStorage.getItem("sim-intro-email");
		if (SimIntroEmail) {
			setShowLoginModal(false);
		} else {
			setShowLoginModal(true);
		}
	}, []);

	return (
		<>
			{showLoginModal && <LoginModal ToggleModal={toggleModal} />}
			<header className="fixed top-0 left-1/2 z-50 mx-auto max-h-screen w-screen -translate-x-1/2 flex flex-col justify-between items-center p-3 md:p-6 ">
				<div className="max-w-[1440px] w-full bg-bgcolor-100/40 backdrop-blur-lg px-5 h-[var(--sm-header-height)] flex justify-between items-center rounded-2xl gap-4 border border-white/5">
					<div className="w-full flex items-center gap-2">
						<div className="flex items-center gap-2 lg:gap-6">
							<a
								href="/"
								target="_top"
								rel="nofollow noopener noreferrer"
								className="flex items-center h-[36px] lg:h-[40px]"
							>
								<SimsportsLogoIcon className="h-full w-auto text-primary" />
								<SimsportsLogoText className="h-full w-auto text-primary hidden md:block ml-1" />
							</a>
						</div>
						{children}
					</div>
					<a
						href={OfficialLink.officialSite.link}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						<button className="primary-button w-[138px] h-10">Go to website</button>
					</a>
				</div>
			</header>
		</>
	);
};

export default View;
