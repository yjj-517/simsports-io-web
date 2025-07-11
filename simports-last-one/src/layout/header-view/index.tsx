// <!-- header -->
import React from "react";

// import MenuMobileView from "@/layout/header-view/menu-view/menu-mobile-view/index";
// import MenuView from "./menu-view/index";
import LoginView from "../login-view/index";

import LogoIcon from "@/assets/imgs/logo/logo.gif";

const View: React.FC = () => {
	// const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false); //menu-mob弹窗
	// const toggleMenu = (state: boolean) => {
	// 	setShowMenuMobile(state);
	// };
	return (
		<>
			<header className="w-full h-full border-b border-bgcolor-200 z-50">
				<section className="w-full max-w-[1440px] mx-auto relative px-4">
					<div className="flex-between h-(--sm-layout-header-height)">
						<div className="flex-between gap-2">
							<a
								href="/"
								target="_top"
								rel="nofollow noopener noreferrer"
								className="flex items-center gap-1 h-[36px]"
							>
								<img src={LogoIcon} className="h-[72px] w-auto object-cover" />
							</a>
							{/* <MenuView onClose={toggleMenu} closable={showMenuMobile} /> */}
						</div>
						<LoginView />
					</div>
				</section>
			</header>
			{/* {showMenuMobile && <MenuMobileView onClose={toggleMenu} />} */}
		</>
	);
};

export default View;
