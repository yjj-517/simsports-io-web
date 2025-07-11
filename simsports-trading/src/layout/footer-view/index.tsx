// footer-view
import React, { useState } from "react";
import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
import { userInformationData } from "@/utils/medialink";
const View: React.FC = () => {
	const [informationData] = useState([userInformationData.privacyPolicy, userInformationData.termsOfUse]);
	return (
		<>
			<footer className="bg-black">
				<section className="main py-6">
					<SimsportsLogo className="text-primary w-[46px] h-[60px]" />
					<div className="max-w-[700px] mt-4 text-text-300 text-sm">
						SimSports is a Web3 esports and gaming entertainment platform built on the principles of community governance and the
						tokenization of gaming assets.
					</div>
					<div className="flex justify-between justify-items-center flex-wrap mt-4 text-sm">
						<div className="mt-4 text-text-100 flex last:p:span:hidden">
							{informationData.map((item, index) => {
								return (
									<p key={index}>
										<a href={item.link} target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">
											{item.name}
										</a>
										{index === informationData.length - 1 ? <></> : <span className="mx-2">|</span>}
									</p>
								);
							})}
						</div>
						<p className="mt-4 text-text-300">© Copyright 2023 SimSports. All Rights Reserved.</p>
					</div>
				</section>
			</footer>
		</>
	);
};

export default View;
