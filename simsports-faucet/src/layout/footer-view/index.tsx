// footer-view
import React, { useState } from "react";

import { UserInformationData } from "@/utils/medialink"; //medialink
import CommunityView from "../communitu-view/index"; //communityList

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react"; //logo

const View: React.FC = () => {
	//Information
	const [informationData] = useState<any[]>([
		UserInformationData.privacyPolicy,
		UserInformationData.termsOfUse,
	]);

	return (
		<footer className="bg-bgcolor-200">
			<section className="main py-[40px]">
				{/* logo */}
				<SimsportsLogo className="text-primary w-[46px] h-[60px]" />
				<div className="mt-6 flex flex-wrap justify-between gap-6">
					<p className="max-w-[580px] text-text-200">
						SIMSPORTS focuses on the development and operation of web3 sports games, integrating
						game products, communities, esports events, and IP incubation.
					</p>
					{/* community */}
					<div className="flex flex-wrap gap-6">
						<CommunityView />
					</div>
				</div>
				<div className="mt-10 flex flex-wrap justify-between items-center gap-5">
					{/* information */}
					<div className="flex">
						{informationData.map((item, index) => {
							return (
								<p key={index} className="text-text-100">
									<a
										href={item.link}
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="hover:underline"
									>
										{item.name}
									</a>
									{index === informationData.length - 1 ? <></> : <span className="mx-2">|</span>}
								</p>
							);
						})}
					</div>
					{/* Copyright */}
					<p className=" text-text-200">© Copyright 2023 SimSports. All Rights Reserved.</p>
				</div>
			</section>
		</footer>
	);
};

export default View;
