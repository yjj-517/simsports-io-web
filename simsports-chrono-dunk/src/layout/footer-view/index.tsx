// <!-- footer-view -->
import React, { useState } from "react";

import { userInformationData } from "@/utils/public/medialink"; //medialink

import LogoImg from "@/assets/imgs/logo/logo.png";

const View: React.FC = () => {
	//Information
	const [informationData] = useState<any[]>([
		userInformationData.privacyPolicy,
		userInformationData.termsOfUse,
	]);
	return (
		<>
			<footer className="w-full h-full z-50">
				<section className="main py-10 border-t border-white/50">
					<div className="flex-between gap-4 flex-wrap">
						<img src={LogoImg} className="w-28 h-auto object-cover" />
					</div>
					<div className="flex-between gap-4 flex-wrap">
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
						<p>© Copyright 2025 Chrono Dunk. All Rights Reserved.</p>
					</div>
				</section>
			</footer>
		</>
	);
};

export default View;
