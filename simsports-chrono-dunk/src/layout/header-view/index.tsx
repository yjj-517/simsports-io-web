// <!-- header -->
import React from "react";

import LogoImg from "@/assets/imgs/logo/logo.png"; //logo

const View: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<header className="fixed top-0 left-1/2 z-50 mx-auto max-h-screen w-screen -translate-x-1/2 flex flex-col justify-between items-center p-3 md:p-6">
				<div className="max-w-7xl w-full bg-white/5 backdrop-blur-lg px-5 h-[var(--sm-layout-header-height)] flex justify-between items-center rounded-2xl gap-4 border border-white/10">
					<div className="w-full flex items-center gap-2">
						<div className="flex items-center gap-2 lg:gap-6">
							<a
								href="/"
								target="_top"
								rel="nofollow noopener noreferrer"
								className="flex items-center h-9 gap-2"
							>
								<img src={LogoImg} className="h-18 w-auto" />
								<p className="text-xl font-bold">CHRONO DUNK</p>
							</a>
						</div>
						{children}
					</div>
				</div>
			</header>
		</>
	);
};

export default View;
