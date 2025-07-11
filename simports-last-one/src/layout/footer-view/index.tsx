// <!-- header -->
import React from "react";

import LogoIcon from "@/assets/imgs/logo/logo.gif";

const View: React.FC = () => {
	return (
		<footer className="border-t border-bgcolor-200">
			<section className="main py-4">
				<div className="flex-between flex-wrap gap-6 ">
					<a
						href="/"
						target="_top"
						rel="nofollow noopener noreferrer"
						className="flex items-center gap-1 h-[72px]"
					>
						<img src={LogoIcon} className="h-full w-auto object-cover" />
					</a>
					<p className="font-primary font-medium">@2025 Last One. All rights reserved</p>
				</div>
			</section>
		</footer>
	);
};

export default View;
