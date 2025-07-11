// footer-view
import React from "react";

import CommunityView from "@/layout/community-view/index"; //communityList

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react"; //logo

const View: React.FC = () => {
	return (
		<footer className="relative z-50">
			<section className="main py-10">
				<div className="flex flex-wrap justify-between gap-10 ">
					<SimsportsLogo className="w-[200px] " />
					<div className="flex flex-col gap-4">
						<CommunityView />
						<p className="text-sm text-text-100">
							© Copyright 2023 SimSports. All Rights Reserved.
						</p>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default View;
